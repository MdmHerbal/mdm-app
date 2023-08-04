import React, {useState} from "react";

import {NavLink} from "react-router-dom";
import {useAuth} from "../../../context/auth";
import {toast} from "react-hot-toast";
import SearchInput from "../../Form/SearchInput";
import {useCart} from "../../../context/cart";
import {Badge} from "antd";
import {BsCart4} from "react-icons/bs";
import {Link} from "react-router-dom";
import {FaHome, FaSearch, FaCartArrowDown, FaUser} from "react-icons/fa";
import {BiSearch} from "react-icons/bi";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import "./index.css";
import {Register} from "./../../../pages/Auth/Register/index";

const Menu = ["Profile", "Logout"];

export const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const [open, setOpen] = useState(false);

  const onHandleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  return (
    // <>
    //   <nav className="navbar navbar-expand-lg bg-body-tertiary">
    //     <div className="container-fluid">
    //       <button
    //         className="navbar-toggler"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarTogglerDemo01"
    //         aria-controls="navbarTogglerDemo01"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation">
    //         <span className="navbar-toggler-icon" />
    //       </button>
    //       <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
    //         <NavLink to="" className="navbar-brand">
    //           MDM HERBAL PRODUCTS
    //         </NavLink>

    //         <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //           <SearchInput className="col-md-none" />
    //           <li className="nav-item">
    //             <NavLink to="/" className="nav-link active" aria-current="page">
    //               Home
    //             </NavLink>
    //           </li>
    //           <li className="nav-item">
    //             <NavLink to="/" className="nav-link active" aria-current="page">
    //               Category
    //             </NavLink>
    //           </li>
    //           {!auth.user ? (
    //             <>
    //               <li className="nav-item">
    //                 <NavLink to="/register" className="nav-link">
    //                   Register
    //                 </NavLink>
    //               </li>
    //               <li className="nav-item">
    //                 <NavLink to="/login" className="nav-link ">
    //                   Login
    //                 </NavLink>
    //               </li>
    //             </>
    //           ) : (
    //             <>
    //               <li className="nav-item dropdown">
    //                 <NavLink
    //                   className="nav-link dropdown-toggle"
    //                   href="#"
    //                   role="button"
    //                   data-bs-toggle="dropdown"
    //                   aria-expanded="false">
    //                   {auth.user.name}
    //                 </NavLink>
    //                 <ul className="dropdown-menu">
    //                   <li>
    //                     <NavLink
    //                       to={`/dashboard/${
    //                         auth.user.role === 1 ? "admin" : "user"
    //                       }`}
    //                       className="nav-link">
    //                       Dashboard
    //                     </NavLink>
    //                   </li>
    //                   <li>
    //                     <NavLink
    //                       to="/login"
    //                       className="nav-link"
    //                       onClick={onHandleLogout}>
    //                       Logout
    //                     </NavLink>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </>
    //           )}
    //           <li className="nav-item">
    //             <NavLink to="/cart" className="nav-link ">
    //               <Badge count={cart?.length} showZero offset={[10, -5]}>
    //                 <BsCart4 className="fs-5" />
    //               </Badge>
    //             </NavLink>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //   </nav>
    // </>

    <div>
      <div className="navbar">
        <div>MDM HERBAL PRODUCTS</div>
        <div className="search-bar-con">
          <input
            type="text"
            className="header-input"
            placeholder="Search Products.........."
          />
          <BiSearch className="search-icon" />
        </div>

        <div className="header-icons-con">
          <FaSearch className="header-icon search" />
          <Link to="/">
            <FaHome className="header-icon" />
          </Link>

          <Link to="/cart">
            <FaCartArrowDown className="header-icon" />
          </Link>
          {!auth.user ? (
            <>
              <Link to="/login">
                <button class="btn success">login</button>
              </Link>
            </>
          ) : (
            <></>
          )}
          {auth.user && (
            <FaUser className="header-icon" onClick={() => setOpen(!open)} />
          )}

          {open && (
            <>
              <div className="sub-menu-wrap">
                <p>{auth.user.name}</p>
                <NavLink
                  to={`/dashboard/${auth.user.role === 1 ? "admin" : "user"}`}
                  className="nav-link">
                  Dashboard
                </NavLink>
                <p>Profile</p>
                <Link to="/login" onClick={onHandleLogout}>
                  Logout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;

// <div className="header-icons-con">
//   <FaHome className="header-icon" />
//   <FaSearch className="header-icon" />
//   <FaCartArrowDown className="header-icon" />
//   <FaUser className="header-icon" />
// </div>;
