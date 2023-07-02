import "./index.css";
import Header from "../Header";
import dashBoardImage from "../images/dashBoardImage.jpg";
import DashboardBoady from "../DashboardBoady";
import Footer from "../Footer";

// const footerSection = () => {
//   return (
//     <footer className="footer-section-bg">
//       <div className="foo-sec-con">
//         <h1>MDM</h1>
//         <div className="email-input">
//           <input
//             type="email"
//             placeholder="Enetr Your Email"
//             className="foo-input"
//           />
//           <button className="sub-btn">SUBSCRIBE</button>
//         </div>
//         <hr className="hr-line" />
//         <div className="foo-details-con  style1">
//           <p>Best Sellers</p>
//           <p>Gift Ideas</p>
//           <p>New Realeases</p>
//           <p>Today's Deals</p>
//           <p>Customer Service</p>
//         </div>
//         <p className="help-line-text">Help Line Number : +91 91006722961</p>
//         <p>© 2018 Honasa Consumer Limited. All Rights Reserved</p>
//       </div>
//     </footer>
//   );
// };

const Dashboard = () => {
  return (
    <div className="dash-board">
      
      <Header />
      <div>
        {/* <div className="animated-btn-con">
          <button className="animated-button">Shop Now</button>
        <button className="animated-button">Learn More</button>
        </div> */}
        <img
          src="https://cdn.shopify.com/s/files/1/1420/1982/files/essential_oil_480x480.jpg?v=1609315770"
          alt="banner"
          className="banner-image"
        />
        <div className="dashboard-body">
          <DashboardBoady />
        </div>
      </div>
      {/* <div>{footerSection()}</div> */}
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Dashboard;
