// File: src/components/SpinningCube.jsx
import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box() {
  const meshRef = useRef()

  // This runs on every frame (~60fps)
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  )
}

function SpinningCube() {
  return (
    <div style={{ height: '300px', backgroundColor: '#111' }}>
      <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Box />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default SpinningCube
