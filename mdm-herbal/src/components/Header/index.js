import "./index.css";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";
import React, { useState } from "react";
import {
  COffcanvasHeader,
  CButton,
  COffcanvas,
  COffcanvasTitle,
  COffcanvasBody,
  CCloseButton,
} from "@coreui/react";

// const onclickCart = () => {
//   return (
//     <div>
//       {/* <Cart /> */}
//       console.log("Dhanunay")
//     </div>
//   );
// };

// class Header extends React.Component {
//   onclickCart() {
//     const [visible, setVisible] = useState(false);
//     return (
//       <>
//         <CButton onClick={() => setVisible(true)}>Toggle offcanvas</CButton>
//         <COffcanvas
//           placement="start"
//           visible={visible}
//           onHide={() => setVisible(false)}>
//           <COffcanvasHeader>
//             <COffcanvasTitle>Offcanvas</COffcanvasTitle>
//             <CCloseButton
//               className="text-reset"
//               onClick={() => setVisible(false)}
//             />
//           </COffcanvasHeader>
//           <COffcanvasBody>
//             Content for the offcanvas goes here. You can place just about any
//             Bootstrap component or custom elements here.
//           </COffcanvasBody>
//         </COffcanvas>
//       </>
//     );
//   }

//   render() {
//     return (
//       <header className="fixed-header">
//         {/* <div id="leaves">
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//           <i></i>
//         </div> */}
//         <div className="header">
//           <h2 className="text-3xl font-bold underline">MDM HERBAL PRODUCTS</h2>
//           <div>
//             <div className="search">
//               <BiSearch className="icon" />
//               <input
//                 type="search"
//                 className="search-input"
//                 placeholder="Search for Products"
//               />
//             </div>
//             {/* <div>
//                   <BiSearch classNameName="icon"/>
//                   <p>Search</p>
//               </div> */}
//           </div>
//           <div className="header-right-sec">
//             {/* <Link to="/cart-items" className="nav-item">
//               <div className="header-icons">
//                 <AiOutlineShoppingCart className="icon" />
//                 <p>Cart</p>
//               </div>
//             </Link> */}
//             <div className="header-icons" onClick={this.onclickCart}>
//               <AiOutlineShoppingCart className="icon" />
//               <p>Cart</p>
//             </div>

//             <div className="header-icons ">
//               <RiLoginCircleFill className="icon" />
//               <p>Profile</p>
//             </div>
//           </div>
//         </div>
//         <hr className="hr-line" />
//         <div className="category-list-heading">
//           <Link to="/" className="nav-item">
//             Home
//           </Link>
//           <Link to="/soaps" className="nav-item">
//             Soaps
//           </Link>
//           <Link to="/shampoos" className="nav-item">
//             Shampoos
//           </Link>
//           <Link to="/oils" className="nav-item">
//             Oils
//           </Link>
//           <Link to="/stote location" className="nav-item">
//             Store Location
//           </Link>

//           {/* <p classNameName="category-heading">Home</p>
//           <p classNameName="category-heading">Soaps</p>
//           <p classNameName="category-heading">Shampoos</p>
//           <p classNameName="category-heading">Oils</p>
//           <p classNameName="category-heading">Honey</p>
//           <p classNameName="category-heading">Store Location</p> */}
//         </div>
//       </header>
//     );
//   }
// }

const Header = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };
  // const onclickCart = () => {

  //   return (
  // <div>
  //   <CButton onClick={() => setVisible(true)}>Toggle offcanvas</CButton>
  //   <COffcanvas
  //     placement="start"
  //     visible={visible}
  //     onHide={() => setVisible(false)}>
  //     <COffcanvasHeader>
  //       <COffcanvasTitle>Offcanvas</COffcanvasTitle>
  //       <CCloseButton
  //         className="text-reset"
  //         onClick={() => setVisible(false)}
  //       />
  //     </COffcanvasHeader>
  //     <COffcanvasBody>
  //       Content for the offcanvas goes here. You can place just about any
  //       Bootstrap component or custom elements here.
  //     </COffcanvasBody>
  //   </COffcanvas>
  // </div>
  //   );
  // };

  return (
    <header className="fixed-header">
      {/* <div id="leaves">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div> */}
      <div className="header">
        <h2 className="text-3xl font-bold underline">MDM HERBAL PRODUCTS</h2>
        <div>
          <div className="search">
            <BiSearch className="icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Search for Products"
            />
          </div>
          {/* <div>
                <BiSearch classNameName="icon"/>
                <p>Search</p>
            </div> */}
        </div>
        <div className="header-right-sec">
          <Link to="/cart-items" className="nav-item">
            <div className="header-icons">
              <AiOutlineShoppingCart className="icon" />
              <p>Cart</p>
            </div>
          </Link>
          {/* <button onClick={onclickCart}>Cart</button> */}
          {/* <>
            <CButton onClick={console.log("Dhanunjay")}>Toggle offcanvas</CButton>
            <COffcanvas
              placement="start"
              visible={visible}
              onHide={() => setVisible(false)}>
              <COffcanvasHeader>
                <COffcanvasTitle>Offcanvas</COffcanvasTitle>
                <CCloseButton
                  className="text-reset"
                  onClick={() => setVisible(false)}
                />
              </COffcanvasHeader>
              <COffcanvasBody>
                Content for the offcanvas goes here. You can place just about
                any Bootstrap component or custom elements here.
              </COffcanvasBody>
            </COffcanvas>
          </> */}
          {/* <button onClick={handleClick}>Cart</button> */}
          {/* <div>
            {visible && (
              <div className="ordered-list-bg">
                <CButton onClick={() => setVisible(true)}>
                  Toggle offcanvas
                </CButton>
                <COffcanvas
                  placement="start"
                  visible={visible}
                  onHide={() => setVisible(false)}>
                  <COffcanvasHeader>
                    <COffcanvasTitle>Offcanvas</COffcanvasTitle>
                    <CCloseButton
                      className="text-reset"
                      onClick={() => setVisible(false)}
                    />
                  </COffcanvasHeader>
                  <COffcanvasBody>
                    Content for the offcanvas goes here. You can place just
                    about any Bootstrap component or custom elements here.
                  </COffcanvasBody>
                </COffcanvas>
              </div>
            )}
          </div> */}
          <div className="header-icons ">
            <RiLoginCircleFill className="icon" />
            <p>Profile</p>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="category-list-heading">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/soaps" className="nav-item">
          Soaps
        </Link>
        <Link to="/shampoos" className="nav-item">
          Shampoos
        </Link>
        <Link to="/oils" className="nav-item">
          Oils
        </Link>
        <Link to="/stote location" className="nav-item">
          Store Location
        </Link>

        {/* <p classNameName="category-heading">Home</p>
        <p classNameName="category-heading">Soaps</p>
        <p classNameName="category-heading">Shampoos</p>
        <p classNameName="category-heading">Oils</p>
        <p classNameName="category-heading">Honey</p>
        <p classNameName="category-heading">Store Location</p> */}
      </div>
    </header>
  );
};

// const Header = () => {
//   return (
//     <header className="bg-gray-800 text-white">
//       <div className="container mx-auto py-4 px-6 flex items-center justify-between">
//         <h1 className="text-lg font-semibold">Logo</h1>
//         <nav>
//           <ul className="flex space-x-4">
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 Home
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 About
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 Services
//               </a>
//             </li>
//             <li>
//               <a href="#" className="hover:text-gray-300">
//                 Contact
//               </a>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// chargpt

export default Header;
