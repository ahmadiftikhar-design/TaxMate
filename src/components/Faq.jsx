const Faq = () => {
  return (
    <>
      {/* Page Title */}
      <h1
        style={{
          backgroundColor: "#358bf3",
          color: "white",
          textAlign: "center",
        }}
        id="top"
      >
        FAQS
      </h1>

      {/* Intro */}
      <div className="row Box1">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <p>
          Welcome to our FAQ section! Here you’ll find answers to the most common
          questions about TaxMate’s services, registration process, and pricing.
          If you don’t find your answer here, feel free to{" "}
          <a href="/contact">contact us</a>.
        </p>

        <p>
          Need help understanding our tax services? You’re in the right place!
          Here we’ve answered the most common questions clients ask about
          TaxMate’s registration, filing, and consultation process.
        </p>
      </div>

      {/* Search */}
      <div className="row Box1" style={{ width: "500px" }}>
        <img
          src="./Pictures/QuestionMark.jpg"
          alt="Question Mark"
          width="100"
        />
        <br />
        <br />

        <input type="text" placeholder="Search your question here..." />
        <button>Search</button>

        <br />
        <br />
      </div>

      {/* General Questions */}
      <div className="row" id="GENERAL">
        <h2>General Questions</h2>

        <details>
          <summary><b>Q1. What is Tax Mate?</b></summary>
          <p>
            Tax Mate is an online tax consultation platform that provides
            guidance on income tax filing, business tax registration,
            compliance, and other tax-related services.
          </p>
        </details>

        <br />

        <details>
          <summary><b>Q2. How does Tax Mate work?</b></summary>
          <p>
            Users can create an account, browse available services, and book
            appointments with certified tax consultants.
          </p>
        </details>

        <br />

        <details>
          <summary>
            <b>Q3. Are the consultants on Tax Mate certified professionals?</b>
          </summary>
          <p>
            Yes. All consultants registered with Tax Mate are qualified and
            certified tax professionals.
          </p>
        </details>

        <br />

        <details>
          <summary><b>Q4. How can I book a consultation?</b></summary>
          <p>
            You can book a consultation by selecting a service, choosing a
            consultant, and scheduling a suitable time.
          </p>
        </details>

        <br />

        <details>
          <summary><b>Q5. How can I file my tax returns?</b></summary>
          <p>
            Provide the required details. For guidance, watch the video below:
          </p>
          <a
            href="https://www.youtube.com/watch?v=8JTPsPEHdpM"
            target="_blank"
            rel="noopener noreferrer"
          >
            Video Link
          </a>
        </details>
      </div>

      {/* Services */}
      <div className="row" id="SERVICES">
        <h2>Services & Process</h2>

        <details>
          <summary><b>Q6. How long does it take to get an NTN?</b></summary>
          <p>NTN registration usually takes 1–2 working days.</p>
        </details>

        <br />

        <details>
          <summary><b>Q7. What documents are required?</b></summary>
          <p>
            CNIC copy, utility bill, phone number, and email address. Requirements
            may vary.
          </p>
        </details>

        <br />

        <details>
          <summary><b>Q8. What payment methods are accepted?</b></summary>
          <p>Bank transfer, Easypaisa, and JazzCash.</p>
        </details>

        <br />

        <details>
          <summary><b>Q9. Do I have to visit the office?</b></summary>
          <p>No. The entire process is completed online.</p>
        </details>

        <br />

        <details>
          <summary><b>Q10. What is SECP registration?</b></summary>
          <p>
            It is the legal registration of a company with SECP to begin
            operations.
          </p>
        </details>
      </div>

      {/* Payments */}
      <div className="row" id="PAYMENT">
        <h2>Payments & Security</h2>

        <details>
          <summary><b>Q11. Do you handle corporate tax matters?</b></summary>
          <p>Yes, we support both individual and corporate clients.</p>
        </details>

        <br />

        <details>
          <summary><b>Q12. How much do services cost?</b></summary>
          <p>
            Charges vary. Visit our <a href="/services">Service Charges</a> page.
          </p>
        </details>

        <br />

        <details>
          <summary><b>Q13. Is my personal information secure?</b></summary>
          <p>Yes, all data is handled securely and confidentially.</p>
        </details>

        <br />

        <details>
          <summary><b>Q14. Can I get a refund?</b></summary>
          <p>Refunds depend on the processing stage.</p>
        </details>

        <br />

        <details>
          <summary><b>Q15. How can I contact support?</b></summary>
          <p>
            Use our <a href="/contact">Contact Us</a> page or WhatsApp support.
          </p>
        </details>
      </div>

      <hr />

      {/* Footer CTA */}
      <div className="row Box1">
        <h3>Still have questions?</h3>
        <p>
          Can’t find what you’re looking for? Reach out to our support team.
        </p>

        <a href="/contact">Contact Us</a>

        <br />
        <br />

        <a href="#top">Back to Top</a>
      </div>
    </>
  );
};

export default Faq;
