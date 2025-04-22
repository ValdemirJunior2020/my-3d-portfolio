// File: src/components/Footer.jsx
import React from 'react'
import { Container } from 'react-bootstrap'

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 mt-5">
      <Container>
        <small>&copy; {new Date().getFullYear()} Valdemir Junior. All rights reserved.</small>
      </Container>
    </footer>
  )
}

export default Footer
