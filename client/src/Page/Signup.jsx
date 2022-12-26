import axios from "axios"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate()

    const [is_submitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState([])
    const [error, setError] = useState({
        name: "",
        email: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            "name": e.target.name.value,
            "email": e.target.email.value,
            "password": e.target.password.value,
            "role": e.target.role.value,
        }

        setIsSubmitting(true)

        let url = "https://ecommerce-sagartmg2.vercel.app/api/users/signup"

        axios.post(url, data)
            .then(res => {
                console.log(res);
                navigate("/login")
            }).catch(err => {
                setIsSubmitting(false)
                console.log(err)
                setErrors(err.response.data.errors)

                let temp = {} // spread operator

                err.response.data.errors.forEach(validation_error => {
                    temp[validation_error["param"]] = validation_error.msg
                })
                setError(temp)
            })

        console.log({ data });
        /*
        make request to api.  
         */
    }

    return (
        <div>
            <h1>singup</h1>
            <div className="alert alert-danger" role="alert">
                This is a danger alert—check it out!
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" name='name' className="form-control" />
                    {
                        errors.find(el => el.param == "name")
                        &&
                        <small style={{ color: "red" }}> {errors.find(el => el.param == "name").msg}</small>
                    }
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' className="form-control" />
                    {/* {
                        errors.find(el => el.param == "email")
                        &&
                        <small style={{ color: "red" }}> {errors.find(el => el.param == "email").msg}</small>
                    } */}
                {
                    error.email
                    &&
                    <small style={{ color: "red" }}> {error.email}</small>
                }

                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="text" name='password' className="form-control" />
                    <small style={{ color: "red" }}>the field is required</small>

                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Role</label>
                    <select className="form-select" name='role'>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                <button type="submit" className="btn btn-primary mt-5" disabled={is_submitting}>
                    {
                        is_submitting ? "Submitting..." : "Submit"
                    }
                </button>
            </form>


            {/* 
            
                create a form 
                    name": "string",
                    "email": "string@st.com",
                    "password": "password",
                    "role": "buyer"

                    onSubmit 
                        https://www.npmjs.com/package/axios
                    

                    CRUD operation
                        create
                        read
                        update
                        delete
                    
                    http methods
                        GET - read
                        POST - create
                        PUT - update
                        delete - delete
                    
                    STATUS code
                        2  success 
                            200
                            201
                            204
                        3 redirect 
                            302
                            303
                        4
                            400 - bad request
                            401 - un-authenticated
                            403 - forbidden
                            404  - resource not found
                        5
                            500 - server error 

            */}
        </div>
    );
}

export default Signup;
