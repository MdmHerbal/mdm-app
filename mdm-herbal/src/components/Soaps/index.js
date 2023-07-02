import "./index.css";
import Header from "../Header";
import ProductCard from "../ProductCard";
import Footer from "../Footer";
const Soaps = () => {
  return (
    <div className="soaps-bg">
      <Header />
      <div>
        <img
          src="https://cdn.shopify.com/s/files/1/1420/1982/files/essential_oil_480x480.jpg?v=1609315770"
          alt="banner"
          className="soap-banner-image"
        />
      </div>

      <div className="soaps-body-con">
        <ProductCard />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Soaps;
