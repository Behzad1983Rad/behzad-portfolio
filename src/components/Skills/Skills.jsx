import React from 'react';
import { Container } from 'reactstrap';
import AboutIcon1 from "../../assets/images/briefcase.svg";
import SkillIcon0 from "../../assets/images/skills/django.png";
import SkillIcon1 from "../../assets/images/skills/001-library.png";
import SkillIcon2 from "../../assets/images/skills/002-html5.png";
import SkillIcon3 from "../../assets/images/skills/003-css.png";
import SkillIcon4 from "../../assets/images/skills/004-nodejs.png";
import SkillIcon5 from "../../assets/images/skills/001-python.png";
import SkillIcon6 from "../../assets/images/skills/002-database.png";
import SkillIcon7 from "../../assets/images/skills/003-django.png";
import SkillIcon8 from "../../assets/images/skills/004-cloud-computing.png";
import SkillIcon9 from "../../assets/images/skills/009-brands.png";
import SkillIcon11 from "../../assets/images/skills/005-global-server.png";
import SkillIcon12 from "../../assets/images/skills/006-elephant.png";
import SkillIcon13 from "../../assets/images/skills/java-script.png";
import SkillIcon15 from "../../assets/images/skills/015-backend.png";
import SkillIcon16 from "../../assets/images/skills/016-ui-design.png";
import SkillIcon17 from "../../assets/images/skills/007-github.png";
import SkillIcon18 from "../../assets/images/skills/analytics.png";

function Skills() {

  return (
    <>
      <div className="beny_tm_abouts" id="skills">

        <div className='bg_white_custom'>
          <Container>
            <div className="beny_tm_resume">
              <div className="section-title"  data-aos="fade-up">
                <h2>Skills</h2>
              </div>
              <div className="resume_inner w_full_col">
                <div className="skills animated fadeInLeft webflow_col"  data-aos="fade-right">
                  <div className="resume_title">
                    <img className="svg" src={AboutIcon1} alt="" />
                    <span>Technical Skills</span>
                  </div>

                  <h4>Junior Full-Stack Developer with Versatile Skills</h4>
                  <p>
                  Possessing a strong foundation in both frontend and backend development, I deliver comprehensive solutions tailored to project needs. My skills span from crafting responsive interfaces with React and Vue.js to backend development with Node.js, Django, and databases like MongoDB and PostgreSQL. Additionally, my experience includes cloud services with AWS and effective version control with Git & GitHub.
                  </p>
                  {/* <ul>
                    <li>Mobile-First, Responsive Design</li>
                    <li>Cross Browser Testing & Debugging</li>
                    <li>Cross Functional Teams</li>
                    <li>Agile Development & Scrum</li>
                  </ul> */}
                </div>

                <div className="education animated fadeInLeft features p-0"  data-aos="fade-left">
                  <div className="col-md-12 d-flex align-items-stretch mt-4">
                    <div className="row">
                      <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-md-0">
                        <div className="icon-box">
                          <img src={SkillIcon0} alt='' />
                          <h3>Django Rest Framework <strong>80%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-0">
                        <div className="icon-box">

                          <img src={SkillIcon17} alt='' />
                          <h3>Git & GitHub<strong>80%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-8">
                        <div className="icon-box">
                          <img src={SkillIcon1} alt='' />
                          <h3>React<strong>90%</strong></h3>
                        </div>
                      </div>
                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-8">
                        <div className="icon-box">
                          <img src={SkillIcon2} alt='' />
                          <h3>Html5<strong>90%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4">
                        <div className="icon-box">
                          <img src={SkillIcon3} alt='' />
                          <h3>Css3<strong>90%</strong></h3>
                        </div>
                      </div>
                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
                        <div className="icon-box">

                          <img src={SkillIcon4} alt='' />
                          <h3>Node JS<strong>80%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
                        <div className="icon-box">

                          <img src={SkillIcon5} alt='' />
                          <h3>Python<strong>90%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
                        <div className="icon-box">

                          <img src={SkillIcon6} alt='' />
                          <h3>MongoDB<strong>100%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
                        <div className="icon-box">

                          <img src={SkillIcon7} alt='' />
                          <h3>Django<strong>90%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
                        <div className="icon-box">

                          <img src={SkillIcon8} alt='' />
                          <h3>AWS <strong>90%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
                        <div className="icon-box">

                          <img src={SkillIcon9} alt='' />
                          <h3>Vue JS<strong>70%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 ">
                        <div className="icon-box">

                          <img src={SkillIcon13} alt='' />
                          <h3>JavaScript <strong>80%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-8">
                        <div className="icon-box">

                          <img src={SkillIcon11} alt='' />
                          <h3>SQL <strong>90%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-8">
                        <div className="icon-box">

                          <img src={SkillIcon12} alt='' />
                          <h3>PostgreSQL <strong>90%</strong></h3>
                        </div>
                      </div>

                      
                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-8">
                        <div className="icon-box">

                          <img src={SkillIcon16} alt='' />
                          <h3>ui<strong>70%</strong></h3>
                        </div>
                      </div>

                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-8">
                        <div className="icon-box">

                          <img src={SkillIcon15} alt='' />
                          <h3>Backend<strong>90%</strong></h3>
                        </div>
                      </div>
                      <div className="col col-lg-4 col-md-12 col-sm-12 col-xs-12 mt-4 mt-md-6">
                        <div className="icon-box">
                          <img src={SkillIcon18} alt='' />
                          <h3>Analytics<strong>90%</strong></h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </Container>
        </div>

        
      <div className="beny_tm_aboutt pb-5 d-inline-block w_full_col">
            <div className="container">
                
                <div className="beny_tm_resume pb-5">
                    <div className="resume_inner">
                        <div className="skills wow fadeInLeft webflow_col"  data-aos="fade-right">
                            <div className="resume_title">
                            <img className="svg" src={AboutIcon1} alt="" />
                                <span>Soft Skills</span>
                            </div>
                            
                            <ul className='mt-4 d-inline-block'>
                              <li>Communication</li>
                              <li>Listening</li>
                              <li>Teamwork</li>
                              <li>Problem-solving </li>
                              <li>Attention to detail</li>
                              <li>Adaptability</li>
                            </ul>
                        </div>
                        <div className="education wow fadeInLeft"  data-aos="fade-left">
                            <div className="resume_title mt-3">
                            <img className="svg" src={AboutIcon1} alt="" />
                                <span>Languages</span>
                            </div>
                            <div className="edu_list">
                              <ul>
                                    <li>
                                        <p><span>English</span> - Fluent </p>
                                    </li>
                                    <li>
                                        <p><span>Greek</span> - Fluent </p>
                                    </li>
                                    <li>
                                        <p><span>Arabic</span> - Fluent </p>
                                    </li>
                                    <li>
                                        <p><span>Persian</span> - Native </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>


      
    </>
  );
}

export default Skills;
