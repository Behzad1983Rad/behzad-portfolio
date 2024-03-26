import React from 'react';
import { Container } from 'reactstrap';
import AboutIcon2 from "../../assets/images/award.svg";
import Lottie from 'react-lottie';
import animationData from './lottie.json'; 
function Education() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <div className="beny_tm_about" id="education">
        <Container>
          <div className="beny_tm_resume">
            <div className=" section-title"  data-aos="fade-up">
              <h2>Education</h2>
            </div>
            <div className="resume_inner">
              <div className="skills animated fadeInLeft minus_margin"  data-aos="fade-right">

                <Lottie options={defaultOptions} height={600} width={600} />
              </div>
              <div className="education animated fadeInLeft"  data-aos="fade-left">
                <div className="resume_title">
                  <img className="svg" src={AboutIcon2} alt="" />
                  <span>Education</span>
                </div>
                <div className="edu_list">
                  <ul>
                    <li>
                      <p><span>Software Engineer</span> - Bootcamp, General Assembly</p>
                      <span className="year">London, Nov 2023 - Mar 2024</span>
                    </li>
                    <li>
                      <p><span>Python for Everybody</span> - Online Course by Dr. Charles Russell Severance
</p>
                      <span className="year">Mar - Sep 2021</span>
                    </li>
                    <li>
                      <p><span>Marketing Strategy </span> - University of Michigan</p>
                      <span className="year">Feb - Dec 2015</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Education;
