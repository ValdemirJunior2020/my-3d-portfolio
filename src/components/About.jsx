// File: src/components/About.jsx
import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

function About() {
  return (
    <div className="bg-light text-dark py-5" id="about">
      <Container>
        <h2 className="text-center mb-4">About Me</h2>
        <Row className="justify-content-center">
          <Col md={10}>
            <Card className="p-4 shadow-sm border-0">
              <Card.Body>
              <p>
  I’m <strong>Valdemir Junior</strong> — a Full Stack Web Developer with a strong foundation in QA and call center performance management.
</p>

<p>
  I graduated from <strong>Bethel School of Technology</strong> in Redding, California, with a 3.8 GPA. I also completed an advanced ColdFusion course on Udemy to deepen my backend skills.
</p>

<p>
  Before entering the tech world, I ran a highly successful painting business in Florida for over 11 years. That experience taught me leadership, client relations, and how to build something from the ground up.
</p>

<p>
  I was born and raised in Brazil and moved to the United States in 2007 at 24 years old. I proudly became a U.S. citizen in 2015.
</p>

<p>
  On January 31st, 2020, I suffered a massive stroke due to COVID, which paralyzed half of my body. By God’s grace, I regained my ability to walk, see, and speak. During recovery, I decided to pursue my lifelong dream of becoming a developer. In August 2020, I joined a 9-month full-stack boot camp — and never looked back.
</p>

<p>
  Outside of work, I love <strong>gardening</strong>, <strong>music</strong>, and playing the <strong>drums</strong>. My faith and resilience drive me to inspire others, especially stroke survivors, through technology and compassion.
</p>

<p>
  I'm looking for a company with strong values, where I can be a true asset — someone who helps get the job done and brings light to the team.
</p>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About
