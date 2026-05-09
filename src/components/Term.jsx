const Term = () => {
  return (
    <>
      {/* Header */}
      <div className="row Box1">
        <h1>Terms & Conditions / Privacy Policy</h1>
        <p>
          Welcome to <b>TaxMate</b>! By accessing or using our website, you agree
          to be bound by the following Terms and Conditions. Please read them
          carefully before using our platform or services.
        </p>
      </div>

      <br />

      {/* Row 1 */}
      <div className="row">
        <div className="col-4">
          <div className="card shadow p-3">
            <h2>1. Use of Services</h2>
            <p>
              TaxMate provides online tax consultation and registration services
              for individuals and businesses. You agree to use our services only
              for lawful purposes and to provide accurate and complete
              information.
            </p>
          </div>
        </div>

        <div className="col-4">
          <div className="card shadow p-3">
            <h2>2. Account Responsibility</h2>
            <p>
              If you create an account on TaxMate, you are responsible for
              maintaining the confidentiality of your login credentials and all
              activities under your account.
            </p>
          </div>
        </div>

        <div className="col-4">
          <div className="card shadow p-3">
            <h2>3. Accuracy of Information</h2>
            <p>
              All information on our website is provided for general guidance.
              While we strive for accuracy, we cannot guarantee that all content
              is error-free.
            </p>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="row">
        <div className="col-4">
          <div className="card shadow p-3">
            <h2>4. Payments and Refund Policy</h2>
            <ul>
              <li>All service payments must be made in advance.</li>
              <li>
                Once processing begins, payments are <b>non-refundable</b>.
              </li>
              <li>Refunds may apply if canceled before processing.</li>
              <li>Prices may change without prior notice.</li>
            </ul>
          </div>
        </div>

        <div className="col-4">
          <div className="card shadow p-3">
            <h2>5. Privacy Policy</h2>
            <p>
              We collect personal data only to provide our services. Your
              information is never sold or shared without consent.
            </p>

            <h3>Information We Collect:</h3>
            <ul>
              <li>Personal Identification Data</li>
              <li>Contact Information</li>
              <li>Payment Details</li>
            </ul>

            <h3>How We Use Your Data:</h3>
            <ul>
              <li>Service processing</li>
              <li>Communication & updates</li>
              <li>Platform improvement</li>
            </ul>
          </div>
        </div>

        <div className="col-4">
          <div className="card shadow p-3">
            <h2>6. Data Security</h2>
            <p>
              We implement reasonable measures to protect user data. However,
              online transmissions are not 100% secure.
            </p>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="row">
        <div className="col-4">
          <div className="card shadow p-3">
            <h2>7. Limitation of Liability</h2>
            <p>
              TaxMate is not liable for indirect or consequential damages arising
              from service use.
            </p>
          </div>
        </div>

        <div className="col-4">
          <div className="card shadow p-3">
            <h2>8. Third-Party Links</h2>
            <p>
              We are not responsible for content or policies of third-party
              websites linked on our platform.
            </p>
          </div>
        </div>

        <div className="col-4">
          <div className="card shadow p-3">
            <h2>9. Modification of Terms</h2>
            <p>
              These terms may be updated periodically. The latest version will
              always be available on this page.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="row Box1">
        <h2>Contact Information</h2>
        <img src="./Pictures/mail.jpg" alt="Mail" />
        <p>
          <b>
            If you have any questions or concerns regarding these terms, contact
            us:
          </b>
        </p>
        <ul>
          <li>
            <b>Email:</b> support@taxmate.com
          </li>
          <li>
            <b>Phone:</b> 0335-4205323
          </li>
          <li>
            <b>Office:</b> Abid Market, Temple Road, Lahore
          </li>
        </ul>
      </div>
    </>
  );
};

export default Term;
