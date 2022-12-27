import { useState } from "react";
import axios from "axios"

import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("b@b.com")
    const [password, setPassord] = useState("password")

    const [data, setData] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            "email": email,
            "password": password,
        }

        let url = "https://ecommerce-sagartmg2.vercel.app/api/users/login"

        axios.post(url, data)
            .then(res => {
                localStorage.setItem("token", res.data.access_token)
                props.setLoginStatus(true)

                axios.get("https://ecommerce-sagartmg2.vercel.app/api/users/get-user", {
                    headers: {
                        Authorization: `Bearer ${res.data.access_token}`
                    }
                }).then(user_res => {
                    props.setUser(user_res.data)
                })


                navigate("/")
            }).catch(err => {

            })


        console.log({ data });
        /*
        make request to api.  
         */
    }

    console.log("render..");

    const handlechangeEmail = () => {
        setEmail()
    }

    const handleChange = () => {

    }

    // useEffect(() => {

    // }, [input]);

    return (
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    {/* <input type="email" name='email' onChange={setEmail("e.target.value")}  value={email} className="form-control" /> */}
                    <input type="email" name='email' onChange={(e) => {
                        setEmail(e.target.value)
                    }} value={email} className="form-control" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="text" name='password' onChange={(e) => {
                        setPassord(e.target.value)
                    }} value={password} className="form-control" />
                </div>
                <button type="submit" className="btn btn-primary mt-5">Submit</button>
            </form>

            {/* 
                        create 

                
                */}
        </div>
    );
}

export default Login;
