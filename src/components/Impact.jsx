import React from "react";

const Impact = () => {
  const containerStyle = {
    border: "1px solid #ccc",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%", // Set the width to 90%
    margin: "0 auto", // Center the div horizontally
  };

  const infoBoxStyle = {
    flex: "1",
    textAlign: "center",
  };

  return (
    <>
      <div class="mt-10"></div>
      <div class="mt-10"></div>
      <div >
        <h2 style={{ textAlign: "center", paddingTop: "20px" }}>
          <strong style={{ color: "black" }}>Our Impact and reach</strong>
        </h2>
        <div class="btmborder"></div>
      </div>
      <div style={containerStyle}>
        <div style={infoBoxStyle}>
          <h2 style={{ color: "black" }}>10000+</h2>
          <p>Students Enrolled</p>
        </div>
        <div style={infoBoxStyle}>
          <h2 style={{ color: "black" }}>Flexible</h2>
          <p>Batch Timing</p>
        </div>
        <div style={infoBoxStyle}>
          <h2 style={{ color: "black" }}>15 Days</h2>
          <p>Duration</p>
        </div>
        <div style={infoBoxStyle}>
          <h2 style={{ color: "black" }}>Online</h2>
          <p>Mode of teaching</p>
        </div>
      </div>
    </>
  );
};

export default Impact;
