import React, { useState } from 'react';

const EnquireForm = () => {
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
    <div style={styles.enquireFormContainer}>
      <p style={styles.formHeading}>Enquire Now</p>
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
          <label htmlFor="location" style={styles.label}>Location</label>
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
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

const styles = {
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

export default EnquireForm;
