import React from 'react';
import { Container } from 'reactstrap';
import AboutIcon from "../../assets/images/AboutIcon.jpg";

function About() {
 

  return (
    <>
      <div className="beny_tm_about" id="about">
        <Container>
      
           <div className="section-title"  data-aos="fade-up">
                <h2>About Me</h2>
              </div>
          <div className="about_inner">
            <div className="left animated fadeInLeft" data-aos="fade-right">
              <img src={AboutIcon} alt='' />
              <div className="image">
                <img src={AboutIcon} alt='' />
              </div>
            </div>
            <div className="right animated" data-aos="fade-left">
              <div className="short">
                <h3>Hi There!</h3>
                <p>I'm Behzad Radgizadeh, a dedicated full-stack developer with a strong foundation in software engineering and a proven track record of creating high-quality applications. From crafting intuitive user interfaces to architecting robust backend systems, I thrive on the dynamic challenges of coding and problem-solving. My passion lies in leveraging technology to make a positive impact, whether it's streamlining processes, enhancing user experiences, or solving complex problems.

Every line of code I write is infused with a commitment to excellence, precision, and a drive for innovation. I believe in the power of continuous learning and stay updated with the latest trends and technologies in the field. I am eager to continue my journey as a full-stack developer, constantly seeking new challenges and opportunities for growth in the ever-evolving world of technology.

I take pride in my ability to collaborate effectively with cross-functional teams, communicate technical concepts clearly, and deliver scalable and maintainable solutions. My goal is to contribute my skills and expertise to meaningful projects that have a lasting impact, while also advancing my career and pushing the boundaries of what is possible in the realm of software development.</p>
              </div>
              {/* <div className="extra">
                
                
                <div className="beny_tm_button color">
                  <button onClick={handleDownload}>
                    <span className="wrapper">
                      <span className="first">Download CV</span>
                      <span className="second">Download CV</span>
                    </span>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default About;
