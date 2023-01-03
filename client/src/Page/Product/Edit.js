import axios from 'axios';
import React from 'react'

export default function Create() {

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

        let temp = [...e.target.images.files]
        temp.forEach(image => {
            form_data.append("images", image)
        })

        axios.post(`https://ecommerce-sagartmg2.vercel.app/api/products`, form_data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
        .then(res =>{
            alert("success")
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="" class="form-label">Name</label>
                    <input type="text" name='name' class="form-control" id="" required />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">price</label>
                    <input type="number" name='price' class="form-control" id="" required />
                </div>
                <div class="mb-3">
                    <label for="" class="form-label">Images</label>
                    <input type="file" multiple name="images" class="form-control" id="" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
