const About = () => {
  return (
    <>
      {/* Who We Are */}
      <div className="row">
        <h2>Who Are We</h2>

        <div className="col-4 info-box">
          <p>
            TaxMate is an online tax consultation and financial advisory platform
            created to make tax management simple, reliable, and accessible for
            everyone.
          </p>
          <p>
            We know that dealing with taxes can be stressful and confusing —
            that’s why TaxMate brings together experienced tax consultants,
            accountants, and financial experts.
          </p>
        </div>

        <div className="col-4 info-box">
          <p>
            <b>Our Mission:</b> To make tax consultation easy, affordable, and
            stress-free for everyone.
          </p>
          <p>
            Our team is passionate about helping you stay compliant and maximize
            your financial potential.
          </p>
        </div>

        <div className="col-4 info-box">
          <p>
            <b>Our Vision:</b> To become Pakistan’s most trusted online platform
            for tax and financial guidance.
          </p>
          <p>
            We believe everyone deserves fair, easy access to tax guidance —
            without long queues or confusing paperwork.
          </p>
        </div>
      </div>

      {/* Values & Why Choose */}
      <div className="row Box1">
        <div className="col-6">
          <h2>Our Values</h2>
          <ul>
            <li><b>Integrity:</b> Honesty, transparency, and ethics.</li>
            <li><b>Excellence:</b> High-quality and accurate solutions.</li>
            <li><b>Customer Focus:</b> Personalized support.</li>
            <li><b>Innovation:</b> Smarter and faster tax solutions.</li>
          </ul>
          <hr />
        </div>

        <div className="col-6">
          <h2>Why Choose TaxMate</h2>
          <ul>
            <li><b>Professional Experts:</b> Certified consultants.</li>
            <li><b>Trusted Services:</b> Full data confidentiality.</li>
            <li><b>Affordable Plans:</b> Budget-friendly services.</li>
            <li><b>Online Convenience:</b> No office visits required.</li>
            <li><b>24/7 Support:</b> Always available.</li>
          </ul>
          <hr />
        </div>
      </div>

      {/* Meet Our Experts */}
      <div className="MEET">
        <h2>Meet Our Experts</h2>

        <div className="row">
          <div className="col-6">
            <div className="card" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="./Pictures/profilePhoto.jpg"
                alt="Profile"
              />
              <div className="card-body">
                <h4 className="card-title">Ayesha Khan</h4>
                <p className="card-text">
                  Senior Tax Consultant (FBR Certified)
                </p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="./Pictures/profilePhoto.jpg"
                alt="Profile"
              />
              <div className="card-body">
                <h4 className="card-title">Muhammad Ahmed</h4>
                <p className="card-text">
                  Professional Chartered Accountant
                </p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-6">
            <div className="card" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="./Pictures/profilePhoto.jpg"
                alt="Profile"
              />
              <div className="card-body">
                <h4 className="card-title">Ali Imran</h4>
                <p className="card-text">Financial Analyst</p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="card" style={{ width: "300px" }}>
              <img
                className="card-img-top"
                src="./Pictures/profilePhoto.jpg"
                alt="Profile"
              />
              <div className="card-body">
                <h4 className="card-title">Ali Raza</h4>
                <p className="card-text">Client Support Specialist</p>
                <a href="#" className="btn btn-primary">See Profile</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* Founder Message */}
      <h2>Message From Our Founder</h2>
      <video
        src="./Videos/AboutUs.mp4"
        controls
        poster="./Pictures/Header.png"
        width="800"
        height="200"
      />
      <audio src="./Videos/AboutUs.mp3" controls />
    </>
  );
};

export default About;
