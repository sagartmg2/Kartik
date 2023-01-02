import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUser } from '../Redux/Slice/UserSlice';

const Navbar = ({ login_status, setLoginStatus, search_term, setSearchTerm, user }) => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.clear()
        setLoginStatus(false)
        dispatch(setUser(null))
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        {
                            !login_status
                                ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/signup">Singup</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </>
                                :
                                <>
                                    {
                                        user?.role == "buyer"
                                        &&
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/cart">Cart</Link>
                                        </li>
                                    }
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/products/create">Create Product</Link>
                                    </li>
                                </>
                        }
                    </ul>

                    <form className="d-flex">
                        <input className="form-control me-2"
                            value={search_term}
                            onChange={(e) => {
                                setSearchTerm(e.target.value)
                            }}
                            type="search" placeholder="Search" aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                    {
                        login_status
                        &&
                        <button className="btn btn-sm btn-secondary ml-3" onClick={handleLogout}>logout</button>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
