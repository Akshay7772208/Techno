import React from 'react'
import {CiPhone} from 'react-icons/ci'
import { MdOutlineMail } from "react-icons/md";
import {FaPhone, FaStar} from 'react-icons/fa'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
       <div className="btmheader">
      <div className="top-nav-wrapper">
            <ul className="top-nav-container">
                <li>
                    {/* {<i class="fa-solid fa-phone"></i>} */}
                    <CiPhone style={{color: 'white',fontSize: '30px'}}/>
                    <span><a href="tel:+919257035703">+91 9257035703</a></span>
                </li>
                <li>
                    <MdOutlineMail style={{color: 'white',fontSize: '30px'}}/>
                    <span><a href="mailto:info@technobridge.in">info@technobridge.in</a> </span>
                </li>
            </ul>
            </div>
    <div className="desknav showdesk ">
        <div className="navwrap">
            <div className="logo"><a href="https://www.technobridge.in/" className="logo" aria-label="Logo"><img src="https://www.technobridge.in/assets/images/technologo.webp" alt="Technobridge" aria-label="Logo" height="70px"/></a>
            </div>
            <ul className="navmenud">
                <li className="navitem"><a href="https://www.technobridge.in/">Home</a></li>
                <li className="navitem">
                    <a href="#s" className="dropicon">
                        Services
                        <RiArrowDropDownLine style={{color: '#333',fontSize: '40px'}}/>
                    </a>
                    
                    <ul className="dropmenu">
                        <li><a href="https://www.technobridge.in/clinical-research-course">Clinical
                                Research Course</a></li>
                        <li><a href="https://www.technobridge.in/regulatory-affairs-courses">Regulatory
                                Affairs Course</a></li>
                        <li><a href="https://www.technobridge.in/pharmacovigilance-courses">Pharmacovigilance
                                Course</a></li>
                        <li><a href="https://www.technobridge.in/clinical-data-management-courses">Clinical Data Management Course</a></li>
                        <li><a href="https://www.technobridge.in/medical-writing-course">Medical Writing Course</a></li>
                        <li><a href="https://www.technobridge.in/medical-coding-course">Medical Coding Course</a></li>
                        <li><a href="https://www.technobridge.in/clinical-research-courses-in-bangalore">Clinical Research Course in Bangalore</a></li>
                        <li><a href="https://www.technobridge.in/ethics-committee">Ethics
                                Committee</a></li>
                        <li><a href="https://www.technobridge.in/good-clinical-practices-training">GCP Training</a></li>
                        <li><a href="https://www.technobridge.in/digital-marketing-course">Digital
                                Marketing Course</a></li>
                        <li><a href="https://www.technobridge.in/full-stack-developer-course">Full
                                Stack Developer Course</a></li>
                        <li><a href="https://www.technobridge.in/software-testing-training-course">Software
                                Testing Course</a></li>
                        <li><a href="https://www.technobridge.in/web-designing-training-course">Web
                                Designing Course</a></li>
                        <li><a href="https://www.technobridge.in/dot-net-training-course">Dot Net
                                Training</a></li>
                        <li><a href="https://www.technobridge.in/angular-certification-training-course">Angular
                                Certification Course</a></li>
                        <li><a href="https://www.technobridge.in/python-training-course">Python
                                Training</a></li>
                        <li><a
                                href="https://www.technobridge.in/selenium-certification-training-course">Selenium
                                Certification Training</a></li>
                        <li><a href="https://www.technobridge.in/php-training-course">PHP Course</a>
                        </li>
                    </ul>
                </li>
                <li className="navitem"><a href="#s" className="dropicon">Blogs <RiArrowDropDownLine style={{color: '#333',fontSize: '40px'}}/></a>
                    <ul className="dropmenu">
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/clinical-data-management-courses-in-pune"> Clinical Data Management Courses</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/medical-coding-courses-in-bangalore"> Medical Coding Courses in Bangalore</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/post-graduate-diploma-in-clinical-research"> PG Diploma in Clinical Research</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/top-career-options-after-b-pharmacy-&-m-pharmacy">Career Options after B Pharm & M Pharm</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/top-10-pharmacovigilance-training-institutes-in-india">Top 10 Pharmacovigilance Training Institutes in India</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/how-to-become-a-clinical-research-coordinator"> How to Become a Clinical Research Coordinator?</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/pharmacovigilance-courses-future-career-salary"> Pharmacovigilance Career, Future & Salary</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/clinical-research-courses-scope-career-salary-syllabus-eligibility"> Clinical Research Courses Eligibility</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/best-clinical-research-courses-in-pune-by-technobridge-systems"> Best Clinical Research Courses by TechnoBridge Systems</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/scope-in-clinical-research-after-bds">Scope in Clinical Research after BDS</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/what-is-pharmacovigilance-and-why-is-it-important">Pharmacovigilance & Its Importantance</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/java-training/java-certification-course-in-pune"> Java Certification Course in Pune</a></li>
                        <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/top-clinical-research-courses-in-pune"> Top 5 Clinical Research Courses in Pune</a></li>
                        
                    </ul>
                </li>
                <li className="navitem"><a to='/about'>About Us </a> </li>
                <li className="navitem"><a >Contact </a> </li>
                <li className="navitem"><a >Register </a> </li>
            </ul>
        </div>
    </div>
    <div className="mobilenav showmob">
        <div className="navmenu">
            <a href="https://www.technobridge.in/" className="logo" aria-label="Logo"><img src="https://www.technobridge.in/assets/images/technologo.webp" alt=""/></a>
        </div>
             <FaPhone/>
            {/* <i className="fa-solid fa-phone"></i> */}
        <div className="menu-btn">
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
        </div>
        <ul className="mobilemenu">
            <li><a href="https://www.technobridge.in/" aria-label="Logo">Home</a></li>
            <li className="opendrop "><a href="#"> Services</a>
                <ul className="mobiledrop ">
                         <li><a href="https://www.technobridge.in/clinical-research-course">Clinical
                                Research Course</a></li>
                        <li><a href="https://www.technobridge.in/regulatory-affairs-courses">Regulatory
                                Affairs Course</a></li>
                        <li><a href="https://www.technobridge.in/pharmacovigilance-courses">Pharmacovigilance
                                Course</a></li>
                        <li><a href="https://www.technobridge.in/clinical-data-management-courses">CDM Courses</a></li>
                        <li><a href="https://www.technobridge.in/medical-writing-course">Medical Writing Course</a></li>
                        <li><a href="https://www.technobridge.in/medical-coding-course">Medical Coding Course</a></li>
                        <li><a href="https://www.technobridge.in/clinical-research-courses-in-bangalore">Clinical Research Course in Bangalore</a></li>
                        <li><a href="https://www.technobridge.in/ethics-committee">Ethics
                                Committee</a></li>
                        <li><a href="https://www.technobridge.in/good-clinical-practices-training">GCP Training</a></li>        
                        <li><a href="https://www.technobridge.in/digital-marketing-course">Digital
                                Marketing Course</a></li>
                        <li><a href="https://www.technobridge.in/full-stack-developer-course">Full
                                Stack Developer Course</a></li>
                    <li><a href="https://www.technobridge.in/software-testing-training-course">Software
                            Testing Course</a></li>
                    <li><a href="https://www.technobridge.in/web-designing-training-course">Web
                            Designing Course</a></li>
                    <li><a href="https://www.technobridge.in/dot-net-training-course">Dot Net
                            Training</a></li>
                    <li><a href="https://www.technobridge.in/angular-certification-training-course">Angular
                            Certification Course</a></li>
                    <li><a href="https://www.technobridge.in/python-training-course">Python Training</a>
                    </li>
                    <li><a href="https://www.technobridge.in/selenium-certification-training-course">Selenium
                            Certification Training</a></li>
                    <li><a href="https://www.technobridge.in/php-training-course">PHP Course</a></li>
                </ul>
            </li>
            <li className="opendrop "><a href="https://www.technobridge.in/blog">Blogs</a>
                <ul className="mobiledrop ">
                    <li><a href="https://www.technobridge.in/training/clinical-research/clinical-data-management-courses-in-pune"> Clinical Data Management Courses</a></li>
                    <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/medical-coding-courses-in-bangalore"> Medical Coding Courses in Bangalore</a></li>
                    <li><a href="https://www.technobridge.in/training/clinical-research/post-graduate-diploma-in-clinical-research"> PG Diploma in Clinical Research</a></li>
                    <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/top-10-pharmacovigilance-training-institutes-in-india">Top 10 Pharmacovigilance Training Institutes in India</a></li>
                    <li className="dropitem"><a href="https://www.technobridge.in/training/clinical-research/top-career-options-after-b-pharmacy-&-m-pharmacy">Career Options after B Pharm & M Pharm</a></li>
                    <li><a href="https://www.technobridge.in/training/clinical-research/how-to-become-a-clinical-research-coordinator"> How to Become a Clinical Research Coordinator?</a></li>
                    <li><a href="https://www.technobridge.in/training/clinical-research/pharmacovigilance-courses-future-career-salary"> Pharmacovigilance Career, Future & Salary</a></li>
                    <li><a href="https://www.technobridge.in/training/clinical-research/clinical-research-courses-scope-career-salary-syllabus-eligibility"> Clinical Research Courses Eligibility</a></li>
                    <li><a href="https://www.technobridge.in/training/clinical-research/scope-in-clinical-research-after-bds">Scope in Clinical Research after BDS</a></li>
                    <li><a href="https://www.technobridge.in/training/clinical-research/what-is-pharmacovigilance-and-why-is-it-important">Pharmacovigilance & Its Importantance</a></li>
                    <li><a href="https://www.technobridge.in/training/java-training/java-certification-course-in-pune"> Java Certification Course in Pune</a></li>
                     <li><a href="https://www.technobridge.in/training/clinical-research/best-clinical-research-courses-in-pune-by-technobridge-systems"> Best Clinical Research Courses by TechnoBridge Systems</a></li>
                    <li><a href="https://www.technobridge.in/training/clinical-research/top-clinical-research-courses-in-pune"> Top 5 Clinical Research Courses in Pune</a></li>
                </ul>
            </li>
            <li className="navitem"><a href="https://www.technobridge.in/about">About Us </a> </li>
                <li className="navitem"><a href="https://www.technobridge.in/contact">Contact </a> </li>
                <li className="navitem"><a href="https://www.technobridge.in/register">Register </a> </li>
        </ul>
    </div>
</div>
     </>
  )
}

export default Header