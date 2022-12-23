import axios from "axios"
import { useNavigate } from "react-router-dom";


const Login = (props) => {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();

        let data = {
            "email": e.target.email.value,
            "password": e.target.password.value,
        }

        let url = "https://ecommerce-sagartmg2.vercel.app/api/users/login"

        axios.post(url, data)
            .then(res => {
                localStorage.setItem("token", res.data.access_token)
                props.setLoginStatus(true)
                navigate("/")
            }).catch(err => {

            })


        console.log({ data });
        /*
        make request to api.  
         */
    }
    return (
        <div>
            <h1>login</h1>
            <form onSubmit={handleSubmit}>

                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" name='email' value={"s@s.com"} class="form-control" />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Password</label>
                    <input type="text" name='password' value={"password"} class="form-control" />
                </div>
                <button type="submit" class="btn btn-primary mt-5">Submit</button>
            </form>

            {/* 
                        create 

                
                */}
        </div>
    );
}

export default Login;
