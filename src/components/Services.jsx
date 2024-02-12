import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FaCheck} from 'react-icons/fa';
import TrainingComponent from './TrainingComponent';
import MovingComponent from './MovingComponent';
import Footer from '../pages/home/Footer';
import EnquireForm from './Form';


const Services = () => {
  const containerStyle = {
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
    
    <div style={containerStyle}>
      <div style={leftDivStyle}>
        <h2 style={{marginLeft:'-50px'}}>Good Clinical Practice Training in Pune</h2>
        <p>27+ Years Industry Experts</p>
        <h4>| Ranked #1 Clinical Research Training Institute.</h4>
        <div className="starratings" style={{marginLeft:'-15px'}}>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
        </div>
        <p>Enroll Now for Trending Courses</p>
        <p><FaCheck/> 27+ Years experience in Clinical Research</p>
        <p><FaCheck/> Branches in Maharashtra & Bangalore</p>

        <div style={{ marginTop: '20px' }}>
          <a href="#" style={enrollBtnStyle}>
            Enquire Now
          </a>
          <a href="#" style={callBtnStyle}>
            Call Now
          </a>
        </div>
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
  <EnquireForm />
    </div>

    <TrainingComponent/>
    <MovingComponent/>
    
    </>
  );
};

export default Services;
