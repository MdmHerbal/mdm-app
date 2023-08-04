// import "./index.css";
// import React, {useEffect, useState} from "react";
// import Layout from "../../components/Layout/Layout";
// import {useCart} from "../../context/cart";
// import {AiOutlineDelete} from "react-icons/ai";
// import {toast} from "react-hot-toast";
// import {useAuth} from "../../context/auth";
// import DropIn from "braintree-web-drop-in-react";
// import axios from "axios";

// const CartPage = () => {
//   const [cart, setCart] = useCart();
//   const [auth] = useAuth();
//   const [clientToken, setClientToken] = useState("");
//   const [instance, setInstance] = useState("");
//   // Initialize productCount with an array of counts, one count for each product in the cart

//   const [productCount, setProductCount] = useState([]);

//   const changeProductCount = (e, pid, index) => {
//     const newCount = parseInt(e.target.value);
//     const updatedProductCount = [...productCount];
//     updatedProductCount[pid] = {
//       id: pid,
//       count: newCount,
//     };
//     setProductCount(updatedProductCount);
//   };

//   useEffect(() => {
//     // Assuming you have some initial data for productCount
//     const initialProductCount = productCount.map((product) => ({
//       id: product._id,
//       count: 1,
//     }));
//     setProductCount(initialProductCount);
//   }, [productCount]);

//   const removeCartItem = (pid) => {
//     try {
//       let myCart = [...cart];
//       let index = myCart.findIndex((item) => item._id === pid);
//       myCart.splice(index, 1);
//       setCart(myCart);
//       localStorage.setItem("cart", JSON.stringify(myCart));
//       localStorage.removeItem("productCount");
//       toast.success("Product Deleted Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handlePayment = async () => {
//     try {
//       const {nonce} = await instance.requestPaymentMethod();
//       const {data} = await axios.post("/api/v1/product/braintree/payment", {
//         nonce,
//         cart,
//       });

//       console.log(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // get Payment GetWay Token
//   const getToken = async () => {
//     try {
//       const {data} = await axios.get("/api/v1/product/braintree/token");
//       setClientToken(data.clientToken);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     // Load productCount from localStorage
//     const savedProductCount = JSON.parse(localStorage.getItem("productCount"));
//     if (savedProductCount) {
//       setProductCount(savedProductCount);
//     }
//     // eslint-disable-next-line
//   }, []);

//   useEffect(() => {
//     getToken();
//   }, [auth.token]);

//   return (
//     <Layout>
//       <div className="row">
//         <div>
//           <h1>
//             {!auth?.user
//               ? "Hello Guest"
//               : `Hello  ${auth?.token && auth?.user?.name}`}
//             <p>
//               {cart?.length
//                 ? `You have ${cart.length} items in your cart ${
//                     auth?.token ? "" : "please login to checkout !"
//                   }`
//                 : " Your Cart Is Empty"}
//             </p>
//           </h1>
//         </div>
//         <div className="col-md-9">
//           {cart.map((each, index) => (
//             <ul key={each._id} className="cart-item-bg">
//               <img
//                 src={`/api/v1/product/product-photo/${each._id}`}
//                 alt={each.name}
//                 width="30%"
//                 height={"100px"}
//               />
//               <h6>{each.name}</h6>
//               <h6>{each.price}</h6>
//               <h6>
//                 <input
//                   type="number"
//                   min="1"
//                   defaultValue={
//                     productCount.find((item) => item.id === each._id)?.count
//                   }
//                   className="cart-input"
//                   onChange={(e) => changeProductCount(e, each._id, index)}
//                 />
//               </h6>
//               <h6>₹150</h6>

