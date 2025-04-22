// File: src/components/Hero.jsx
import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { motion } from 'framer-motion'
import SpinningImage from './SpinningImage'

function Hero() {
  return (
    <div className="bg-dark text-light text-center" style={{ minHeight: '100vh' }}>
      <SpinningImage />

      <Container className="py-5">
        <Row className="align-items-center justify-content-center">
          <Col md={8}>
            <motion.h1
              className="display-3 fw-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I'm Valdemir Junior 👋
            </motion.h1>

            <motion.p
              className="lead mt-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Junior Full Stack Web Developer & QA Manager based in Florida.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              I love building beautiful web apps, helping call centers thrive, and coding with purpose 🙌
            </motion.p>

            <motion.div
              className="mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              <Button variant="primary" href="#resume" className="me-3">
                View Resume
              </Button>
              <Button variant="outline-light" href="#contact">
                Contact Me
              </Button>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
