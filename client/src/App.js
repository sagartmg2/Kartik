import { useState, useEffect, createContext } from 'react';
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

export const CartContext = createContext()

function App() {

  const [login_status, setLoginStatus] = useState(false);
  const [dataw_fetched, setDataFetched] = useState(false)
  const [user, setUser] = useState(null);  // after login {name,id,role}

  const [cart_itmes, setCartItems] = useState([

  ]);

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
          setDataFetched(true)
        })
        .catch(err => {

        })
    } else {
      setDataFetched(true)
    }
  }, []);

  if (!dataw_fetched) {
    return <h1>data fetching.. please wait..</h1>
  }

  return (
    <>
      <CartContext.Provider value={{
        cart_items: cart_itmes,
        setCartItems
      }}>
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
      </CartContext.Provider >


    </>
  );
}

export default App;
