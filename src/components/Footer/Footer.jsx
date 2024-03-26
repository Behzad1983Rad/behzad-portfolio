import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import LinkedIN from "../../assets/images//001-linkedin.png";
import Email from "../../assets/images//001-email.png";
import Github from "../../assets/images//002-github.png";
import Upwork from "../../assets/images//upworkk.png";
import Address from "../../assets/images//002-address.png";
function Footer() {
  return (
    <div className='footer-section' id='contact'>
      <Container>
        <div className="section-title"  data-aos="fade-up">
          <h2>Contact</h2>
        </div>
        <Row>
          <Col>
            <div className='footer_col'>
              <a href='mailto:someone@gmail.com'>
                <img src={Email} alt=''/>
                behzad.radgizadeh@gmail.com
              </a>
            </div>
            </Col>
            <Col>
            <div className='footer_col'>
              <div className='address_col'>
                <img src={Address} alt=''/>
                <p>London - United Kingdom - HA5</p>
              </div>
            </div>

          </Col>
          <Col style={{scale: "1.35"}}>
            <div className='footer_col footer_right'>
              {/* Add your social links here */}
              {/* <button><img src={Upwork} alt=''/></button> */}
              <a href="https://www.upwork.com/freelancers/~019fca06c565e9fac2" target="_blank" rel="noopener noreferrer">
                <img src={Upwork} alt='' />
              </a>
              {/* <button><img src={LinkedIN} alt=''/></button> */}
              <a href="https://www.linkedin.com/in/behzad-radgizadeh/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedIN} alt='' />
              </a>
              {/* <button><img src={Github} alt=''/></button> */}
              <a href="https://github.com/Behzad1983Rad" target="_blank" rel="noopener noreferrer">
                <img src={Github} alt='' />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
