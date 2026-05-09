const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div  className="row Service ">
          <h2>Our Services</h2>
          <div className="col-12">
            <ol type="1">
              <li>Income Tax</li>
              <li>Sales Tax</li>
              <li>Cooperate Law</li>
              <li>SECP Registration</li>
              <li>Trademark Registration</li>
              <li>Apeals</li>
              <li>PRA Punjab</li>
            </ol>
          </div>
        </div>

        <div className="row DESCRIPTION" >
          <h2>
            <u>Description</u>
          </h2>

          <div className="d-flex justify-content-between">
            <div className="col-5 INTRODUCTION" >
              <h3>
                <u>Introduction:</u>
              </h3>
              <p>
                Tax Mate is an innovative online platform designed to simplify
                tax consultation for individuals, entrepreneurs, and
                businesses. It provides users with seamless access to
                professional tax experts and financial advisors without the
                need for in-person visits. The main goal of Tax Mate is to make
                tax management easy, convenient, and accessible from anywhere.
              </p>
            </div>

            <div className="col-5 PURPOSE" >
              <h3>
                <u>Purpose</u>
              </h3>
              <p>
                The purpose of Tax Mate is to help users handle their tax-related
                matters efficiently by connecting them with certified
                consultants online. It eliminates the complexities of
                traditional tax consultations and ensures that users receive
                expert advice quickly and securely through a digital medium.
              </p>
            </div>
          </div>
        </div>

        <div  className="row MAIN">
          <h2>WHY CHOOSE TAX MATE</h2>
          <div className="d-flex justify-content-between">
            <div className="col-5 KEY" >
              <h3>
                <u>Key Features</u>
              </h3>
              <img src="./Pictures/Key.jpg" alt="KEY" width="200" />
              <ul>
                <li>
                  Online Consultation: Book appointments with professional tax
                  consultants.
                </li>
                <li>
                  Service Directory: Explore various tax services such as income
                  tax filing, business registration, and tax compliance.
                </li>
                <li>
                  Ask an Expert: Submit tax-related queries and receive
                  personalized advice.
                </li>
                <li>
                  Educational Resources: Access articles, FAQs, and guides on
                  tax laws and financial planning.
                </li>
                <li>
                  Secure Data Handling: Ensures user confidentiality and data
                  protection at all times.
                </li>
              </ul>
            </div>

            <div className="col-5 WHY" >
              <h2>
                <a href="./AboutUs.html">
                  <u>IMP POINTS</u>
                </a>
              </h2>
              <img
                src="./Pictures/QuestionMark.jpg"
                alt="QuestionMark"
                width="200"
              />
              <ul>
                <li>Expert and Certified Tax Professionals</li>
                <li>Fast Online Processing</li>
                <li>Secure and Confidential Handling of Data</li>
                <li>Affordable and Transparent Pricing</li>
                <li>Dedicated Customer Support</li>
                <li>Personalized Tax Planning and Guidance</li>
                <li>Compliance with Latest Tax Laws and Regulations</li>
                <li>Easy Document Upload and Tracking System</li>
                <li>Hassle-Free Filing with Guaranteed Accuracy</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row FAQS" >
          <div className="col-12">
            <h2>
              <a href="./FAQ.html">FAQS</a>
            </h2>

            <li>
              <b>Q1 What is Tax Mate?</b>
            </li>
            <li>
              Tax Mate is an online tax consultation platform that provides
              guidance on income tax filing, business tax registration,
              compliance, and other tax-related services—all from the comfort
              of your home or office.
            </li>

            <br />

            <li>
              <b>Q2 How does Tax Mate work?</b>
            </li>
            <li>
              Users can create an account, browse available services, and book
              appointments with certified tax consultants.
            </li>

            <br />

            <li>
              <b>
                Q3 Are the consultants on Tax Mate certified professionals?
              </b>
            </li>
            <li>
              Yes. All consultants registered with Tax Mate are qualified and
              certified tax professionals who have expertise in different areas
              of taxation and financial management.
            </li>

            <br />

            <li>
              <b>Q4 How can I book a consultation?</b>
            </li>
            <li>
              You can easily book a consultation through the website by
              selecting your preferred service, choosing an available
              consultant, and scheduling a date and time that suits you.
            </li>

            <br />

            <li>
              <b>Q5 How can I File my Tax Returns</b>
            </li>
            <li>
              Provide us the Required Details and for futher information
            </li>
            <li>
              <a
                href="https://www.youtube.com/watch?v=8JTPsPEHdpM"
                target="_blank"
                rel="noreferrer"
              >
                Video Link
              </a>
            </li>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};

export default Home;
