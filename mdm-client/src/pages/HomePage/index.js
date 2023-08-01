// // import "react-slick/slick/slick.css";
// // import "react-slick/slick/slick-theme.css";
// import "./index.css";
// import "react-multi-carousel/lib/styles.css";
// import React, {useEffect, useState} from "react";
// import Layout from "../../components/Layout/Layout";
// import axios from "axios";
// import {NavLink} from "react-router-dom";
// import {useCart} from "../../context/cart";
// import {toast} from "react-hot-toast";

// export const HomePage = () => {
//   const [cart, setCart] = useCart();
//   const [categories, setCategories] = useState([]);
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [productCount, setProductCounts] = useState([]);

//   useEffect(() => {
//     // Load productCounts from localStorage on component mount
//     const savedProductCounts = JSON.parse(localStorage.getItem("productCount"));
//     if (savedProductCounts) {
//       setProductCounts(savedProductCounts);
//     }
//   }, []);

//   const OnProductCount = (each) => {
//     const productCountObject = {
//       id: each._id, // Assuming the unique identifier of each product is stored in `_id`
//       count: 1, // Set the initial count to 1, you can change this as needed
//     };

//     setProductCounts((prevCounts) => [...prevCounts, productCountObject]);
//   };

//   useEffect(() => {
//     // Save productCounts to localStorage whenever it changes
//     localStorage.setItem("productCount", JSON.stringify(productCount));
//   }, [productCount]);

//   const onHandleCategoryBtn = (categoryId) => {
//     console.log(categoryId);

//     // Filter products by the selected category ID
//     const product = products.filter((each) => each.category._id === categoryId);
//     setFilteredProducts(product);
//   };

//   const getAllcategories = async () => {
//     const {data} = await axios.get("/api/v1/category/get-category");
//     setCategories(data.category);
//   };

//   const getAllproducts = async () => {
//     const {data} = await axios.get("/api/v1/product/get-products");
//     setProducts(data.products);
//     console.log(data.products);
//   };

//   useEffect(() => {
//     getAllcategories();
//     getAllproducts();
//   }, []);

//   return (
//     <Layout title={"All Products - Best Offers"}>
//       <div className="home-banner">
//         <img src="/images/banner.jpg" alt="banner" className="banner-img" />
//       </div>
//       <div className="categorys-container">
//         {categories.map((each) => (
//           <button
//             key={each._id}
//             className="category-btn"
//             onClick={() => onHandleCategoryBtn(each._id)}>
//             {each.name}
//           </button>
//         ))}
//       </div>
//       <div className="products-list">
//         {filteredProducts.length === 0
//           ? products.map((each, index) => (
//               <div key={each._id}>
//                 <div className="product-details-container">
//                   <div className="product-card">
//                     <NavLink to={`product/${each.slug}`} className="nav-link">
//                       <img
//                         className="product--image"
//                         src={`/api/v1/product/product-photo/${each._id}`}
//                         alt={each.name}
//                       />
//                       <h2>{each.name}</h2>
//                       <p className="price">{each.price}</p>
//                     </NavLink>
//                     <button
//                       onClick={() => {
//                         OnProductCount(each);
//                         setCart([...cart, each]);
//                         localStorage.setItem(
//                           "cart",
//                           JSON.stringify([...cart, each])
//                         );
//                         toast.success("Item Added to cart");
//                       }}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))
//           : filteredProducts.map((each, index) => (
//               <div key={each._id}>
//                 <div className="product-details-container">
//                   <div className="product-card">
//                     <NavLink to={`product/${each.slug}`} className="nav-link">
//                       <img
//                         src={`/api/v1/product/product-photo/${each._id}`}
//                         alt={each.name}
//                       />
//                       <h2>{each.name}</h2>
//                       <p>{each.price}</p>
//                     </NavLink>
//                     <button
//                       onClick={() => {
//                         OnProductCount(each);
//                         setCart([...cart, each]);
//                         localStorage.setItem(
//                           "cart",
//                           JSON.stringify([...cart, each])
//                         );
//                         toast.success("Item Added to cart");
//                       }}>
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </Layout>
//   );
// };

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

// Optimized code
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
  const [productCount, setProductCount] = useState([]);

  useEffect(() => {
    // Load productCount from localStorage on component mount
    const savedProductCount = JSON.parse(localStorage.getItem("productCount"));
    if (savedProductCount) {
      setProductCount(savedProductCount);
    }
  }, []);

  useEffect(() => {
    // Save productCount to localStorage whenever it changes
    localStorage.setItem("productCount", JSON.stringify(productCount));
  }, [productCount]);

  const customAxios = axios.create({
    baseURL: "http://localhost:3000", // Set your base URL here
    headers: {
      // Only include the headers you want for this instance
      Accept: "application/json, text/plain, */*",
      // "User-Agent":
      //   "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Mobile Safari/537.36",
      // "Accept-Encoding": "gzip, deflate, br",
      // "Accept-Language": "en-US,en;q=0.9",
      // Any other headers you want to include, e.g., "Authorization", etc.
    },
  });

  const fetchCategories = async () => {
    try {
      const {data} = await customAxios.get("/api/v1/category/get-category");
      console.log(data);
      setCategories(data.category);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const {data} = await customAxios.get("/api/v1/product/get-products");
      console.log(data);
      setProducts(data.products);
    } catch (error) {}
  };

  useEffect(() => {
    fetchCategories();
    fetchProducts();
    // eslint-disable-next-line
  }, []);

  const onHandleCategoryBtn = (categoryId) => {
    const filteredProducts = products.filter(
      (product) => product.category._id === categoryId
    );
    setFilteredProducts(filteredProducts);
  };

  const handleAddToCart = (product) => {
    // Check if the product with the same id already exists in the cart
    const isProductAlreadyInCart = cart.some(
      (item) => item._id === product._id
    );

    // If the product is not already in the cart, add it
    if (!isProductAlreadyInCart) {
      const productCountObject = {
        id: product._id,
        count: 1, // Set the initial count to 1, you can change this as needed
      };

      setProductCount((prevCounts) => [...prevCounts, productCountObject]);
      setCart((prevCart) => [...prevCart, product]);
      localStorage.setItem("cart", JSON.stringify([...cart, product]));
      toast.success("Item Added to cart");
    } else {
      // Show a toast or a message indicating that the product is already in the cart
      toast.error("This product is already in your cart.");
    }
  };

  const renderProductCards = (products) => {
    return products.map((product) => (
      <div key={product._id}>
        <div className="product-details-container">
          <div className="product-card">
            <NavLink to={`product/${product.slug}`} className="nav-link">
              {/* Add a placeholder image or loading state */}
              <img
                src={`/api/v1/product/product-photo/${product._id}`}
                alt={product.name}
              />
              <h2>{product.name}</h2>
              <p className="price">{product.price}</p>
            </NavLink>
            <button onClick={() => handleAddToCart(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <Layout title={"All Products - Best Offers"}>
      <div className="home-banner">
        <img src="/images/banner.jpg" alt="banner" className="banner-img" />
      </div>
      <div className="categorys-container">
        {categories.map((category) => (
          <button
            key={category._id}
            className="category-btn"
            onClick={() => onHandleCategoryBtn(category._id)}>
            {category.name}
          </button>
        ))}
      </div>
      <div className="products-list">
        {filteredProducts.length === 0
          ? renderProductCards(products)
          : renderProductCards(filteredProducts)}
      </div>
    </Layout>
  );
};