//               <AiOutlineDelete
//                 className="delete-icon"
//                 onClick={() => removeCartItem(each._id)}
//               />
//             </ul>
//           ))}
//         </div>
//         <div className="col-md-3">
//           <div class="card mb-3">
//             <div class="card-header py-3"></div>
//             <div class="card-body">
//               <ul class="list-group list-group-flush">
//                 <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                   Products
//                   <span>$53.98</span>
//                 </li>
//                 <li class="list-group-item d-flex justify-content-between align-items-center px-0">
//                   Shipping
//                   <span>Gratis</span>
//                 </li>
//                 <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                   <div>
//                     <strong>Total amount</strong>
//                     <strong>
//                       <p class="mb-0">(including VAT)</p>
//                     </strong>
//                   </div>
//                   <span>
//                     <strong>$53.98</strong>
//                   </span>
//                 </li>
//               </ul>

//               <button type="button" class="btn btn-primary btn-lg btn-block">
//                 Go to checkout
//               </button>
//             </div>
//           </div>
//           <div>
//             {!clientToken || !auth.token || !cart.length ? (
//               ""
//             ) : (
//               <>
//                 <DropIn
//                   options={{
//                     authorization: clientToken,
//                     paypal: {flow: "vault"},
//                   }}
//                   onInstance={(instance) => setInstance(instance)}
//                 />
//                 <button className="btn btn-primary" onClick={handlePayment}>
//                   Make a Payment
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;

//Optimize code

// import "./index.css";
// import React, {useEffect, useState} from "react";
// import Layout from "../../components/Layout/Layout";
// import {useCart} from "../../context/cart";
// import {AiOutlineDelete} from "react-icons/ai";
// import {toast} from "react-hot-toast";
// import {useAuth} from "../../context/auth";
// import DropIn from "braintree-web-drop-in-react";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";

// const CartPage = () => {
//   const [cart, setCart] = useCart();
//   const [auth] = useAuth();
//   const [clientToken, setClientToken] = useState("");
//   const [instance, setInstance] = useState(null);
//   const [productCount, setProductCount] = useState([]);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const savedProductCount = JSON.parse(localStorage.getItem("productCount"));
//     if (savedProductCount && Array.isArray(savedProductCount)) {
//       setProductCount(savedProductCount);
//     }
//   }, []);

//   const changeProductCount = (e, pid) => {
//     const newCount = parseInt(e.target.value);
//     setProductCount((prevProductCount) =>
//       prevProductCount.map((product) =>
//         product.id === pid ? {...product, count: newCount} : product
//       )
//     );
//   };

//   useEffect(() => {
//     localStorage.setItem("productCount", JSON.stringify(productCount));
//   }, [productCount]);

//   const removeCartItem = (pid) => {
//     try {
//       const updatedCart = cart.filter((item) => item._id !== pid);
//       setCart(updatedCart);
//       localStorage.setItem("cart", JSON.stringify(updatedCart));
//       toast.success("Product Deleted Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const loadScript = (src) => {
//     // console.log(src);
//     return new Promise((resolve) => {
//       const scriptEl = document.createElement("script");
//       scriptEl.src = src;

//       scriptEl.onload = () => {
//         resolve(true);
//       };

//       scriptEl.onerror = () => {
//         resolve(false);
//       };

//       document.body.appendChild(scriptEl);
//     });
//   };

//   const loadPayment = async () => {
//     try {
//       const res = await loadScript(
//         "https://checkout.razorpay.com/v1/checkout.js"
//       );

//       if (!res) {
//         alert("Your Offline...Faild to Razorpay");
//         return;
//       }

//       // const {data} = await axios.post("/api/v1/product/razorpay/payment", {});

//       const options = {
//         key: "rzp_test_gmvFSAhhLN8Hh7",
//         currency: "INR",
//         amount: 10 * 100,
//         name: "mdm thanks",
//         description: "Thanks For Purchasing",

//         handler: (response) => {
//           alert(response.razopay_pament_id);
//           alert("Pament Successfull");
//         },
//       };
//       const paymentObject = window.Razorpay(options);
//       paymentObject.open();
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // const handlePayment = async () => {
//   //   try {
//   //     const {nonce} = await instance.requestPaymentMethod();
//   //     const {data} = await axios.post("/api/v1/product/braintree/payment", {
//   //       nonce,
//   //       cart,
//   //     });

