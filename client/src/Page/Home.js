import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NOImage from "../Assets/Images/no-image.jpg"

const Home = (props) => {

    let navigate = useNavigate();

    const [products, setProduct] = useState([]);

    useEffect(() => {

        axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}products`)
            .then(res => {
                // console.log(res.data.data[0].data)
                setProduct(res.data.data[0].data)
            }).catch(err => {

            })
    }, []);

    const handleAddToCart = () => {
        console.log("add to cart");

        /* 
            check if login or not 
        */
        if (!props.login_status) {
            navigate("/login")
        }

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
                                    <button className="btn btn-primary" onClick={handleAddToCart} >Add to cart</button>
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>
        </>

    );
}

export default Home;
