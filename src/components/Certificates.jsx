// File: src/components/Certificates.jsx
import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Certificates() {
  return (
    <div className="bg-light text-dark py-5" id="certificates">
      <Container>
        <h2 className="text-center mb-5">Certificates & Projects</h2>
        
        {/* Certificates Section */}
        <Row className="gy-4">
          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/certificates/certificate1.jpg" />
              <Card.Body>
                <Card.Title>Full Stack Development</Card.Title>
                <Card.Text>Bethel School of Technology (2021)</Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-sm">
              <Card.Img variant="top" src="/certificates/coldfusion.jpg" />
              <Card.Body>
                <Card.Title>ColdFusion Advanced</Card.Title>
                <Card.Text>Udemy Certificate (2023)</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Projects Section */}
        <h3 className="text-center mt-5 mb-3">My Projects</h3>
        <Row className="justify-content-center text-center">
          <Col md={4}>
            <Button variant="primary" href="https://your-project1.vercel.app" target="_blank" className="mb-3 w-100">
              Travel Planner AI
            </Button>
            <Button variant="secondary" href="https://your-project2.vercel.app" target="_blank" className="mb-3 w-100">
              QA Dashboard
            </Button>
            <Button variant="dark" href="https://your-project3.vercel.app" target="_blank" className="w-100">
              Stroke Recovery Blog
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Certificates
