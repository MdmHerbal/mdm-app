import "./index.css";
import Header from "../Header";
import example from "../images/soap.jpg";
import ProductCard from "../ProductCard";

const Dashboard = () => {
  return (
    <div className="dash-board">
      <Header />
      <div>
        <img src={example} alt="vanaOil" className="banner-image" />
        <div className="product-list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
