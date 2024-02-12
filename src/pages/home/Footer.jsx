import React from "react";
import "./Home.css";
import {FaFacebook, FaInstagram, FaLinkedin, FaLinkedinIn, FaPhone, FaVoicemail} from 'react-icons/fa'
import { Link } from "react-router-dom";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="footer textcontainer">
        <div className="ricol-3 about-us">
          <div className="footer-widget mb-50 mt-2">
            <div className="fw-title mb-30">
              <h3>About us</h3>
              <div className="btmborder"></div>
            </div>
            <div className="footer-trext mb-25">
              <p>
                We are Corporate Training and Career Development Company in Pune
                offering the finest technical...We are Corporate Training and
                Career Development Company in Pune offering the finest
                technical...
              </p>
            </div>
          </div>
        </div>
        <div className="ricol-3">
          <div className="footer-widget mb-50 mt-2">
            <div className="fw-title mb-30">
              <h3>Address</h3>
              <div className="btmborder"></div>
            </div>
            <div className="fw-links">
              <ul>
                <li>
                  <a href="https://www.technobridge.in/">
                    TechnoBridge Systems Pvt Ltd Ujwal Serene, Near Mauli
                    Garden, Baner, Pune - 411045, Maharashtra, India.
                    <br />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <ul>
                <li>
                  <FaPhone style={{color:'white',marginTop:'5px'}}/>
                  <span>
                    <a href="tel:+919257035703">+91 9257035703</a>
                  </span>
                </li>
                <li>
                  <MdMail style={{color:'white',marginTop:'5px'}}/>
                  <span>
                    <a href="mailto:info@technobridge.in">
                      info@technobridge.in
                    </a>{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="footer-sm">
              <a
                href="https://www.facebook.com/TechnoBridgeSystems"
                aria-label="facebook"
              >
                <FaFacebook/>
              </a>
              <a
                href="https://www.instagram.com/technobridge_systems/"
                aria-label="instagram"
              >
                <FaInstagram/>
              </a>
              <a
                href="https://www.linkedin.com/company/technobridge-systems/"
                aria-label="linkedin"
              >
                <FaLinkedin/>
              </a>
            </div>
          </div>
        </div>
        <div className="ricol-3 quick-links">
          <div className="footer-widget mb-50 mt-2">
            <div className="fw-title mb-30">
              <h3>Quick links</h3>
              <div className="btmborder"></div>
            </div>
            <div className="fw-link">
              <ul>
                <li>
                  <a href='/terms'>
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href='/privacy' >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='/refund'>
                    Refund Policy
                  </a>
                </li>
                <li>
                  <a href='/support'>Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="ricol-3 quick-links">
          <div className="footer-widget mb-50 mt-2">
            <div className="fw-title mb-30">
              <h3>Popular Courses</h3>
              <div className="btmborder"></div>
            </div>
            <div className="fw-link">
              <ul>
                <li>
                  <a href="https://www.technobridge.in/clinical-research-course">
                    Clinical Research Course
                  </a>
                </li>
                <li>
                  <a href="https://www.technobridge.in/regulatory-affairs-courses">
                    Regulatory Affairs Courses
                  </a>
                </li>
                <li>
                  <a href="https://www.technobridge.in/pharmacovigilance-courses">
                    Pharmacovigilance Courses
                  </a>
                </li>
                <li>
                  <a href="https://www.technobridge.in/clinical-data-management-courses">
                    Clinical Data Management Course
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div  className="ricol-12">
          <p style={{textAlign:'center',alignSelf:'center'}}>Copyright 2023 by TechnoBridge</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
