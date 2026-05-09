import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Intro */}
      <div className="row Box1">
        <div className="col-12">
          <hr />
          <h2>We're Here to Help</h2>
          <p>
            Have a question about your taxes or need help with filing? Our team
            of certified tax consultants is ready to assist you.
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="row Box1">
        <div className="col-12">
          <h2>Contact Information</h2>
          <p><b>Email:</b> support@taxmate.com</p>
          <p><b>Phone:</b> +92-300-1234567</p>
          <p><b>Office:</b> Abid Market, Temple Road, Lahore</p>
          <p><b>Office Hours:</b> Monday – Friday, 9:00 AM – 6:00 PM</p>
        </div>
      </div>

      {/* Contact Form */}
      <div className="row contact-box">
        <div className="col-12">
          <h3>Send Us a Message</h3>

          <form onSubmit={handleSubmit}>
            <label>
              <b>Name:</b>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                required
              />
            </label>

            <br /><br />

            <label>
              <b>Email:</b>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="abc@gmail.com"
                required
              />
            </label>

            <br /><br />

            <label>
              <b>Subject:</b>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Write a Subject"
              />
            </label>

            <br /><br />

            <label>
              <b>Message:</b>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>

            <br /><br />

            <button type="submit" style={{ backgroundColor: "greenyellow" }}>
              Submit
            </button>

            <button
              type="reset"
              style={{ backgroundColor: "red", marginLeft: "10px" }}
              onClick={() => setFormData({ name: "", email: "", subject: "", message: "" })}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>

      {/* Submitted Data Table */}
      {submittedData && (
        <div className="row">
          <div className="col-12">
            <h3>Submitted Message</h3>
            <table border="1" cellPadding="8">
              <tbody>
                <tr>
                  <td><b>Name</b></td>
                  <td>{submittedData.name}</td>
                </tr>
                <tr>
                  <td><b>Email</b></td>
                  <td>{submittedData.email}</td>
                </tr>
                <tr>
                  <td><b>Subject</b></td>
                  <td>{submittedData.subject}</td>
                </tr>
                <tr>
                  <td><b>Message</b></td>
                  <td>{submittedData.message}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Quick Contact */}
      <div className="row A3">
        <div className="col-6">
          <h3>Quick Contact</h3>
          <p>
            <a href="https://wa.me/923354205323" target="_blank" rel="noreferrer">
              WhatsApp Us
            </a>
            <br />
            <a href="tel:+923001234567">Call: +92-300-1234567</a>
            <br />
            <a href="mailto:support@taxmate.com">Email: support@taxmate.com</a>
          </p>
        </div>

        <div className="col-6">
          <h3>Why Reach Out to TaxMate?</h3>
          <ul>
            <li>Free initial consultation</li>
            <li>Guidance on FBR registration and filing</li>
            <li>Assistance for businesses and individuals</li>
            <li>Nationwide services across Pakistan</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Contact;
