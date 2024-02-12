// App.js

import React from 'react';
import Footer from '../pages/home/Footer';

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
    margin: '20px',
    padding: '20px',
    borderRadius: '8px',
  },
  supportHeading: {
    marginBottom: '20px',
    fontWeight:'bold'
  },
  supportContent: {
    textAlign: 'left',
  },
  unorderedList: {
    listStyleType: 'disc',
    marginLeft: '20px',
    marginTop: '-20px'
  },

  container: {
    margin:'0 90px',
  },
  table: {
    borderCollapse: 'collapse',
    width: '100%',
    border: '2px solid #ddd', // Adding border to the table
  },
  th: {
    backgroundColor: 'orange',
    padding: '10px',
    textAlign: 'center',
    border: '1px solid #ddd', // Adding border to the header cells
  },
  td: {
    height:'60px',
    border: '1px solid #ddd',
    padding: '10px',
    textAlign: 'left',
  },
  firstColumn: {
    width: '60%',
  },
};

function TermsAndConditions() {
  return (
    <>
    
    <div style={styles.appContainer}>
      <p style={{marginLeft: '35px',fontWeight:'bold'}}>Terms and conditions:</p>

      <div style={styles.supportContent}>
        <ul style={styles.unorderedList}>
          <li>Enrollment fee needs to be deposited with the enrollment Form.</li>
          <li>Fee is not refundable under any circumstances.</li>
          <li>It is mandatory for the student to appear for all the assessments during and after the training sessions.</li>
          <li>Student is required to appear on the interviews on the mentioned dates as informed by the placement department at any location.</li>
          <li>The student is supposed to join the organization at any location for which he/she has been selected on the mentioned date as informed.</li>
          <li>Student understands that salary package and job location may vary; it is not in control of the institute. It is the responsibility of the student to earn a higher package by virtue of performance during the interview and excellent domain knowledge.</li>
        </ul>

        <p style={{marginLeft: '30px',fontWeight:'bold'}}>Undertaking:</p>
        <p style={{marginLeft: '30px'}}>
        I hereby undertake I have applied for the training program with TechnoBridge. I understand that fees paid are the changes of training and not for job. Job/placement call is free service offered by TechnoBridge to all the students and there is no cost involved for placements. I have read the rules and regulations of TechnoBridge and shall abide by them in latter and spirit. I shall also abide by the rules modified or framed in future. I shall pay the fees and other changer before specified dates. I shall submit my original documents for verification when informed and can be shared with employer companies. I understand that payment made is not refundable. I shall abide by the rules and regulations mentioned above and also mentioned in agreement. This undertaking abides me for my entire program duration. 
        </p>

      </div>
    </div>

    <div style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={{ ...styles.th, ...styles.firstColumn }}>Course Name</th>
            <th style={styles.th}>Duration</th>
            <th style={styles.th}>Fees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={styles.td}>PG Diploma in Clinical Research (PGDCR)</td>
            <td style={styles.td}>3 Months</td>
            <td style={styles.td}>22K/- To 25K/-</td>
          </tr>
          <tr>
            <td style={styles.td}>PG Diploma in Clinical Research (PGDCR)</td>
            <td style={styles.td}>3 Months</td>
            <td style={styles.td}>22K/- To 25K/-</td>
          </tr>
          <tr>
            <td style={styles.td}>PG Diploma in Clinical Research (PGDCR)</td>
            <td style={styles.td}>3 Months</td>
            <td style={styles.td}>22K/- To 25K/-</td>
          </tr>
          <tr>
            <td style={styles.td}>PG Diploma in Clinical Research (PGDCR)</td>
            <td style={styles.td}>3 Months</td>
            <td style={styles.td}>22K/- To 25K/-</td>
          </tr>
          <tr>
            <td style={styles.td}>PG Diploma in Clinical Research (PGDCR)</td>
            <td style={styles.td}>3 Months</td>
            <td style={styles.td}>22K/- To 25K/-</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </>
  );
}

export default TermsAndConditions;
