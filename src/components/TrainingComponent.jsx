import React from 'react';

const TrainingComponent = () => {
  const containerStyle = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',  // Set the width to 90%
    margin: '0 auto',  // Center the div horizontally
  };

  const infoBoxStyle = {
    flex: '1',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle}>
      <div style={infoBoxStyle}>
        <h2 style={{color: '#061e91'}}>2000+</h2>
        <p>Students Trained</p>
      </div>
      <div style={infoBoxStyle}>
        <h2 style={{color: '#061e91'}}>Flexible</h2>
        <p>Batch Timing</p>
      </div>
      <div style={infoBoxStyle}>
        <h2 style={{color: '#061e91'}}>15 Days</h2>
        <p>Duration</p>
      </div>
      <div style={infoBoxStyle}>
        <h2 style={{color: '#061e91'}}>Online</h2>
        <p>Mode of teaching</p>
      </div>
      <div style={infoBoxStyle}>
        <h2 style={{color: '#061e91'}}>PDF</h2>
        <p>Certificate</p>
      </div>
    </div>
  );
};

export default TrainingComponent;
