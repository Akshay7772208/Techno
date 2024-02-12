import React, { useState } from 'react';
import './divStyle.css'
import Footer from '../pages/home/Footer';
import { FaChevronRight } from "react-icons/fa";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    course: '',
    profilePhoto: null,
    gender: '',
    dob: '',
    parentName: '',
    parentMobileNumber: '',
    currentAddress: '',
    permanentAddress: '',
    educationDetails: {
      tenth: { school: '', percentage: '', yearOfPassing: '' },
      twelfth: { school: '', percentage: '', yearOfPassing: '' },
      diploma: { school: '', percentage: '', yearOfPassing: '' },
      graduation: { school: '', percentage: '', yearOfPassing: '' },
      postGraduation: { school: '', percentage: '', yearOfPassing: '' },
      doctorate: { school: '', percentage: '', yearOfPassing: '' },
    },
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? e.target.files[0] : value,
    }));
  };

  const handleEducationDetailsChange = (e, field, exam) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      educationDetails: {
        ...prevData.educationDetails,
        [exam]: {
          ...prevData.educationDetails[exam],
          [field]: value,
        },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your registration logic here
    console.log('Form submitted:', formData);
  };

  return (

    <>
    <h2 style={styles.header}>Register Form</h2>
    <div style={{display: 'flex', gap: '20px'}}>
    
    <div style={styles.container}>
      
      <form style={styles.form} onSubmit={handleSubmit}>
        {/* Full Name */}
        <label style={styles.label}>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Enter Full Name" required />
        </label>

        {/* Email ID */}
        <label style={styles.label}>
          Email ID:
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Email ID" required />
        </label>

        {/* Mobile Number */}
        <label style={styles.label}>
          Mobile Number:
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} placeholder="Enter Mobile Number" required />
        </label>

        {/* Course */}
        <label style={styles.label}>
          Course:
          <select name="course" value={formData.course} onChange={handleChange} required>
            <option value="">Select Course</option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            {/* Add your course options here */}
          </select>
        </label>

        {/* Profile Photo */}
        <label style={styles.label}>
          Profile Photo:
          <input type="file" name="profilePhoto" onChange={handleChange} />
        </label>

        {/* Gender */}
        <label style={styles.label}>
          Gender:
          <div>
            <label>
              <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
            </label>
          </div>
        </label>

        {/* DOB */}
        <label style={styles.label}>
          DOB:
          <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="dd-mm-yyyy" />
        </label>

        {/* Parent's Name */}
        <label style={styles.label}>
          Parent's Name:
          <input type="text" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Enter Parent's Name" required />
        </label>

        {/* Parent's Mobile Number */}
        <label style={styles.label}>
          Parent's Mobile Number:
          <input type="tel" name="parentMobileNumber" value={formData.parentMobileNumber} onChange={handleChange} placeholder="Enter Parent's Mobile Number" required />
        </label>

        {/* Current Address */}
        <label style={styles.label}>
          Current Address:
          <textarea name="currentAddress" value={formData.currentAddress} onChange={handleChange} placeholder="Current Address" required />
        </label>

        {/* Permanent Address */}
        <label style={styles.label}>
          Permanent Address:
          <textarea name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} placeholder="Permanent Address" required />
        </label>

        {/* Education Details */}
        <label style={styles.label}>
          Education Details
          <br />
          <label>
            Examination
            <label >School/College</label>
            <label>Percentage</label>
            <label>Year of passing</label>
          </label>
          <label>
            10th
            <input type="text" name="school" value={formData.educationDetails.tenth.school} onChange={(e) => handleEducationDetailsChange(e, 'school', 'tenth')} placeholder="Enter School/College Name" required />
            <input type="text" name="percentage" value={formData.educationDetails.tenth.percentage} onChange={(e) => handleEducationDetailsChange(e, 'percentage', 'tenth')} placeholder="Enter Percentage" required />
            <input type="text" name="yearOfPassing" value={formData.educationDetails.tenth.yearOfPassing} onChange={(e) => handleEducationDetailsChange(e, 'yearOfPassing', 'tenth')} placeholder="Enter Year Of Passing" required />
          </label>
          <label>
            12th
            <input type="text" name="school" value={formData.educationDetails.tenth.school} onChange={(e) => handleEducationDetailsChange(e, 'school', 'tenth')} placeholder="Enter School/College Name" required />
            <input type="text" name="percentage" value={formData.educationDetails.tenth.percentage} onChange={(e) => handleEducationDetailsChange(e, 'percentage', 'tenth')} placeholder="Enter Percentage" required />
            <input type="text" name="yearOfPassing" value={formData.educationDetails.tenth.yearOfPassing} onChange={(e) => handleEducationDetailsChange(e, 'yearOfPassing', 'tenth')} placeholder="Enter Year Of Passing" required />
          </label>
          <label>
            Diploma
            <input type="text" name="school" value={formData.educationDetails.tenth.school} onChange={(e) => handleEducationDetailsChange(e, 'school', 'tenth')} placeholder="Enter School/College Name" required />
            <input type="text" name="percentage" value={formData.educationDetails.tenth.percentage} onChange={(e) => handleEducationDetailsChange(e, 'percentage', 'tenth')} placeholder="Enter Percentage" required />
            <input type="text" name="yearOfPassing" value={formData.educationDetails.tenth.yearOfPassing} onChange={(e) => handleEducationDetailsChange(e, 'yearOfPassing', 'tenth')} placeholder="Enter Year Of Passing" required />
          </label>
          <label>
            Graduation
            <input type="text" name="school" value={formData.educationDetails.tenth.school} onChange={(e) => handleEducationDetailsChange(e, 'school', 'tenth')} placeholder="Enter School/College Name" required />
            <input type="text" name="percentage" value={formData.educationDetails.tenth.percentage} onChange={(e) => handleEducationDetailsChange(e, 'percentage', 'tenth')} placeholder="Enter Percentage" required />
            <input type="text" name="yearOfPassing" value={formData.educationDetails.tenth.yearOfPassing} onChange={(e) => handleEducationDetailsChange(e, 'yearOfPassing', 'tenth')} placeholder="Enter Year Of Passing" required />
          </label>
          <label>
            Post Graduation
            <input type="text" name="school" value={formData.educationDetails.tenth.school} onChange={(e) => handleEducationDetailsChange(e, 'school', 'tenth')} placeholder="Enter School/College Name" required />
            <input type="text" name="percentage" value={formData.educationDetails.tenth.percentage} onChange={(e) => handleEducationDetailsChange(e, 'percentage', 'tenth')} placeholder="Enter Percentage" required />
            <input type="text" name="yearOfPassing" value={formData.educationDetails.tenth.yearOfPassing} onChange={(e) => handleEducationDetailsChange(e, 'yearOfPassing', 'tenth')} placeholder="Enter Year Of Passing" required />
          </label>
          <label>
            Doctorate
            <input type="text" name="school" value={formData.educationDetails.tenth.school} onChange={(e) => handleEducationDetailsChange(e, 'school', 'tenth')} placeholder="Enter School/College Name" required />
            <input type="text" name="percentage" value={formData.educationDetails.tenth.percentage} onChange={(e) => handleEducationDetailsChange(e, 'percentage', 'tenth')} placeholder="Enter Percentage" required />
            <input type="text" name="yearOfPassing" value={formData.educationDetails.tenth.yearOfPassing} onChange={(e) => handleEducationDetailsChange(e, 'yearOfPassing', 'tenth')} placeholder="Enter Year Of Passing" required />
          </label>
          {/* Similar fields for 12th, Diploma, Graduation, Post Graduation, Doctorate */}
        </label>

        {/* Terms and Conditions */}
        <label style={styles.label}>
         <div style={{display:'flex'}}> 
         <input style={{marginTop:'-20px',marginRight:'6px'}} type="checkbox" name="agreeTerms" checked={formData.agreeTerms} onChange={handleChange} required /> 
         <p>I agree with the Terms and Conditions.</p>
        </div></label>

        {/* Submit Button */}
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>

