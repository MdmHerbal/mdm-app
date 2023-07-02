const Footer = () => {
    return (
      <footer className="footer-section-bg">
        <div className="foo-sec-con">
          <h1>MDM</h1>
          <div className="email-input">
            <input
              type="email"
              placeholder="Enetr Your Email"
              className="foo-input"
            />
            <button className="sub-btn">SUBSCRIBE</button>
          </div>
          <hr className="hr-line" />
          <div className="foo-details-con  style1">
            <p>Best Sellers</p>
            <p>Gift Ideas</p>
            <p>New Realeases</p>
            <p>Today's Deals</p>
            <p>Customer Service</p>
          </div>
          <p className="help-line-text">Help Line Number : +91 91006722961</p>
          <p>© 2018 Honasa Consumer Limited. All Rights Reserved</p>
        </div>
      </footer>
    );
  };

  export default Footer;