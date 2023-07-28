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

import "./index.css";
import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import {useCart} from "../../context/cart";
import {AiOutlineDelete} from "react-icons/ai";
import {toast} from "react-hot-toast";
import {useAuth} from "../../context/auth";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth] = useAuth();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [productCount, setProductCount] = useState([]);
  const navigate = useNavigate();
  const changeProductCount = (e, pid, index) => {
    const newCount = parseInt(e.target.value);
    const updatedProductCount = [...productCount];
    updatedProductCount[index] = {
      id: pid,
      count: newCount,
    };
    setProductCount(updatedProductCount);
  };

  useEffect(() => {
    const initialProductCount = cart.map((product) => ({
      id: product._id,
      count: 1,
    }));
    setProductCount(initialProductCount);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("productCount", JSON.stringify(productCount));
  }, [productCount]);

  const removeCartItem = (pid) => {
    try {
      const updatedCart = cart.filter((item) => item._id !== pid);
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("Product Deleted Successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const handlePayment = async () => {
    try {
      const {nonce} = await instance.requestPaymentMethod();
      const {data} = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });

      console.log("payment", data);
      console.log("cart", cart);
    } catch (error) {
      console.log(error);
    }
  };

  const getToken = async () => {
    try {
      const {data} = await axios.get("/api/v1/product/braintree/token");
      setClientToken(data.clientToken);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getToken();
  }, [auth.token]);

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
                    productCount.find((item) => item.id === each._id)?.count
                  }
                  className="cart-input"
                  onChange={(e) => changeProductCount(e, each._id, index)}
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
              <div className="card-header py-3"></div>
              <div className="card-body">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>
                      $
                      {cart.reduce(
                        (total, item) =>
                          total +
                          item.price *
                            (productCount.find((p) => p.id === item._id)
                              ?.count || 1),
                        0
                      )}
                    </span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>
                        $
                        {cart.reduce(
                          (total, item) =>
                            total +
                            item.price *
                              (productCount.find((p) => p.id === item._id)
                                ?.count || 1),
                          0
                        )}
                      </strong>
                    </span>
                  </li>
                </ul>
                <div>
                  <div>{auth?.token && <p>{auth?.users?.address}</p>} </div>
                  {auth?.token ? (
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={() => navigate("/dashboard/user/cus-profile")}>
                      Update your Profile
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary btn-lg btn-block"
                      onClick={() => navigate("/login")}>
                      Please Login
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          <div>
            {!clientToken || !auth.token || !cart.length ? (
              ""
            ) : (
              <>
                <DropIn
                  options={{
                    authorization: clientToken,
                    paypal: {flow: "vault"},
                  }}
                  onInstance={(instance) => setInstance(instance)}
                />
                <button className="btn btn-primary" onClick={handlePayment}>
                  Make a Payment
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
