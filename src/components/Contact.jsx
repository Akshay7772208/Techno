import React,{useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope, faClock } from '@fortawesome/free-solid-svg-icons';
import Footer from '../pages/home/Footer';
import EnquireForm from './Form';

const Contact = () => {

    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      location: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // You can add your submission logic here
      console.log('Form submitted:', formData);
    };

    
  return (
    <>
    
    <div className="contact-container" style={styles.container}>
      {/* Left Side - Contact Form */}
     {/*<div className="contact-form" style={styles.contactForm}>
        <h2>Contact Us</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" style={styles.input} required />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" style={styles.input} required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" style={styles.input} required />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <input type="text" id="message" name="message" style={styles.input} required />
          </div>

          <button type="submit" style={{ ...styles.button, ...styles.buttonHover}}>
            Send Us
          </button>
        </form>
  </div>*/}
   
   <div style={styles.enquireFormContainer}>
      <p style={styles.formHeading}>Contact Us</p>
      <form style={styles.enquireForm} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="location" style={styles.label}>Message</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Send Us</button>
      </form>
    </div>

      {/* Right Side - Office Address */}
      <div className="office-address" style={styles.officeAddress}>
        <h2>Office Address</h2>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} style={styles.icon} /> Technobridge Systems Pvt Ltd<br />
          Ujwal Serene, Near Mauli Garden, Baner,<br />
          Pune - 411045, Maharashtra, India.
        </p>

        <div className="contact-info">
          <h3>
            <FontAwesomeIcon icon={faPhone} style={styles.icon} /> Telephone
          </h3>
          <p>+91 9257035703</p>

          <h3>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} /> Email
          </h3>
          <p>info@technobridge.in</p>

          <h3>
            <FontAwesomeIcon icon={faClock} style={styles.icon} /> Working Hours
          </h3>
          <p>Mon - Sat: 9:30AM - 6:30PM</p>
        </div>
      </div>
    </div>
    
    </>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  contactForm: {
    flex: 1,
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '14px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '12px', // Increased button padding
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  buttonHover: {
    backgroundColor: '#45a049',
  },
  officeAddress: {
    flex: 1,
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    marginLeft: '20px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' /* Add box shadow */

  },
  icon: {
    marginRight: '8px',
  },

  enquireFormContainer: {
    // maxWidth: '500px',
    width:'450px',
    margin: '0 auto',
    
  },
  formHeading: {
    backgroundColor: '#061e91', /* Blue background */
    color: '#fff', /* White text color */
    padding: '10px',
    textAlign: 'center',
    marginBottom:'0'
  
    },
  enquireForm: {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc', /* Add border to the form */
    padding: '20px',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' /* Add box shadow */

  },
  formGroup: {
    marginBottom: '15px',
  },
  label: {
    marginBottom: '5px',
    color: '#333', /* Label text color */
    display: 'block',
  },
  input: {
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width: '100%',
    boxSizing: 'border-box',
  },
  submitButton: {
    backgroundColor: 'orange', /* Blue background */
    color: '#fff', /* White text color */
    padding: '5px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    width: '200px', /* Set width of the submit button */
    alignSelf: 'center', /* Center the button */
  },
};

export default Contact;

