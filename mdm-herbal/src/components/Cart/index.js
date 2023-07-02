import "./index.css";
import Header from "../Header";
const Cart = () => {
  return (
    <div className="cart-con-bg">
      <Header />

      <div className="ordered-item">
        <div className="products-con">
          <img
            src="https://rukminim1.flixcart.com/image/224/224/kawtvgw0/soap/h/m/f/1-75-glutathione-skin-whitening-soap-for-brightening-whitening-original-imafsdmtryyzmzfp.jpeg?q=90"
            className="ordered-img"
          />
          <div className="product-heading-price-con">
            <p className="p-heading">Manjista Soap</p>
            <p className="p-rs">Rs 75</p>
          </div>
        </div>

        <div className="count-btn-con">
          <button className="pr-count-btn">-</button>
          <input type="text" className="count-input" />
          {/* <p>1</p> */}
          <button className="pr-count-btn">+</button>
        </div>

        <div>150/-</div>
      </div>
    </div>
  );
};

export default Cart;