//   //     console.log("Payment data:", data);
//   //     // You can perform further actions based on the payment result if needed.
//   //   } catch (error) {
//   //     console.log("Error during payment:", error);
//   //     // Handle error gracefully (display error messages, etc.).
//   //   }
//   // };

//   // const getToken = async () => {
//   //   try {
//   //     const {data} = await axios.get("/api/v1/product/braintree/token");
//   //     setClientToken(data.clientToken);
//   //   } catch (error) {
//   //     console.log(error);
//   //   }
//   // };

//   // useEffect(() => {
//   //   getToken();
//   // }, [auth.token]);

//   return (
//     <Layout>
//       <div className="row">
//         <div>
//           <h1>
//             {!auth?.user
//               ? "Hello Guest"
//               : `Hello ${auth?.token && auth?.user?.name}`}
//             <p>
//               {cart?.length
//                 ? `You have ${cart.length} items in your cart ${
//                     auth?.token ? "" : "please login to checkout !"
//                   }`
//                 : " Your Cart Is Empty"}
//             </p>
//           </h1>
//         </div>
//         <div className="col-md-9">
//           {cart.map((each, index) => (
//             <ul key={each._id} className="cart-item-bg">
//               <img
//                 src={`/api/v1/product/product-photo/${each._id}`}
//                 alt={each.name}
//                 width="30%"
//                 height={"100px"}
//               />
//               <h6>{each.name}</h6>
//               <h6>{each.price}</h6>
//               <h6>
//                 <input
//                   type="number"
//                   min="1"
//                   defaultValue={
//                     productCount.find((item) => item.id === each._id)?.count ||
//                     1
//                   }
//                   className="cart-input"
//                   onChange={(e) => changeProductCount(e, each._id)}
//                 />
//               </h6>
//               <h6>₹{each.price * (productCount[index]?.count || 1)}</h6>

//               <AiOutlineDelete
//                 className="delete-icon"
//                 onClick={() => removeCartItem(each._id)}
//               />
//             </ul>
//           ))}
//         </div>
//         <div className="col-md-3">
//           {cart.length >= 1 && (
//             <div className="card mb-3">
//               <p>Total amount</p>
//               <button class="btn btn-primary" onClick={() => loadPayment()}>
//                 Pay via Razorpay
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default CartPage;

// 2 nd time

import "./index.css";
import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import {useCart} from "../../context/cart";
import {AiOutlineDelete} from "react-icons/ai";
import {toast} from "react-hot-toast";
import {useAuth} from "../../context/auth";
//import {useNavigate} from "react-router-dom";
import {usePriceContext} from "../../context/price";
import axios from "axios";

