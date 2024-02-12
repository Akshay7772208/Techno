import React from 'react';
import { FaChalkboardTeacher } from "react-icons/fa";

const Key = () => {
  const rowStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  };

  const divStyle = {
    textAlign: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    width: '250px',
    height: '150px'
  };

  const iconStyle = {
    fontSize: '24px', // Adjust the size as needed
    marginBottom: '8px', // Adjust the margin as needed
  };

  const boldTextStyle = {
    fontWeight: 'bold',
    marginTop: '20px'
  };

  const circleStyle = {
    backgroundColor: 'blue',
    // borderRadius: '50%',
    padding: '10px', // Adjust padding as needed
    marginBottom: '8px', // Adjust the spacing between the icon and text
  };

  return (
    <>
    <div class="mt-10"></div>
      <div class="mt-10"></div>
      <div style={{background:'white'}}>
      <h2 style={{textAlign:'center',paddingTop:'20px'}} >
          <strong style={{color:'black'}}>Key Highlights</strong>
        </h2>
        <div class="btmborder"></div>
        <p style={{color:'black'}}>
          <center> A Choice that makes a big difference in your career.</center>
        </p>
        <br />
        </div>

    <div style={rowStyle}>
      {/* Div 1 */}
      <div style={divStyle}>
      <div >
        <FaChalkboardTeacher style={{ fontSize: '35px', color: 'blue' }} />
        <p style={boldTextStyle}>Learn From Expert</p>
      </div>
      </div>
      

      {/* Div 2 */}
      <div style={divStyle}>
      <div >
        <FaChalkboardTeacher style={{ fontSize: '35px', color: 'blue' }} />
        
        <p style={boldTextStyle}>Best and Affordable Price</p>
      </div>
      </div>

      {/* Div 3 */}
      <div style={divStyle}>
      <div >
        <FaChalkboardTeacher style={{ fontSize: '35px', color: 'blue' }} />
        <p style={boldTextStyle}>Text 2</p>
      </div>
      </div>

      {/* Div 4 */}
      <div style={divStyle}>
      <div >
        <FaChalkboardTeacher style={{ fontSize: '35px', color: 'blue' }} />
        <p style={boldTextStyle}>Text 2</p>
      </div>
      </div>

      {/* Div 5 */}
      <div style={divStyle}>
      <div >
        <FaChalkboardTeacher style={{ fontSize: '35px', color: 'blue' }} />
        <p style={boldTextStyle}>Text 2</p>
      </div>
      </div>
    </div>

    </>
  );
};

export default Key;
