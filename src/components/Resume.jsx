// File: src/components/Resume.jsx
import React from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'

function Resume() {
  return (
    <div className="bg-white text-dark py-5" id="resume">
      <Container>
        <h2 className="text-center mb-5">Resume</h2>
        <Row>
          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Education</Card.Title>
                <Card.Text>
                  <strong>Bethel School of Technology</strong> (2020 – 2021)  
                  <br />
                  Full Stack Web Development – GPA: 3.8  
                  <br />
                  Powered by Woz U, Apple’s co-founder Stephen Wozniak’s bootcamp.
                  <br />
                  <br />
                  <strong>Udemy ColdFusion Certificate</strong> – August 2023  
                  <br />
                  17 dedicated hours, focused on deep backend development.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>Work Experience</Card.Title>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <strong>Full Stack Web Developer</strong>  
                    <br />
                    Bethel School of Technology (2020–2021)  
                    <br />
                    Developed a stroke recovery community site (MVC), used GitHub, built full-stack apps.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>QA Manager – HotelPlanner</strong>  
                    <br />
                    April 2023 – Present  
                    <br />
                    Managing call center QA, building internal tools, and ensuring procedural excellence.
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Self-Employed – DNA Painting</strong>  
                    <br />
                    2010 – 2020  
                    <br />
                    Owned a successful painting company. Led team management, customer service, and operations.
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Skills & Tools</Card.Title>
                <Card.Text>
                  
                  <strong>Tools:</strong> Css, Html, GitHub, Node.js, MongoDB, React, SQL Workbench, Angular<br />
                  <strong>Soft Skills:</strong> Detail-oriented, problem solver, adaptable
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Hobbies</Card.Title>
                <Card.Text>
                  Gardening 🌱<br />
                  Music 🎵<br />
                  Playing Drums 🥁<br />
                  Building helpful apps 🙏
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Resume
