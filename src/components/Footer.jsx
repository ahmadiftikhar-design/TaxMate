const Footer = () => {
  return (
    <>
      <div className="row footer">

        <h2>Stay Connected</h2>

        {/* Social Links */}
        <div className="col-1 footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img src="./Pictures/FB.png" alt="Facebook" width="40" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <img src="./Pictures/Insta.png" alt="Instagram" width="40" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer">
            <img src="./Pictures/Twitter.png" alt="Twitter" width="40" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">
            <img src="./Pictures/Youtube.png" alt="YouTube" width="40" />
          </a>
        </div>

        {/* Contact */}
        <div className="col-3 footer-box">
          <h3>Contact Us</h3>
          <p>
            <a href="https://wa.me/923354205323" target="_blank" rel="noreferrer">
              <img src="./Pictures/Phone.png" alt="Phone" width="40" />
            </a>
            {" "}0335-4205323
          </p>
        </div>

        {/* Location */}
        <div className="col-3 footer-box">
          <h3>Locate Us</h3>
          <a
            href="https://www.google.com/maps?q=Abid+Market+Temple+Road+Lahore"
            target="_blank"
            rel="noreferrer"
          >
            <img src="./Pictures/location.jpg" alt="Location" height="60" />
          </a>
          <br />
          <label>Abid Market, Temple Road, Lahore</label>
        </div>

        {/* Description */}
        <div className="col-4 footer-box">
          <p>
            TaxMate — A reliable platform offering expert tax consultation and
            financial guidance.
          </p>
          <p>
            <b>© Copyright 2025 TaxMate Online Accountants Limited</b>
          </p>

          <button>
            <a href="#top">⬆ Back to Top</a>
          </button>
        </div>

      </div>
    </>
  );
};

export default Footer;
