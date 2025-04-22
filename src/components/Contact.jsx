// File: src/components/Contact.jsx
import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

function Contact() {
  return (
    <div className="bg-dark text-light py-5" id="contact">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card bg="secondary" text="light" className="p-4 border-0 shadow-sm">
              <Card.Body>
                <Card.Text>
                  <strong>📞 Phone:</strong> <br />
                  754-366-9922
                </Card.Text>
                <Card.Text>
                  <strong>📧 Email:</strong> <br />
                  <a href="mailto:infojr.83@gmail.com" className="text-light">infojr.83@gmail.com</a>
                </Card.Text>
                <Card.Text>
                  <strong>🌐 Website:</strong> <br />
                  <a href="https://portfolio-two-phi-54.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-light">
                    portfolio-two-phi-54.vercel.app
                  </a>
                </Card.Text>
                <div className="mt-3">
                  <Button variant="light" href="mailto:infojr.83@gmail.com">Send Email</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
