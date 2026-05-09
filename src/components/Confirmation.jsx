const Confirmation = () => {
  return (
    <>
      <h1>✅ Application Submitted Successfully!</h1>

      <p>
        Thank you for choosing <b>TaxMate</b> for your tax consultation needs.
      </p>

      <p>
        Your request has been received and our representative will contact you
        soon to confirm your details and schedule your consultation.
      </p>

      <img
        src="./Pictures/Success.jpg"
        alt="Success"
        width="200"
      />

      <div className="row Box1">
        <h3>Next Steps:</h3>
        <ul>
          <li>Check your email for a confirmation message.</li>
          <li>Our team will verify your provided documents.</li>
          <li>You will receive a call or email within 24–48 working hours.</li>
        </ul>
      </div>

      <br />
      <br />

      <div className="BUTTONS">
        <a href="./Home.html">
          <button style={{ backgroundColor: "yellowgreen" }}>
            🏠 Back to Home
          </button>
        </a>

        <a href="./Services.html">
          <button style={{ backgroundColor: "lightblue" }}>
            💼 View More Services
          </button>
        </a>
      </div>
    </>
  );
};

export default Confirmation;
