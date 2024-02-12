import React from 'react';

const Learning = () => {
  const componentStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '125px',
    backgroundColor: 'blue',
    padding: '10px',
  };

  const headingStyles = {
    color: 'white',
    margin: '0',
  };

  const buttonStyles = {
    backgroundColor: 'orange',
    color: 'white',
    padding: '8px 16px',
    border: 'none',
    cursor: 'pointer',
  };

  return (
    <div style={componentStyles}>
      <h2 style={headingStyles}>Learning Today For a Better Tommorrow</h2>
      <button style={buttonStyles}>View All Courses</button>
    </div>
  );
};

export default Learning;
