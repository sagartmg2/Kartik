import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";

import Login from "./Page/Login"
import Signup from "./Page/Signup"
import Navbar from './Components/Navbar';
import Home from './Page/Home';
import './App.css';
import axios from 'axios';


function App() {
  const [login_status, setLoginStatus] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("token")) {

      axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}users/get-user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(res => {
          setLoginStatus(true)
        })
        .catch(err => {

        })


    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar login_status={login_status} setLoginStatus={setLoginStatus} />
        <div className='container' >
          <Routes>
            <Route path='' element={<Home login_status={login_status} />} ></Route>
            <Route path='login' element={<Login setLoginStatus={setLoginStatus} />} ></Route>
            <Route path='signup' element={<Signup />} ></Route>
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
