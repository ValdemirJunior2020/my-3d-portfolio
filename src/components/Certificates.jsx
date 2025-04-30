// File: src/components/Certificates.jsx
import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Modal, Image } from 'react-bootstrap'

const certificates = [
  {
    title: 'Full Stack Development',
    
    image: '/certificates/certificate1.jpg',
  },
  {
    title: 'ColdFusion Advanced',
    description: 'Udemy Certificate (2023)',
    image: '/certificates/coldfusion.jpg',
  },
]

const projects = [
  
  { name: 'Hope Step – Support psychology', url: 'https://hope-step.netlify.app/' },
  { name: 'Travel Planner AI', url: 'https://www.travelplanerai.com' },
  { name: 'Reviews Website', url: 'https://66ed948260bee90b97626fc5--ubiquitous-hamster-9d745a.netlify.app/' },
  { name: 'QAtickets hotelplanner' , url: "https://qa-tickets.netlify.app/"}
  
]



function Certificates() {
  const [showModal, setShowModal] = useState(false)
  const [activeImage, setActiveImage] = useState(null)

  const handleImageClick = (image) => {
    setActiveImage(image)
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
    setActiveImage(null)
  }

  return (
    <div className="bg-light text-dark py-5" id="certificates">
      <Container>
        <h2 className="text-center mb-5">Certificates & Projects</h2>

        {/* Certificates */}
        <Row className="gy-4">
          {certificates.map((cert, idx) => (
            <Col md={4} key={idx}>
              <Card className="shadow-sm h-100">
                <Card.Img
                  variant="top"
                  src={cert.image}
                  onClick={() => handleImageClick(cert.image)}
                  style={{ cursor: 'pointer' }}
                />
                <Card.Body>
                  <Card.Title>{cert.title}</Card.Title>
                  <Card.Text>{cert.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Project Links */}
        <h3 className="text-center mt-5 mb-3">My Projects</h3>
        <Row className="justify-content-center text-center">
          <Col md={4}>
            {projects.map((project, idx) => (
              <Button
                key={idx}
                variant="outline-primary"
                href={project.url}
                target="_blank"
                className="w-100 mb-3"
              >
                {project.name}
              </Button>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Modal for fullscreen image */}
      <Modal show={showModal} onHide={handleClose} centered size="lg">
        <Modal.Body className="text-center bg-dark">
          <Image src={activeImage} fluid />
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Certificates
