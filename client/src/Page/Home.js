import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import NOImage from "../Assets/Images/no-image.jpg"
import RoleComponent from '../Components/RoleComponent';
import { CartContext } from '../App';
import ReactPaginate from 'react-paginate';


const Home = (props) => {

    const cart_context = useContext(CartContext);


    let navigate = useNavigate();

    const [products, setProduct] = useState([]);

    const [pagination_info, setPaginationInfo] = useState({
        total: 0,
        per_page: 25,
        page: 1,
    })


    const fetchProducts = () => {
        axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}products?search_term=${props.search_term}&page=${pagination_info.page}`)
            .then(res => {
                // console.log(res.data.data[0].data)
                setProduct(res.data.data[0].data)
                setPaginationInfo(res.data.data[0].metadata[0])

            }).catch(err => {

            })
    }

    useEffect(() => {
        fetchProducts()
        // }, []);
    }, [props.search_term, pagination_info.page]);

    /* 
            CRUD
            create
            read
            update
            de;ete
    
    
            HTTP METHOD 
            GET - READ
            POST    - CREATE
            PUT / PATCH  - UPDATE
            DELETE
    
            status
            2
                200,201,204
            4
                400 - bad request
                401 - unauthnticated
                403 - forbidden
                404  - resource not found
            5
                500 - server error
    */

    /* 
        auth flow 
            1. login
            2. backend checks if email and password are correct
            3. if incorrect 401 , 200-> access-token
            4. access protected api resources using that token  // usually sent in headers as authorization header
    */

    /* 
    
    useEffect(() => {
       // do some task 
    }, []); // ==> empty dependency - component Did Mount
    }, [props.search_term]); // ==>  dependency with values - component Did UPdate
    
    
    */

    const handleAddToCart = (product) => {
        console.log("add to cart");

        /* 
            [
                    {
                        _id,
                        name,
                        price,
                        quanity : 2 
                    },
                    {
                        name,
                        price,
                        quanity
                    },
            ]
        
        */

        if (cart_context.cart_items.find(cart_item => cart_item._id === product._id)) {
            // setCartItems([...cart_items, product])
            let temp = [...cart_context.cart_items].map(el => {
                if (el._id == product._id) {
                    return {
                        ...el,
                        quantity: el.quantity + 1
                    }
                } else {
                    return el
                }
            })

            cart_context.setCartItems(temp)

        } else {
            cart_context.setCartItems([
                ...cart_context.cart_items,
                {
                    ...product,
                    quantity: 1
                }
            ])
        }




        /* 
            check if login or not 
        */
        if (!props.login_status) {
            navigate("/login")
        }

    }

    function deleteProduct(id) {
        axios.delete("https://ecommerce-sagartmg2.vercel.app/api/products/" + id, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(res => {
                fetchProducts()
            })
            .catch(err => {

            })
    }



    return (
        <>
            {/* <img src ="https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=" /> */}
            {/* <img src = "../Assets/Images/no-image.jpg" /> */}
            {/* <img src={require("../Assets/Images/no-image.jpg")} /> */}
            {/* <img src ={NOImage} /> */}

            <div className='row '>
                {
                    products.map(product => {
                        let src = product.images.length == 0 ? require("../Assets/Images/no-image.jpg") : product.images[0]
                        return <div className='col-md-3 my-3' key={product._id}>
                            <Link to={`/products/${product._id}`}>

                                <div className="card" >
                                    {/* {
                                    product.images.length == 0
                                        ?
                                        <img src={NOImage} className="card-img-top" alt="..."
                                            style={{
                                                height: "150px"
                                            }} />
                                        :
                                        <img src={product.images[0]} className="card-img-top" alt="..."
                                            style={{
                                                height: "150px"
                                            }}
                                        />
                                } */}
                                    <img src={src} className="card-img-top" alt="..."
                                        style={{
                                            height: "150px"
                                        }}
                                    />

                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">${product.price}</p>
                                        <RoleComponent role="buyer" user={props.user}>
                                            <button className="btn btn-primary" onClick={(e) => {
                                                e.preventDefault();
                                                handleAddToCart(product)
                                            }} >Add to cart</button>
                                        </RoleComponent>
                                        <RoleComponent role="seller" user={props.user}>
                                            <Link to={`products/edit/${product._id}`}>
                                                <button className="btn btn-secondary" onClick={(e) => {
                                                    handleAddToCart(product)
                                                }} >edit</button>
                                            </ Link>

                                            <button className="btn btn-danger mx-2" onClick={(e) => {
                                                e.preventDefault();
                                                deleteProduct(product._id);
                                            }} >delete</button>
                                        </RoleComponent>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
            {
                products.length > 0
                &&
                <div className='row'>
                    <div className="react-paginate-wrapper">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel="next >"
                            onPageChange={(e) => {
                                console.log(e)

                                setPaginationInfo({
                                    ...pagination_info,
                                    page: (e.selected + 1)
                                })

                            }}
                            pageRangeDisplayed={5}
                            pageCount={Math.ceil(pagination_info.total / pagination_info.per_page)}
                            previousLabel="< previous"
                            renderOnZeroPageCount={null}
                        />
                    </div>
                </div>
            }
        </>

    );
}

export default Home;
