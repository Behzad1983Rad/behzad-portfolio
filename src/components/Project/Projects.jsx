import React, { useState } from 'react';
import { Container, Row, } from 'reactstrap';
import './Projects.css'; // Import CSS file for styling
import GitIcon from "../../assets/images/github.png";
import WebIcon from "../../assets/images/link.png";
import ReadmoreIcon from "../../assets/images/001-add.png";
import CloseIcon from "../../assets/images/close.png";
import ProjectIcon1 from "../../assets/images/2.PNG";
import ProjectIcon2 from "../../assets/images/3.PNG";
import ProjectIcon3 from "../../assets/images/5.PNG";
import ProjectIcon4 from "../../assets/images/6.PNG";


function Projects() {
  const [showGallery, setShowGallery] = useState(false); // State to control gallery visibility
  const [selectedProject, setSelectedProject] = useState(null); // State to store selected project

  // Array containing project data (image source, title, description, GitHub link, web link)
  const projects = [
    {
      imageSrc: ProjectIcon1,
      title: 'Battle Ship Game',
      description: 'I developed this Battleship game as a part of my journey in learning web development. The project was completed during my Full Stack Web Development course at General Assembly. The game is a classic rendition of Battleship, where players strategically place ships on a grid and take turns trying to sink each others fleet. It was my first project after 2 weeks of starting Bootcamp in General Assembly.',
      githubLink: 'https://github.com/Behzad1983Rad/Unit1_Project_BattleShip',
      webLink: 'https://behzad1983rad.github.io/Unit1_Project_BattleShip/',
      readmoreLink: 'https://github.com/Behzad1983Rad/Unit1_Project_BattleShip/blob/main/README.md',
      websiteLink: 'https://behzad1983rad.github.io/Unit1_Project_BattleShip',
      skills: ['JavaScript', 'HTML5', 'CSS']
    },
    {
      imageSrc: ProjectIcon2,
      title: 'Travel Explorer App',
      description: 'I completed the Travel Explorer App as part of my coursework using Vue.js for the frontend, Node.js for the backend, and MongoDB for the database. The project aims to provide users with a platform to discover and plan their trips. This ReadMe will walk you through the key aspects of the project.',
      githubLink: 'https://github.com/Behzad1983Rad/Behzad1983Rad-Unit2-FrontEnd',
      webLink: 'https://behzad1983rad-unit2-frontend-production.up.railway.app/',
      readmoreLink: 'https://github.com/Behzad1983Rad/Behzad1983Rad-Unit2-FrontEnd/blob/main/README.md',
      websiteLink: 'https://behzad1983rad-unit2-frontend-production.up.railway.app/',
      skills: ['Vue.js', 'Javascript',  'Node JS', 'MongoDB', 'Express', 'Google Auth']
    },
    {
      imageSrc: ProjectIcon3,
      title: 'Cosmic Collect',
      description: 'Description of project Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      githubLink: 'https://github.com/Behzad1983Rad/Project3-Frontend',
      webLink: 'https://cosmiccollect.netlify.app/',
      readmoreLink: 'https://github.com/Behzad1983Rad/Project3-Frontend/blob/main/README.md',
      websiteLink: 'https://cosmiccollect.netlify.app/',
      skills: ['React JS', 'Javascript', 'Node JS', 'MongoDB', 'Express', 'JWT']
    },
    {
      imageSrc: ProjectIcon4,
      title: 'Work Wise',
      description: 'Work Wise is a web application built using Django in the backend and React in the frontend, utilising Django REST Framework for API development. The project also incorporates AWS for uploading images and PostgreSQL for the database. Work Wise provides authentication functionality, allowing users to sign up, sign in, and sign out. Each user has a panel where they can manage employees and perform CRUD operations. Additionally, employees can add and manage jobs with CRUD operations. AWS is used to enable employees to upload their profile photos.',
      githubLink: 'https://github.com/Behzad1983Rad/freelanceApp-frontend',
      webLink: 'https://freelanceapp-frontend-production.up.railway.app/',
      readmoreLink: 'https://github.com/Behzad1983Rad/freelanceApp-frontend/blob/main/README.md',
      websiteLink: 'https://freelanceapp-frontend-production.up.railway.app/',
      skills: ['React JS', 'Javascript', 'HTML5', 'Django', 'Python', 'PostgreSQL', 'Django REST Framework', 'AWS']
    },
    // Add more projects as needed
  ];

  const truncateDescription = (description) => {
    const words = description.split(' ');
    if (words.length > 15) {
      return words.slice(0, 15).join(' ') + '...';
    } else {
      return description;
    }
  };

  // Function to handle project click and display gallery
  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowGallery(true);
  };

  // Function to close the gallery
  const handleCloseGallery = () => {
    setShowGallery(false);
    setSelectedProject(null);
  };

  return (
    <div className="projects-container beny_tm_news" id='project'>
      <Container>
        <Row>
          {/* <div className="beny_tm_title_holder" data-aos="fade-up">
            <span>Projects</span>
            <h3>Recent Projects</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, egestas. Id fermentum nullam ipsum massa.</p>
          </div> */}
          <div className="section-title"  data-aos="fade-up">
            <h2>My Projects</h2>
          </div>
        </Row>
        <Row className='news_list' data-aos="fade-down">
          {projects.map((project, index) => (
            <div className="col-md-3" key={index}>
              <div className="project-item list_inner">
                <div className='image'>
                  <img
                    src={project.imageSrc}
                    alt={project.title}
                    onClick={() => handleProjectClick(project)}
                  />
                </div>
                {/* Display project details on hover */}
                <div className="details">
                  <h3 className='title'>{project.title}</h3>
                  <p>{truncateDescription(project.description)}</p>
                  <div className="icons">
                    {/* GitHub icon */}
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <img src={GitIcon} alt='GitHub' title='GitHub' />
                    </a>
                    {/* Web link icon */}
                    <a href={project.webLink} target="_blank" rel="noopener noreferrer">
                      <img src={WebIcon} alt='Website' title='Website' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Row>
        {showGallery && selectedProject && (
          <>
            <div className='gallery-modal'  onClick={handleCloseGallery}>
            
            <Container>
              <div className='padding_100'>
                <div className='modal_opened_overlay'>
                  <Row>
                    <div className="col-md-6">
                      <div className='gallery-modal-left'>
                        <div className="close-gallery" onClick={handleCloseGallery}>
                          <img src={CloseIcon} alt='Close' title='Close' />
                        </div>
                        <img src={selectedProject.imageSrc} alt={selectedProject.title} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="gallery-modal-inner">
                        <h3 className='title'>{selectedProject.title}</h3>
                        <div className="icons">
                          {/* GitHub icon */}
                          <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                            <img src={GitIcon} alt='GitHub' title='GitHub' />
                          </a>
                          {/* Web link icon */}
                          <a href={selectedProject.websiteLink} target="_blank" rel="noopener noreferrer">
                            <img src={WebIcon} alt='Website' title='Website' />
                          </a>
                          <a href={selectedProject.readmoreLink} target="_blank" rel="noopener noreferrer">
                            <img src={ReadmoreIcon} alt='Readmore' title='Readmore' />
                          </a>
                        </div>
                        <p>{selectedProject.description}</p>
                        <div className='projects_skills'>
                          <h4>Skills</h4>
                          <ul>
                              {selectedProject.skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                              ))}
                            </ul>
                          {/* <ul>
                            <li>Javascript</li>
                            <li>HTML5</li>
                            <li>CSS</li>
                          
                          </ul> */}
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </div>
            </Container>
          </div>
          </>
        )}
      </Container>
    </div>
  );
}

export default Projects;