import React, { useState, useEffect, useMemo } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Lottie from 'react-lottie';
import animationData from './lottie.json'; // Replace 'your-animation.json' with your actual JSON file

function Banner() {
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const texts = useMemo(() => ["Web Developer", "Eager to Innovate", "Full Stack Developer"], []);


  useEffect(() => {
    const interval = setInterval(() => {
      setText(texts[index].substring(0, text.length + 1));
      if (text === texts[index]) {
        clearInterval(interval);
        setTimeout(() => {
          setText('');
          setIndex((index + 1) % texts.length);
        }, 2000); // Wait 2 seconds before switching to the next text
      }
    }, 150); // Typing speed: 150 milliseconds per character
  
    const cursorInterval = setInterval(() => {
      setShowCursor((prevShowCursor) => !prevShowCursor);
    }, 500); // Cursor blink speed: 500 milliseconds
  
    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, [text, index, texts]);
  

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
      <div className="beny_tm_hero" id="home">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>

              <div className="content"  data-aos="fade-up">
                <div className="content_inner">
                  {/* Add fade-in animation class */}
                  <h3 className="name animated fadeIn"><strong>Hi! I'm Behzad</strong></h3>
                  <h3 className="job animated fadeIn">
                    {text}<span className={showCursor ? 'cursor-blink' : ''}></span><br />
                    <span>Based In London</span>
                  </h3>
                  <p className="text animated fadeIn">
                  I'm a Full-Stack Developer proficient in both frontend and backend development, as well as database management. I am passionate about creating user-friendly experiences and building excellent software that enhances the lives of those around me.                  
                  </p>

                  <br />
                  <br />
                  <div className="beny_tm_button animated fadeIn">
                    <a className="anchor" href="#about">
                      <span className="wrapper">
                        <span className="first">Get Started</span>
                        <span className="second">Get Started</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <div className='animation_banner'  data-aos="fade-left">
                <Lottie options={defaultOptions} height={650} width={650} style={{scale: "0.7"}}/>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Banner;
