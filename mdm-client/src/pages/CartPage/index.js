import "./index.css";
import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import {useCart} from "../../context/cart";
import {AiOutlineDelete} from "react-icons/ai";
import {toast} from "react-hot-toast";
import {useAuth} from "../../context/auth";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";

const CartPage = () => {
  const [cart, setCart] = useCart();
  const [auth] = useAuth();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");

  const removeCartItem = (pid) => {
    console.log(pid);
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
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

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // get Payment GetWay Token
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
          <p>
            {cart.length >= 1
              ? `You have ${cart.length} items in your cart`
              : "Your Cart Is Empty"}
          </p>
        </div>
        <div className="col-md-9">
          {cart.map((each) => (
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
                  defaultValue="1"
                  className="cart-input"
                />
              </h6>
              <h6>₹150</h6>

              <AiOutlineDelete
                className="delete-icon"
                onClick={() => removeCartItem(each._id)}
              />
            </ul>
          ))}
        </div>
        <div className="col-md-3">
          <div class="card mb-3">
            <div class="card-header py-3">
              <h5 class="mb-0">Summary</h5>
            </div>
            <div class="card-body">
              <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span>$53.98</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                  Shipping
                  <span>Gratis</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p class="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  <span>
                    <strong>$53.98</strong>
                  </span>
                </li>
              </ul>

              <button type="button" class="btn btn-primary btn-lg btn-block">
                Go to checkout
              </button>
            </div>
          </div>
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
