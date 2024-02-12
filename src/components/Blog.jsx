// App.js

import React,{useState} from 'react';
import './Blog.css';
import Footer from '../pages/home/Footer';
import { FaCheck } from 'react-icons/fa';
import EnquireForm from './Form';

const Blog = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your submission logic here
    console.log('Form submitted:', formData);
  };

  const styles = {
    enquireFormContainer: {
      // maxWidth: '500px',
      width:'300px',
      margin: '0 auto',
      position:'fixed',
      top:'275px',
      right:'15px'
    },
    formHeading: {
      backgroundColor: '#061e91', /* Blue background */
      color: '#fff', /* White text color */
      padding: '10px',
      textAlign: 'center',
      marginBottom:'0'
    
      },
    enquireForm: {
      display: 'flex',
      flexDirection: 'column',
      border: '1px solid #ccc', /* Add border to the form */
      padding: '20px',
      borderRadius: '5px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' /* Add box shadow */
  
    },
    formGroup: {
      marginBottom: '15px',
    },
    label: {
      marginBottom: '5px',
      color: '#333', /* Label text color */
      display: 'block',
    },
    input: {
      padding: '5px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      width: '100%',
      boxSizing: 'border-box',
    },
    submitButton: {
      backgroundColor: 'orange', /* Blue background */
      color: '#fff', /* White text color */
      padding: '5px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '16px',
      width: '200px', /* Set width of the submit button */
      alignSelf: 'center', /* Center the button */
    },
  };
  

  return (
    <>
    
    <div className='img-cont'>
        <div className="inner-cont">
            <button className='styled-button'>JAVA</button>
            <p>April 27,2020</p>
        </div>
        <h3>
Best Java Training Course in Pune | Certification Course</h3>
    </div>
   
    <div className="main-container">
      <div className="info-container">
        <h2 style={{color: '#061e91'}}>Introduction to JAVA Training</h2>
        <p>
          Over the years, the IT industry in Pune has been growing at a booming rate. It is predicted the industry has scope for more growth in the future. Getting Java certification course in Pune with 100% placement assistance will be very beneficial for job seekers. Once they complete their training, students would be able to demonstrate competencies but also get a job as a Java developer.<br/>
Java is an object oriented programming language which is used by developers to create most web applications and websites. It can be implemented in laptops, mobiles, tablets, game consoles and supercomputers.

Students who complete their Java training would be skilled in several frameworks namely Hibernate, Struts and Spring.  Moving on to the educational prerequisites you must have a bachelor’s degree in Information Technology, computer science or computer administration (BCA).<br/>

Enroll in the Best Java Training in Pune so that you would have an edge over others similarly Java course enables Candidate to start career as an Android developer, software tester, big data developer, cloud computing and database administrator. So, join the best Java course in Pune to start your career in ever growing IT Industry.

Expertise After JAVA Training
        </p>
        

        <h2 style={{color: '#061e91'}}>Learn From Best Java Training Institute in Pune</h2>
        <p>
        We believe that a student of the best Java Training institute in Pune creates several applications during their career. Some of these would include popular web-based and mobile based applications. For the uninitiated, there are various tools and technologies which are used to develop these applications include Hadoop, Salesforce, Cloud computing and Android. The industry experts at the best Java training institute in Pune would equip you with the relevant skills. You could be the next best developer who will create a useful and informative app for the people. Without further ado, join the best Java courses in Pune to learn the responsibilities of a Java developer.
        </p>
        
        <h2 style={{color: '#061e91'}}>JAVA Classes in Pune – Course Modules</h2>
        <p>Over the years, the IT industry has evolved such that it uses the best cutting-edge technologies. Taking these changes into consideration, our Java classes in Pune cover the latest trends of the industry. Furthermore, our industry experts have included different tools, technologies and frameworks into different training modules. Let’s have a look at the four training modules which are taught at our Java classes in Pune.

– Core and Advance Java
In the present scenario, we have noticed that there is a huge gap between the current knowledge of students and the skills required for the industry. Our motto is to clear this void and help students start their dream careers in the industry. Students would be able to enhance their technical capabilities in Core and Advance Java. In our opinion, you just need to enroll in our Java classes in Pune. Once you finish your training and classes, you would be skilled in certain Java frameworks.

You may ask what frameworks would be taught to you during the training Read on to know about the frameworks being taught in the best Java classes in Pune.

<br/>-Spring Framework<br/>
The first framework, i.e. Spring has been known to be an alternative to the Enterprise JavaBeans model (EJB). It is an open source Java application frameworks that makes use of the Inversion of control (Ioc) container. Furthermore, this framework consists of elements such as inversion of control (Ioc), Aspect-oriented Programming, Data Access, Transaction Management and Model View Controller (MVC). Java developers mostly use this framework to develop applications on a Java EE platform.

<br/>-Hibernate Framework<br/>
Hibernate, an open source  object relational mapping too, is considered to be the alternate framework to Java DataBase Connectivity (JDBC).  It is considered the better source because of its ability to overcome the limitations of JDBC. Furthermore, this tool mostly streamlines the development process of the application so that it can interact with the database at ease. It’s main feature is to carry out mapping from Java classes to database tables and from Java data types to SQL and No SQL Database types.

<br/>– Struts Framework <br/>
Struts is the most popular framework which is used in creating Java-based web applications. It is an open source framework based on sets of Java technologies such as Servlet,JSP,JSTL and XmL. Furthermore, this project was started by Apache Software and is based on the Model View Controller architecture.  The framework plays an important role of being a bridge between the application’s model and web view.

All in all, one needs to enroll in our Java classes in Pune. It will definitely give you the best learning experience.</p>

<h2 style={{color: '#061e91'}}>JAVA Training In Pune With Certification</h2>
        <p>There are several reasons why students should opt for TechnoBridge’s Java Training in Pune with certifications. Firstly, they will learn from those experts who have been practicing their subject for many years in the industry. Second, we follow the learning by doing where we give our candidates the opportunity to work on challenges of real businesses in the city; thirdly, one would be awarded with certifications post their Java Training in Pune.  Finally, you get a job with an attractive salary package once you are done with your certification training. So, what are you waiting for?  Get yourself enrolled in the best Java training in Pune and land a job with your certifications.</p>

<h6 style={{fontWeight:'bold'}}>Eligibility For Our Java Course</h6>
<p>The eligibility for our Java course is a bachelor’s degree in Information Technology or even a Bachelor in Computer Administration. Furthermore, you need to have a minus of 50% in your bachelor’s degree.  Those who have appeared for their final year exams are also eligible to apply for a Java course.</p>
<h6 style={{fontWeight:'bold'}}>Java Training In Pune With Placement</h6>
<p>We, at TechnoBridge, believe in transforming curriculums into careers. For that reason, our Java course in Pune also focuses on soft skill sessions, mock interviews and aptitude preparations. Students benefit significantly from these sessions as they help students crack tough job interviews. This is how you can not only gain expertise in technical concepts. At the same time, one would build their personality when they join Java Training with placements in Pune.</p>
<h6 style={{fontWeight:'bold'}}>Career Opportunities After Java Certification</h6>
<p>Students would get several opportunities after completing their Java Course. Listed below are some of the job profiles that you can apply for:</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/>  Java Video Game Programmer</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Web Software Engineer</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Software Developer</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Java Web Developer</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> ava Webmaster
</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Big Data Developer</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/>Cloud Computing Developer</p>


<h6 style={{fontWeight:'bold'}}>FAQs Java Certification Questions</h6>
<p>We always get some questions regarding our Java certification course. Hence, we have compiled a list of Frequently Answered Questions for prospective students. They are given below:</p>

<h6 style={{fontWeight:'bold'}}>Q. What is the duration of course?</h6>
<p>A – The duration of our course is 3 months.</p>

<h6 style={{fontWeight:'bold'}}>Q. What is your admission procedure for Java Course?</h6>
<p>A- First, You have to apply online through the website. Our admission officers would then get in touch with you to book a slot for an appointment with industry experts. Then, your knowledge on Java would be tested by our experts. Finally, the counsellors will guide you with the admission procedure.</p>
<h6 style={{fontWeight:'bold'}}>Q. What is the duration of course</h6>
<p>A- You would receive the certification after the completion of your Java certification course</p>

<h6 style={{fontWeight:'bold'}}>Java Content(Syllabus)</h6>
<p>The content of our Java courses covers different topics comprehensively. Take a look at the different concepts in our curriculum. They are:</p>

<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> An introduction to Programming</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Language Basics of Java</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Data types and operators</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Array and strings</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Control statements</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Language Basics of Java</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> GUI Programming</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Applets</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Swing</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> 6API</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Strut</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Spring</p>
<p style={{marginTop:'-12px'}}><FaCheck style={{color:'blue'}}/> Hibernate</p>

<p>Therefore, our Java course covers these topics comprehensively.<br/>

To summarize, you can become a skilled developer after completing our Java certification course. So, don’t waste your precious moments. Get in touch with the Best Java training institute in Pune now. </p>
</div>

      {/*<div className="enquire-form-container">
        <h3 style={{textAlign:'center',marginTop:'-10px'}}>Enquire Now</h3>
        <form>
          <label htmlFor="name" >Name:</label>
          <input placeholder="Enter Name"type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input placeholder="Enter Email" type="email" id="email" name="email" required />

          <label htmlFor="phone">Phone:</label>
          <input placeholder="Enter Phone" type="tel" id="phone" name="phone" required />

          <label htmlFor="location">Location:</label>
          <input placeholder="Enter Location" type="text" id="location" name="location" required />

          <button type="submit" style={{width:'200px',height:'50px',marginLeft:'40px'}}>Submit</button>
        </form>
  </div>*/}
     
     <div style={styles.enquireFormContainer}>
      <p style={styles.formHeading}>Enquire Now</p>
      <form style={styles.enquireForm} onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="phone" style={styles.label}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Enter Phone"
            value={formData.phone}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="location" style={styles.label}>Location</label>
          <input
            type="text"
            id="location"
            name="location"
            placeholder="Enter Location"
            value={formData.location}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>Submit</button>
      </form>
    </div>

    </div>
  

    </>
  );
};

export default Blog;
