import React from "react";
import Layout from "../../components/Layout/Layout";
import {useCart} from "../../context/cart";
import "./index.css";
import {AiOutlineDelete} from "react-icons/ai";
const CartPage = () => {
  const [cart] = useCart();
  return (
    <Layout>
      <div className="row">
        <div className="col-md-7 m-3">
          {cart.map((each) => (
            <ul key={each._id} className="cart-item-bg">
              <img
                src={`/api/v1/product/product-photo/${each._id}`}
                alt={each.name}
                width="35%"
                height={"100px"}
              />
              <h6>{each.name}</h6>
              <h6>{each.price}</h6>
              <h6>
                <input
                  type="number"
                  min="0"
                  defaultValue="0"
                  className="cart-input"
                />
              </h6>
              <h6>₹150</h6>
              <AiOutlineDelete className="delete-icon" />
            </ul>
          ))}
        </div>
        <div className="col-md-5"></div>
      </div>
    </Layout>
  );
};

export default CartPage;
