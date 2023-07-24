// import "react-slick/slick/slick.css";
// import "react-slick/slick/slick-theme.css";
import "./index.css";
import "react-multi-carousel/lib/styles.css";

import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import {NavLink} from "react-router-dom";
import {useCart} from "../../context/cart";
import {toast} from "react-hot-toast";

export const HomePage = () => {
  const [cart, setCart] = useCart();
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const onHandleCategoryBtn = (categoryId) => {
    console.log(categoryId);

    // Filter products by the selected category ID
    const product = products.filter((each) => each.category._id === categoryId);
    setFilteredProducts(product);
  };

  const getAllcategories = async () => {
    const {data} = await axios.get("/api/v1/category/get-category");
    setCategories(data.category);
  };

  const getAllproducts = async () => {
    const {data} = await axios.get("/api/v1/product/get-products");
    setProducts(data.products);
  };

  useEffect(() => {
    getAllcategories();
    getAllproducts();
  }, []);

  return (
    <Layout title={"All Products - Best Offers"}>
      <div className="home-banner"></div>
      <div className="categorys-container">
        {categories.map((each) => (
          <button
            key={each._id}
            className="category-btn"
            onClick={() => onHandleCategoryBtn(each._id)}>
            {each.name}
          </button>
        ))}
      </div>
      <div className="products-list">
        {filteredProducts.length === 0
          ? products.map((each) => (
              <div key={each._id}>
                <div className="product-details-container">
                  <div className="card">
                    <NavLink to={`product/${each.slug}`}>
                      <img
                        className="product--image"
                        src={`/api/v1/product/product-photo/${each._id}`}
                        alt={each.name}
                      />
                      <h2>{each.name}</h2>
                      <p className="price">{each.price}</p>
                    </NavLink>
                    <button
                      onClick={() => {
                        setCart([...cart, each]);
                        toast.success("Item Added to cart");
                      }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          : filteredProducts.map((each) => (
              <div key={each._id}>
                <div className="product-details-container">
                  <div className="card">
                    <NavLink to={`product/${each.slug}`}>
                      <img
                        className="product--image"
                        src={`/api/v1/product/product-photo/${each._id}`}
                        alt={each.name}
                      />
                      <h2>{each.name}</h2>
                      <p className="price">{each.price}</p>
                    </NavLink>
                    <button
                      onClick={() => {
                        setCart([...cart, each]);
                        toast.success("Item Added to cart");
                      }}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </Layout>
  );
};

// const responsive = {
//   superLargeDesktop: {
//     // the naming can be any, depends on you.
//     breakpoint: {max: 4000, min: 1024},
//     items: 5,
//   },
//   desktop: {
//     breakpoint: {max: 1024, min: 800},
//     items: 3,
//   },
//   tablet: {
//     breakpoint: {max: 800, min: 464},
//     items: 2,
//   },
//   mobile: {
//     breakpoint: {max: 464, min: 0},
//     items: 1,
//   },
// };

// <Carousel responsive={responsive} className="card-carosel">
//         <div className="card">
//           <img
//             className="product--image"
//             src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//             alt="product-img"
//           />
//           <h2>Colorful sneakers</h2>
//           <p className="price">$19.99</p>

//           <p>
//             <button>Add to Cart</button>
//           </p>
//         </div>
//         <div className="card">
//           <img
//             className="product--image"
//             src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//             alt="product-img"
//           />
//           <h2>Colorful sneakers</h2>
//           <p className="price">$19.99</p>
//           <p>
//             <button>Add to Cart</button>
//           </p>
//         </div>
//         <div className="card">
//           <img
//             className="product--image"
//             src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//             alt="product-img"
//           />
//           <h2>Colorful sneakers</h2>
//           <p className="price">$19.99</p>

//           <p>
//             <button>Add to Cart</button>
//           </p>
//         </div>
//         <div className="card">
//           <img
//             className="product--image"
//             src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//             alt="product-img"
//           />
//           <h2>Colorful sneakers</h2>
//           <p className="price">$19.99</p>

//           <p>
//             <button>Add to Cart</button>
//           </p>
//         </div>
//         <div className="card">
//           <img
//             className="product--image"
//             src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//             alt="product-img"
//           />
//           <h2>Colorful sneakers</h2>
//           <p className="price">$19.99</p>

//           <p>
//             <button>Add to Cart</button>
//           </p>
//         </div>
//         <div className="card">
//           <img
//             className="product--image"
//             src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//             alt="product-img"
//           />
//           <h2>Colorful sneakers</h2>
//           <p className="price">$19.99</p>

//           <p>
//             <button>Add to Cart</button>
//           </p>
//         </div>
//         <div className="card">
//           <img
//             className="product--image"
//             src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2R1Y3RzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//             alt="product-img"
//           />
//           <h2>Colorful sneakers</h2>
//           <p className="price">$19.99</p>

//           <p>
//             <button>Add to Cart</button>
//           </p>
//         </div>
//       </Carousel>
