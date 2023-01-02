import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


export default function Show() {

    const [product, setproduct] = useState({});
    console.log(useParams()) // {id:}
    // let id = useParams().id
    // or destrcture it. 
    const { id } = useParams()


    useEffect(() => {
        axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${id}`)
            .then(res => {
                setproduct(res.data.data)
            })
    }, []);


    return (
        <div>
            <div className='row'>
                <div className='col-md-6'>
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="http://res.cloudinary.com/dtv8dtpkm/image/upload/v1671693232/vsw1fdmllxeoivwo5ycm.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="http://res.cloudinary.com/dtv8dtpkm/image/upload/v1671693232/vsw1fdmllxeoivwo5ycm.jpg" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="http://res.cloudinary.com/dtv8dtpkm/image/upload/v1671693232/vsw1fdmllxeoivwo5ycm.jpg" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className='col-md-6'>
                    <h1>{product.name}</h1>
                    <h2>${product.price}</h2>
                </div>

            </div>
        </div>
    )
}
