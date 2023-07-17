import React from "react";
import {NavLink} from "react-router-dom";
import {useAuth} from "../../context/auth";
import {toast} from "react-hot-toast";

export const Header = () => {
    const [auth, setAuth] = useAuth()

    const onHandleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: ""
        })
        localStorage.removeItem("auth");
        toast.success("Logout Successfully")
    }


    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <NavLink to="" className="navbar-brand">MDM HERBAL PRODUCTS</NavLink>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link active" aria-current="page">
                                Category
                            </NavLink>
                        </li>
                        {
                        !auth.user ? (<>
                            <li className="nav-item">
                                <NavLink to="/register" className="nav-link">
                                    Register
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link ">
                                    Login
                                </NavLink>
                            </li>
                        </>) : (<>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> {
                                    auth.user.name
                                } </NavLink>
                                <ul className="dropdown-menu">
                                    <li>
                                        <NavLink to={
                                                `/dashboard/${
                                                    auth.user.role === 1 ? "admin" : "user"
                                                }`
                                            }
                                            className="nav-link">
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/login" className="nav-link"
                                            onClick={onHandleLogout}>Logout</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </>)
                    }
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link ">
                                Cart(0)
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
};

export default Header;
