import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <img
        src="./Pictures/Header.png"
        alt="Header Banner"
        width="100%"
        height="350"
      />

      <div className="row">
        <div className="col-12 header-wrapper">
          <div className="header">
            
            {/* Logo */}
            <div className="header-logo">
              <img src="./Pictures/Logo.png" alt="TaxMate Logo" width="150" />
              <h1>Tax Mate</h1>
            </div>

            {/* Navigation */}
            <nav className="header-nav">
              <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/service">Services</Link></li>
                <li><Link to="/service-charge">Service Charges</Link></li>
                <li><Link to="/apply">Apply Now</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Here</Link></li>
                <li><Link to="/faq">FAQs</Link></li>
                <li><Link to="/term">Terms</Link></li>
                <li><Link to="/confirmation">Confirmation</Link></li>
                
              </ul>
            </nav>

          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