const CartPage = () => {
  const [auth] = useAuth();
  const [cart, setCart] = useCart();
  const [productCount, setProductCount] = useState([]);
  //const navigate = useNavigate();
  const {updateTotalCount} = usePriceContext();

  const animateCartItems = () => {
    const cartItems = document.querySelectorAll(".cart-item-bg");

    cartItems.forEach((item, index) => {
      item.style.animation = `fadeIn 0.3s ease ${index / 7}s`;
    });
  };

  useEffect(() => {
    const savedProductCount = JSON.parse(localStorage.getItem("productCount"));
    if (savedProductCount && Array.isArray(savedProductCount)) {
      setProductCount(savedProductCount);
    }
    animateCartItems();
  }, []);

  const changeProductCount = (e, pid) => {
    const newCount = parseInt(e.target.value);
    setProductCount((prevProductCount) =>
      prevProductCount.map((product) =>
        product.id === pid ? {...product, count: newCount} : product
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("productCount", JSON.stringify(productCount));
  }, [productCount]);

  const removeCartItem = (pid) => {
    try {
      const updatedCart = cart.filter((item) => item._id !== pid);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Remove the product count from the productCount state
      setProductCount((prevProductCount) =>
        prevProductCount.filter((product) => product.id !== pid)
      );
      // Update the productCount in local storage after removing the product
      localStorage.setItem(
        "productCount",
        JSON.stringify(productCount.filter((product) => product.id !== pid))
      );

      toast.success("Product Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const scriptEl = document.createElement("script");
      scriptEl.src = src;
      scriptEl.onload = () => resolve(true);
      scriptEl.onerror = () => resolve(false);
      document.body.appendChild(scriptEl);
    });
  };

  const handlePayment = async () => {
    console.log(auth);
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );
      if (!res) {
        alert(
          "Failed to load Razorpay. Please check your internet connection."
        );
        return;
      }

      const {data} = await axios.post("/api/v1/product/razorpay/payment", {
        amount: calculateTotalAmount() * 100,
        name: auth?.user?.name,
        cart,
      });
      //upadate price and product price

      const options = {
        key: "rzp_test_gmvFSAhhLN8Hh7", // Replace with your Razorpay API key
        currency: "INR",
        amount: data.amount,
        name: "MDM HERBAL PRODUCTS",
        description: "Thanks For Purchasing",
        order_id: data.id,
        handler: (response) => {
          // Handle the payment success callback
          alert("Payment Successful!");
          // navigate("/dashboard/user/orders");
          // setCart([]); // Clear the cart after successful payment
          updateTotalCount(productCount);
        },
        prefill: {
          name: auth?.user?.name,
          email: auth?.user?.email,
        },
        theme: {
          color: "#067e52", // Replace with your preferred color theme
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotalAmount = () => {
    return cart.reduce(
      (total, item) =>
        total +
        item.price *
          (productCount.find((product) => product.id === item._id)?.count || 1),
      0
    );
  };

  return (
    <Layout>
      <div className="row">
        <div>
          <h1>
            {!auth?.user
              ? "Hello Guest"
              : `Hello ${auth?.token && auth?.user?.name}`}
            <p>
              {cart?.length
                ? `You have ${cart.length} items in your cart ${
                    auth?.token ? "" : "please login to checkout !"
                  }`
                : " Your Cart Is Empty"}
            </p>
          </h1>
        </div>
        <div className="col-md-9">
          <div>
            <span>Shopping Cart</span>
            <span>{cart.length} items</span>
            <hr />
          </div>
          {cart.map((each, index) => (
            <ul key={each._id} className="cart-item-bg">
              <img
                src={`/api/v1/product/product-photo/${each._id}`}
                alt={each.name}
                width="30%"
                height={"100px"}
              />
              <h6>{each.name}</h6>
              <h6>{each.price}</h6>
              <h6>
                <input
                  type="number"
                  min="1"
                  defaultValue={
                    productCount.find((item) => item.id === each._id)?.count ||
                    1
                  }
                  className="cart-input"
                  onChange={(e) => changeProductCount(e, each._id)}
                />
              </h6>
              <h6>₹{each.price * (productCount[index]?.count || 1)}</h6>

              <AiOutlineDelete
                className="delete-icon"
                onClick={() => removeCartItem(each._id)}
              />
            </ul>
          ))}
        </div>
        <div className="col-md-3">
          {cart.length >= 1 && (
            <div className="card mb-3">
              <div className="card-header py-3">Order Summary</div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>₹{calculateTotalAmount().toFixed(2)}</span>
                  </li>
                  {/* Add more items for shipping, tax, or any other relevant cost */}
                </ul>

                {/* Payment button */}
                {auth?.token ? (
                  <>
                    <button className="btn btn-primary" onClick={handlePayment}>
                      Checkout
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="btn btn-primary"
                      onClick={() => toast.error("Please Login to Checkout")}>
                      Checkout
                    </button>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
