import React from 'react';
import './moving.css'
import {FaCheck} from 'react-icons/fa'
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import FAQSection from './FAQ';
import EnquireForm from './Form';

const MovingComponent = () => {
  const containerStyle = {
    width: '75%',
    margin: '0 auto', // Center the div horizontally
    marginTop: '30px',
    padding: '20px',
    backgroundColor: 'white', // Example background color
    display: 'flex',
    flexDirection: 'column',
  };

  const containerTwoStyle = {
    display: 'flex',
    width: '80%',
    margin: '50px auto',
    backgroundColor: '#ffffff',
  };

  const leftDivStyle = {
    flex: '0 0 50%',  // Set the width of the left div to 50%
    padding: '20px',
  };

  const rightDivStyle = {
    flex: '0 0 30%',  // Set the width of the right div to 30%
    marginLeft: '20px',
    padding: '20px',
    border: '1px solid #ccc',
    boxSizing: 'border-box',
  };

  const formHeaderStyle = {
    // backgroundColor: '#007BFF',
    // color: '#fff',
    color: 'black',
    padding: '10px',
    textAlign: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    marginRight: '10px',
    textDecoration: 'none',
  };

  const enrollBtnStyle = { ...buttonStyle, backgroundColor: 'orange' };
  const callBtnStyle = { ...buttonStyle, backgroundColor: 'orange' };

  const formInputStyle = {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    boxSizing: 'border-box',
  };

  const submitBtnStyle = {
    ...buttonStyle,
    backgroundColor: 'orange',
    width: '100%',
  };

  return (
    <>
    <div className='maindiv'>
    <div className="ricol-3 leftsidebar"  style={{marginTop:'30px' ,marginLeft:'30px' ,width: '20%' }}>
      <ul className="menulist hidemobile">
        <li className="menuitem">
          <a href="#about" className="menu">
            About Course
            <i className="fa fa-book" aria-hidden="true"></i>
          </a>
        </li>
        <li className="menuitem">
          <a href="#fees" className="menu">
            Fees
            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
          </a>
        </li>
        <li className="menuitem">
          <a href="#key" className="menu">
            Key Features
            <i className="fa fa-cogs" aria-hidden="true"></i>
          </a>
        </li>
        <li className="menuitem">
          <a href="#syllabus" className="menu">
            Course Syllabus
            <i className="fa fa-file-text" aria-hidden="true"></i>
          </a>
        </li>
        <li className="menuitem">
          <a href="#trainer" className="menu">
            Trainer Profile
            <i className="fa fa-user" aria-hidden="true"></i>
          </a>
        </li>
        <li className="menuitem">
          <a href="#certification" className="menu">
            Certification
            <i className="fa fa-graduation-cap fa-cert" aria-hidden="true"></i>
          </a>
        </li>
        <li className="menuitem">
          <a href="#career" className="menu">
            Career
            <i className="fa fa-calendar" aria-hidden="true"></i>
          </a>
        </li>
        <li className="menuitem">
          <a href="#placement" className="menu">
            Our Placement
            <i className="fa fa-building" aria-hidden="true"></i>
          </a>
        </li>
        <li className="menuitem">
          <a href="#review" className="menu">
            Course Review
            <i className="fa fa-black-tie" aria-hidden="true"></i>
          </a>
        </li>
        <li className="menuitem">
          <a href="#faq" className="menu">
            FAQ
            <i className="fa fa-comments" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>

    <div style={containerStyle}>
      
      <div id='career'>
        <h2 style={{color: '#061e91'}}>Overview of Ethics Committee:</h2>
        <div className='btmborder'></div>
        <p>
          The ethics committee is an independent body formed to safeguard the interests of participants by evaluating scientific and ethical aspects of proposals. It comprises scientific and non-scientific members. The variation within the Institutional Review Board or ethics committee ensures the safety and well-being of clinical trial participants.
        </p>
      </div>

      <div>
        <h2 style={{color: '#061e91'}}>Ethics Committee Course Details:</h2>
        <div className='btmborder'></div>
        <p>
          The Good Clinical Practice (GCP) is considered an international, scientific, and ethical standard for conducting all clinical and biomedical research. The training is essential for every ethics committee to comply with Indian Council of Medical Research (ICMR), GCP, and New Drugs and Clinical Trials (NDCT) rules 2019.
        </p>
        <button style={{marginLeft:'500px',backgroundColor:'orange' ,padding:'10px'}}>Enroll Now</button>
      </div>

      <div>
        <h2 style={{color: '#061e91'}}>Ethics Committee Course by TechnoBridge:</h2>
        <div className='btmborder'></div>
        <p>
          TechnoBridge offers the best Ethics Committee Course at an affordable price in Pune. This course aims to stimulate every researcher and student in the context of ethical principles in public research. Our specialized team has put in their 25+ years of expertise for designing the course that meets the most recent industry requirements. Most importantly, this course provides training opportunities in research methodologies as per the Indian regulatory requirements.
        </p>
        <p>
          Our course is the perfect stepping stone for those who have a keen interest in being an active member of the ethics committee in India. This course is open to anyone willing to enhance their clinical research field knowledge, as well as individuals who work as investigators, sponsors, and site staff (CRCs).
        </p>
      </div>

      <div>
        <h2 style={{color: '#061e91'}}>How to Enroll in Ethics Committee Course?</h2>
        <div className='btmborder'></div>
        <p>
          Simply head to our official TechnoBridge website and apply for the ethics committee course. Our admission officers will revert back as soon as your application is reviewed. For further assistance in course enrollment, connect with our admission officers on +91-9257035703. After getting in touch with admission officers, you are required to clear a pre-test for getting the course log-in credentials. Finally, the ethics committee course certificate is provided after the individual clears the final test.
        </p>
      </div>

      <div id='fees'>
        <h2 style={{color: '#061e91'}}>Ethics Committee Certification Course Fees:</h2>
        <div className='btmborder'></div>
        <p>Our Ethics Committee Course Fee is just 1000/-.</p>
      </div>

      <div>
        <h2 style={{color: '#061e91'}}>Course Duration and Eligibility Criteria </h2>
        <div className='btmborder'></div>
        <p>TechnoBridge provides online ethics committee course for the duration of 15 Days. Interested applicants need to have completed their graduation in any discipline. This course is also ideal for: </p>
        <p><FaCheck/>  Doctors who want to publish thesis for MS, MD, MCh or DNB.</p>
        <p><FaCheck/>  MBBS graduates interested in pursuing a master's degree with any specialization.</p>
        <p><FaCheck/>  Doctors who want to publish thesis for MS, MD, MCh or DNB.</p>
        <p><FaCheck/>  Doctors who want to publish thesis for MS, MD, MCh or DNB.</p>
      </div>
      <div>
         <h2 style={{color: '#061e91'}}>Our Courses Can Help You Understand </h2>
        <div className='btmborder'></div>
        <div style={{display:'flex',justifyContent:'space-between'}}>
        <div >
            <p style={{marginBottom:'35px'}}><IoArrowForwardCircleOutline style={{fontSize:'20px',color:'orange'}}/> History Of Ethics</p>
            <p style={{marginBottom:'35px'}}><IoArrowForwardCircleOutline style={{fontSize:'20px',color:'orange'}}/> CH-GCP R2 </p>
            <p style={{marginBottom:'35px'}}><IoArrowForwardCircleOutline style={{fontSize:'20px',color:'orange'}}/>  NDCTR 2019 </p>
            <p style={{marginBottom:'35px'}}><IoArrowForwardCircleOutline style={{fontSize:'20px',color:'orange'}}/> Role and Responsibilities of Ethics Committee Members  </p>
            <p style={{marginBottom:'35px'}}><IoArrowForwardCircleOutline style={{fontSize:'20px',color:'orange'}}/> Role and Responsibilities of Ethics Committee Members  </p>
        </div>

        {/*<div style={rightDivStyle}>
        <div style={{ ...formHeaderStyle, width: '100%' }}>
          <p>Enquire Now</p>
        </div>
        <form>
          <input type="text" placeholder="Enter Name" style={formInputStyle} />
          <input type="email" placeholder="Enter Email" style={formInputStyle} />
          <input type="tel" placeholder="Enter Phone" style={formInputStyle} />
          <input type="text" placeholder="Enter Location" style={formInputStyle} />
          <button type="submit" style={submitBtnStyle}>
            Submit
          </button>
  </form>
      </div>*/}
      <EnquireForm/>
      </div>
      </div>
      <FAQSection/>
      </div>
    
       
    </div>
    
    </>
  );
};

export default MovingComponent;
