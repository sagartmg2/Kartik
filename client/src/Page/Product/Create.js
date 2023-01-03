import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Create() {

    const [product, setproduct] = useState({});
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            axios.get(`https://ecommerce-sagartmg2.vercel.app/api/products/${id}`)
                .then(res => {
                    setproduct(res.data.data)
                })
        }
    }, []);


    function handleSubmit(e) {
        e.preventDefault();


        /* 
            requestion 
            get,post,...

            options
                CORS - cross origin resource sharing 
                checking if server domain (https://ecommerce-sagartmg2.vercel.app/) gives access to the forntend domain (localhost)
        
        */
        //    console.log(e.target.images.files[0])
        //    return;

        let form_data = new FormData();
        form_data.append("name", e.target.name.value)
        form_data.append("price", e.target.price.value)

        // let temp = [...e.target.images.files]
        // .forEach(image => {
        //     form_data.append("images", image)
        // })

        product.images.forEach(image => {
            form_data.append("images", image)
        })



        let method = "post"
        let url = `https://ecommerce-sagartmg2.vercel.app/api/products`

        if (id) {
            method = "put"
            url = `https://ecommerce-sagartmg2.vercel.app/api/products/${id}`
        }

        axios[method](url, form_data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(res => {
                alert("success")
            })
    }

    function handleChange(e) {
        if (e.target.type == "file") {
            setproduct({ ...product, [e.target.name]: [...product.images, ...e.target.files] })
        } else {
            setproduct({ ...product, [e.target.name]: e.target.value })
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input type="text" name='name' value={product.name} onChange={handleChange} class="form-control" id="" required />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">price</label>
                    <input type="number" name='price' value={product.price} onChange={handleChange} class="form-control" id="" required />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Images</label>
                    <div>
                        {
                            product.images?.map(image => {

                                let src = image;
                                if (typeof (image) != "string") {
                                    src =  URL.createObjectURL(image)
                                }

                                return <img src={src} height="100" width={100} />
                            })
                        }
                    </div>
                    <input type="file" multiple name="images" onChange={handleChange} class="form-control" id="" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
