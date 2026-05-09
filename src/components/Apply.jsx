import { useState } from "react";

const Apply = () => {
  const [formData, setFormData] = useState({
    FName: "",
    Lname: "",
    CNIC: "",
    Email: "",
    phone: "",
    gender: "",
    contact: [],
    service: "",
    time: "",
    Date: "",
    Type: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const HandleChange = (e) => {
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: checked
          ? [...prev[name], value]
          : prev[name].filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);

    setFormData({
      FName: "",
      Lname: "",
      CNIC: "",
      Email: "",
      phone: "",
      gender: "",
      contact: [],
      service: "",
      time: "",
      Date: "",
      Type: "",
    });
  };

  return (
    <>
      <h2>Apply Now</h2>

      <form onSubmit={HandleSubmit}>
        <fieldset>
          <legend>Personal Information</legend>

          <input
            type="text"
            name="FName"
            placeholder="First Name"
            value={formData.FName}
            onChange={HandleChange}
            required
          />

          <input
            type="text"
            name="Lname"
            placeholder="Last Name"
            value={formData.Lname}
            onChange={HandleChange}
            required
          />

          <input
            type="text"
            name="CNIC"
            placeholder="35202-2222222-1"
            value={formData.CNIC}
            onChange={HandleChange}
          />

          <input
            type="email"
            name="Email"
            placeholder="Email"
            value={formData.Email}
            onChange={HandleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="03XXXXXXXXX"
            value={formData.phone}
            onChange={HandleChange}
            required
          />

          <br />

          <b>Gender:</b>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={HandleChange}
              checked={formData.gender === "Male"}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={HandleChange}
              checked={formData.gender === "Female"}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              onChange={HandleChange}
              checked={formData.gender === "Other"}
            />
            Other
          </label>

          <br />

          <b>Preferred Contact:</b>
          <label>
            <input
              type="checkbox"
              name="contact"
              value="Phone"
              onChange={HandleChange}
              checked={formData.contact.includes("Phone")}
            />
            Phone
          </label>

          <label>
            <input
              type="checkbox"
              name="contact"
              value="Email"
              onChange={HandleChange}
              checked={formData.contact.includes("Email")}
            />
            Email
          </label>

          <label>
            <input
              type="checkbox"
              name="contact"
              value="WhatsApp"
              onChange={HandleChange}
              checked={formData.contact.includes("WhatsApp")}
            />
            WhatsApp
          </label>
        </fieldset>

        <fieldset>
          <legend>Service Details</legend>

          <select
            name="service"
            value={formData.service}
            onChange={HandleChange}
            required
          >
            <option value="">-- Select Service --</option>
            <option>Income Tax</option>
            <option>Sales Tax</option>
            <option>Corporate Tax</option>
            <option>SECP Registration</option>
          </select>

          <select
            name="time"
            value={formData.time}
            onChange={HandleChange}
          >
            <option value="">-- Time Slot --</option>
            <option>10:00 AM – 12:00 PM</option>
            <option>12:00 PM – 2:00 PM</option>
            <option>2:00 PM – 4:00 PM</option>
          </select>

          <input
            type="date"
            name="Date"
            value={formData.Date}
            onChange={HandleChange}
          />

          <br />

          <label>
            <input
              type="radio"
              name="Type"
              value="Physical"
              onChange={HandleChange}
              checked={formData.Type === "Physical"}
            />
            Physical
          </label>

          <label>
            <input
              type="radio"
              name="Type"
              value="Virtual"
              onChange={HandleChange}
              checked={formData.Type === "Virtual"}
            />
            Virtual
          </label>
        </fieldset>

        <button type="submit">Confirm</button>
      </form>

      {/* ================= TABLE OUTPUT ================= */}

      {submittedData && (
        <>
          <h2>Submitted Data</h2>
          <table border="1" cellPadding="8">
            <tbody>
              <tr><td>First Name</td><td>{submittedData.FName}</td></tr>
              <tr><td>Last Name</td><td>{submittedData.Lname}</td></tr>
              <tr><td>CNIC</td><td>{submittedData.CNIC}</td></tr>
              <tr><td>Email</td><td>{submittedData.Email}</td></tr>
              <tr><td>Phone</td><td>{submittedData.phone}</td></tr>
              <tr><td>Gender</td><td>{submittedData.gender}</td></tr>
              <tr><td>Contact</td><td>{submittedData.contact.join(", ")}</td></tr>
              <tr><td>Service</td><td>{submittedData.service}</td></tr>
              <tr><td>Time</td><td>{submittedData.time}</td></tr>
              <tr><td>Date</td><td>{submittedData.Date}</td></tr>
              <tr><td>Type</td><td>{submittedData.Type}</td></tr>
            </tbody>
          </table>
        </>
      )}
    </>
  );
};

export default Apply;