<div>
{/* First Div */}
<div className="payment-div">
  <h5>Benefits Of Courses</h5>
  <p><FaChevronRight/>100% Placement</p>
  <p><FaChevronRight/>Industry Expert Faculty</p>
  <p><FaChevronRight/>Campus to Corporate</p>
  <p><FaChevronRight/>Lifetime Access</p>
</div>

{/* Second Div */}
<div className="payment-div">
  <h5>Payment Schedule</h5>
  <p><FaChevronRight/>Fee is Non Refundable under any circumstances.</p>
  <p><FaChevronRight/>Enrollment fee needs to be deposited with Enrollment form.</p>
</div>

<div className="payment-div">
  <h5>Safety Tips For Buyers</h5>
  <p><FaChevronRight/>327+ Trained Students</p>
  <p><FaChevronRight/>100+ Baches</p>
  <p><FaChevronRight/>25 Years of Experiance</p>
  <p><FaChevronRight/>95% Placement</p>
</div>
</div>
</div>


</>
  );
};

const styles = {
  container: {
    width: '60%',
    marginTop: '40px',
    marginLeft: '40px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
  },
  header: {
    textAlign: 'center',
    color: '#333',
    marginTop:'40px',
    marginRight:'250px',
    marginBottom:'-20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: '15px',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  button: {
    backgroundColor: 'orange',
    width:'200px',
    color: 'white',
    padding: '10px',
    borderRadius: '10px',
    cursor: 'pointer',
    border: 'none',
  },

  /* DivsStyles.css */
  /* DivsStyles.css */



};

export default RegisterForm;
