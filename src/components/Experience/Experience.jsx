import React from 'react';
import { Container, Row, Col } from 'reactstrap';

function Experience() {
  return (
    <>
      <section id="experience" className="resume">
        <Container>
          <div className="section-title"  data-aos="fade-up">
            <h2>Experience</h2>
          </div>
          <Row>
            <Col lg="6"  data-aos="fade-right">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Behzad Radgizadeh</h4>
                <p><em>During my tenure as a Software Engineering Bootcamp student at General Assembly, I acquired an intensive and hands-on software engineering education, focusing on full-stack development and Agile methodologies. This foundational experience complements my freelance work as a Python Developer and Marketing Consultant, where I specialize in crafting digital marketing strategies to optimize online visibility and drive business growth. Prior to my tech-focused roles, I served as an Interpreter for the European Union, ensuring precise communication in diplomatic contexts, and as a Cultural Mediator at the UN in Greece, promoting understanding and fostering integration initiatives for diverse groups and refugee populations.</em></p>
                
              </div>
              <h3 className="resume-title">Previous Experience</h3>
              <div className="resume-item">
                <h4>Interpreter, European Union
</h4>
                <h5>2019 - 2023</h5>
                <p><em>Various European Countries</em></p>
                <p>Provided interpretation services for the European Union, ensuring accurate communication in diplomatic settings.
Demonstrated proficiency in simultaneous and consecutive interpretation techniques in high-pressure environments.</p>
              </div>
              <div className="resume-item">
                <h4>Cultural Mediator 2017-2020</h4>
                <h5>2015 - 2020</h5>
                <p><em> UN , Greece</em></p>
                <p>Facilitated communication and collaboration between culturally diverse groups, promoting understanding and conflict resolution.
Organised cultural exchange programs and events, fostering integration initiatives for refugee populations.</p>
              </div>
            </Col>
            <Col lg="6"  data-aos="fade-left">
              <h3 className="resume-title">Professional Experience</h3>
              <div className="resume-item">
                <h4>Software Engineering Bootcamp Student</h4>
                <h5> Nov 2023- Mar 2024</h5>
                <p><em>General Assembly London (remote)</em></p>
                <p>My experience at General Assembly was characterised by an intensive software engineering curriculum. The course structure emphasised hands-on learning and collaboration, utilising Agile methodologies to tackle real-world projects. Through this immersive experience, I honed my skills as a full-stack developer and cultivated an agile mindset essential for success in the tech industry.
</p>
                
              </div>
              <div className="resume-item">
                <h4>Freelance Python Developer and Marketing Consultant </h4>
                <h5>Since 2020 - Present</h5>
                <p><em>Upwork, LinkedIn , London</em></p>
                <ul>
                  <li>Delivered digital marketing strategies and consultancy services, optimising online visibility and driving business growth.</li>
                  <li>Executed tailored marketing campaigns, enhancing brand recognition across diverse industries.</li>
                 
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Experience;
