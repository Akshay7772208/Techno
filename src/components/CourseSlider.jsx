import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';
import './Course.css';

const CourseSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
  };

  return (
    <>
    <div class="mt-10"></div>
      <div class="mt-10"></div>
      <div style={{background:'white'}}>
      <h2 style={{textAlign:'center',paddingTop:'20px'}} >
          <strong style={{color:'black'}}>Trending Courses</strong>
        </h2>
        <div class="btmborder"></div>

        <p style={{color:'black'}}>
          <center> Learn The Best And Most In-Demand Courses From TechnoBridge.</center>
        </p>
        <br />
        </div>
      <div
        style={{
          background: "white",
        }}>
    <Slider {...settings} className="course-slider">
      <div className="course-card" >
        <button className="tag">Best Seller</button>
        <h4 className="c-title">Full Stack Developer Course</h4>
        <div className="starratings">
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
        </div>
        <p className="c-desc">
          Full Stack Developer Course is structured according to the requirements of the IT
          industry and covers required programming, scripting languages & Databases
        </p>
        <a href="/full-stack-developer-course" className="btn-explore">Explore Now</a>
      </div>
      <div className="course-card">
        <button className="tag">Best Seller</button>
        <h4 className="c-title">Mern Stack Developer Course</h4>
        <div className="starratings">
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
        </div>
        <p className="c-desc">
          Full Stack Developer Course is structured according to the requirements of the IT
          industry and covers required programming, scripting languages & Databases
        </p>
        <a href="/full-stack-developer-course" className="btn-explore">Explore Now</a>
      </div>
      <div className="course-card">
        <button className="tag">Best Seller</button>
        <h4 className="c-title">Medical Writing Course</h4>
        <div className="starratings">
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>

          <span><FaStar /></span>
          <span><FaStar /></span>
        </div>
        <p className="c-desc">
          Full Stack Developer Course is structured according to the requirements of the IT
          industry and covers required programming, scripting languages & Databases
        </p>
        <a href="/full-stack-developer-course" className="btn-explore">Explore Now</a>
      </div>
      <div className="course-card">
        <button className="tag">Best Seller</button>
        <h4 className="c-title">Ethical Commitee Course</h4>
        <div className="starratings">
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
        </div>
        <p className="c-desc">
          Full Stack Developer Course is structured according to the requirements of the IT
          industry and covers required programming, scripting languages & Databases
        </p>
        <a href="/full-stack-developer-course" className="btn-explore">Explore Now</a>
      </div>
      <div className="course-card">
        <button className="tag">Best Seller</button>
        <h4 className="c-title">Full Stack Developer Course</h4>
        <div className="starratings">
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
          <span><FaStar /></span>
        </div>
        <p className="c-desc">
          Full Stack Developer Course is structured according to the requirements of the IT
          industry and covers required programming, scripting languages & Databases
        </p>
        <a href="/full-stack-developer-course" className="btn-explore">Explore Now</a>
    </div>
      {/* Add more CourseCard components as needed */}
      {/* <div>1</div>
      <div>11</div>
      <div>111</div>
      <div>11111</div>
      <div>1111</div> */}
    </Slider>
    </div>
    </>
  );
};

export default CourseSlider;
