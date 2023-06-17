import "./index.css";

import { BiSearch } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiLoginCircleFill } from "react-icons/ri";

const Header = () => {
  return (
    <div className="header-section">
      <div className="header">
        <h2>MDM HERBAL PRODUCTS</h2>
        <div>
          <div className="search">
            <BiSearch className="icon" />
            <input
              type="search"
              className="search-input"
              placeholder="Search for categorys"
            />
          </div>
          {/* <div>
                <BiSearch className="icon"/>
                <p>Search</p>
            </div>         */}
        </div>
        <div className="header-right-sec">
          <div className="header-icons">
            <AiOutlineShoppingCart className="icon" />
            <p>Cart</p>
          </div>
          <div className="header-icons ">
            <RiLoginCircleFill className="icon" />
            <p>Profile</p>
          </div>
        </div>
      </div>
      <hr className="hr-line"/>
      <div className="category-list-heading">
        <p className="category-heading">Home</p>
        <p className="category-heading">Soaps</p>
        <p className="category-heading">Shampoos</p>
        <p className="category-heading">Oils</p>
        <p className="category-heading">Honey</p>
        <p className="category-heading">Store Location</p>
      </div>
    </div>
  );
};

export default Header;
