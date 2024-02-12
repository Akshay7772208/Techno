import React from 'react';

import Footer from '../pages/home/Footer';

const NewPatternLayout = () => {
  return (
    <>
    
    <div className="new-pattern-layout" style={styles.container}>
      {/* First Row */}
      <div className="first-row" style={styles.row}>
        <div style={styles.textDiv}>
          {/* Content for the first div */}
          <h2 style={{color: '#25487b'}}>WHO WE ARE</h2>
          <p>
          We are Corporate Training and Career Development Organization in Pune offering the finest technical and non-technical training and placement services in the field of information technology (IT) and pharmaceuticals.

We work with industry experts to enhance, train and prepare the students in pursuing their dream career. From freshers to experienced professionals, we offer a full spectrum of training and guidance to evolve career in booming industries like Clinical Research, IT and Digital Marketing.
          </p>
        </div>
        <div style={styles.imageRight}>
          {/* Image on the right */}
          <img src="https://www.technobridge.in/assets/images/about/18771.jpg" alt="Image1" style={styles.image} />
        </div>
      </div>

      {/* Second Row */}
      <div className="second-row" style={styles.row}>
        <div style={styles.imageLeft}>
          {/* Image on the left */}
          <img src="https://www.technobridge.in/assets/images/about/3156627.jpg" alt="Image2" style={styles.image} />
        </div>
        <div style={styles.textDiv}>
          {/* Content for the second div */}
          <h2 style={{color: '#25487b'}}>WHAT WE DO</h2>
          <p>
          We don't just train but also help students to gain clarity and build confidence in making a significant career move. Our seasoned faculty members conduct intense campus, corporate, in-house training and career development programmes in Pune. We ensure that every trainee who moves out of TechnoBridge after successfully completing the course find meaningful work and experience unconditional job satisfaction.

There is a vying competition and at the same companies are in needs of highly specialized workforce. We follow the time tested training module build by the top players of the industry to ensure the trainee fit in the right job and achieve their career goals. Unlike typical training services, TechnoBridge predominantly focuses on real-time practical values and thus train the students in the corporate environment and claims 100% job assistance.
          </p>
        </div>
      </div>

      {/* Third Row */}
      <div className="third-row" style={styles.row}>
        <div style={styles.textDiv}>
          {/* Content for the first text div */}
          <img style={{width:'40px',height:'40px',marginLeft:'150px'}} src='https://www.technobridge.in/assets/images/about/vision.png' alt='image'/>
          <h2 style={{color: '#25487b'}}>VISION</h2>
          <p>
          ❖To be the finest and reputed training firms that help right from aspirants to working professionals to be on the right career path and attain success.<br/>
❖ To be a one-stop solution for the industry giants to discover the best talents that best suits their company's purpose.<br/>
❖ To discover more hidden gems around the world, polish and make them stand out from the crowd.
          </p>
        </div>
        <div style={styles.textDiv}>
          {/* Content for the second text div */}
          <img style={{width:'40px',height:'40px',marginLeft:'150px'}} src='https://www.technobridge.in/assets/images/about/mission.png' alt='image'/>
          
          <h2 style={{color: '#25487b'}}>MISSION</h2>
          <p>
          ❖ Unleash the potential and help them attain career goals by providing top-notch trainings with the support of industry masters.<br/>
❖ Build a bridge between skilled talents and vacant jobs.<br/>
❖ Conduct training and workshops not just to develop skillset but also to stay abreast with the latest technologies and market trends.
          </p>
        </div>
      </div>
    </div>
    
    </>
  );
};

const styles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
  },
  row: {
    display: 'flex',
    marginBottom: '20px',
  },
  textDiv: {
    flex: 1,
    marginRight: '10px',
    backgroundColor: 'white',
    padding: '10px',
  },
  imageRight: {
    flex: 1,
    marginLeft: '10px',
  },
  imageLeft: {
    flex: 1,
    marginRight: '10px',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
};

export default NewPatternLayout;
