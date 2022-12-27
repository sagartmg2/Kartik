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
import Cart from './Page/Cart';
import ProtectedRoute from './Components/ProtectedRoute';


function App() {

  const [login_status, setLoginStatus] = useState(false);
  const [user, setUser] = useState(null);

  const [search_term, setSearchTerm] = useState("");


  useEffect(() => {
    if (localStorage.getItem("token")) {

      axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}users/get-user`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
        .then(res => {
          setLoginStatus(true)
          setUser(res.data)
        })
        .catch(err => {

        })
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} login_status={login_status} setLoginStatus={setLoginStatus} search_term={search_term} setSearchTerm={setSearchTerm} />
        <div className='container' >
          <Routes>
            <Route path='' element={<Home user={user} login_status={login_status} search_term={search_term} />} ></Route>
            <Route path='login' element={<Login
              setUser={setUser}
              setLoginStatus={setLoginStatus} />} ></Route>
            <Route path='signup' element={<Signup />} ></Route>

            <Route path="" element={<ProtectedRoute login_status={login_status} />}>
              <Route path='cart' element={<Cart />} ></Route>
            </Route>

          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
