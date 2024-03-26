import React, { useState, useEffect } from 'react';
import { Navbar, Nav, NavItem, NavLink, Container, NavbarToggler, Collapse } from 'reactstrap';

function Header() {
  const [scrollY, setScrollY] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Add isOpen state

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        home: document.getElementById('home')?.offsetTop,
        about: document.getElementById('about')?.offsetTop,
        skills: document.getElementById('skills')?.offsetTop,
        education: document.getElementById('education')?.offsetTop,
        experience: document.getElementById('experience')?.offsetTop,
        project: document.getElementById('project')?.offsetTop,
        contact: document.getElementById('contact')?.offsetTop,
      };

      const scrollPosition = window.scrollY + 100; // Add some offset for better accuracy

      let currentSection = '';
      for (const [key, value] of Object.entries(sectionOffsets)) {
        if (value !== null && scrollPosition >= value) {
          currentSection = key;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar color={scrollY > 0 ? "white" : "white"} light expand="md" fixed="top">
        <Container>
          <NavbarToggler className='mr-auto' onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className={activeSection === 'home' ? 'active' : ''} href="#home">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeSection === 'about' ? 'active' : ''} href="#about">About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeSection === 'skills' ? 'active' : ''} href="#skills">Skills</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeSection === 'education' ? 'active' : ''} href="#education">Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeSection === 'project' ? 'active' : ''} href="#project">Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeSection === 'experience' ? 'active' : ''} href="#experience">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={activeSection === 'contact' ? 'active' : ''} href="#contact">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
