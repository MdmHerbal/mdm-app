// import "./index.css";
// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import productImage from "../images/productImage.jpg";

// // import PrevArrowIcon from './prev-arrow.svg'; // Import the custom previous arrow icon/image
// // import NextArrowIcon from './next-arrow.svg'; // Import the custom next arrow icon/image

// const DashBoardCatlog = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow:5,
//     slidesToScroll: 5,
//     autoplay: false,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     className: "product-card"

//   };

//   // const settings = {
//   //   // carousel settings...
//   //   prevArrow: <CustomPrevArrow />, // Use the custom previous arrow component
//   //   nextArrow: <CustomNextArrow /> // Use the custom next arrow component
//   // };

//   return (
//     <Slider {...settings} className="slider-bg">
//       <div className="product-card-con">
//         <img src={productImage} alt="Image 1" className="cur-image" />
//         <p>MDM HERBAL SAMPOO</p>
//         <button className="card-btn">Add to Card</button>
//       </div>
//       <div className="product-card-con">
//         <img src={productImage} alt="Image 1" className="cur-image" />
//         <p>MDM HERBAL SAMPOO</p>
//         <button className="card-btn">Add to Card</button>
//       </div>
//       <div className="product-card-con">
//         <img src={productImage} alt="Image 1" className="cur-image" />
//         <p>MDM HERBAL SAMPOO</p>
//         <button className="card-btn">Add to Card</button>
//       </div>
//       <div className="product-card-con">
//         <img src={productImage} alt="Image 1" className="cur-image" />
//         <p>MDM HERBAL SAMPOO</p>
//         <button className="card-btn">Add to Card</button>
//       </div>
//       <div className="product-card-con">
//         <img src={productImage} alt="Image 1" className="cur-image" />
//         <p>MDM HERBAL SAMPOO</p>
//         <button className="card-btn">Add to Card</button>
//       </div>
//       <div className="product-card-con">
//         <img src={productImage} alt="Image 1" className="cur-image" />
//         <p>MDM HERBAL SAMPOO</p>
//         <button className="card-btn">Add to Card</button>
//       </div>
//       <div className="product-card-con">
//         <img src={productImage} alt="Image 1" className="cur-image" />
//         <p>MDM HERBAL SAMPOO</p>
//         <button className="card-btn">Add to Card</button>
//       </div>
//       <div>
//         <img src={productImage} alt="Image 2" className="cur-image" />
//         <button>Add to Card</button>
//       </div>
//       <div>
//         <img src={productImage} alt="Image 3" className="cur-image" />
//         <button>Add to Card</button>
//       </div>
//     </Slider>
//   );
// };

// export default DashBoardCatlog;

// //   // Custom previous arrow component
// // const CustomPrevArrow = (props) => (
// //   <div className="custom-prev-arrow" onClick={props.onClick}>
// //     <img src={PrevArrowIcon} alt="Previous" />
// //   </div>
// // );

// // // Custom next arrow component
// // const CustomNextArrow = (props) => (
// //   <div className="custom-next-arrow" onClick={props.onClick}>
// //     <img src={NextArrowIcon} alt="Next" />
// //   </div>
// // );

// source code

import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";
import { dataDigitalBestSeller } from "../data";

import soap from "../images/soap.jpg";
const DashBoardCatlog = () => {
  const [defaultImage, setDefaultImage] = useState({});
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow:4,
    slidesToScroll: 4,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    autoplaySpeed: 1000,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data) => {
    setDefaultImage((prev) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: soap,
    }));
  };

  return (
    <div className="curosel-container">
      <Slider {...settings}>
        {dataDigitalBestSeller.map((item) => (
          <div className="card">
            <div className="card-top">
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
            </div>
            <div className="card-details">
              <h2 className="card-heading">MDM HERBAL PRODUCTS</h2>
              <div className="card-bottom">
                <h3 className="price-tag"> ₹75 </h3>
                <button className="add-btn">Add To Card</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DashBoardCatlog;
