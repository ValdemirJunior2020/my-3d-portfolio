// File: src/components/SpinningImage.jsx
import React, { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Float, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function ProfilePlane() {
  const texture = useLoader(THREE.TextureLoader, '/profile.jpeg')
  const meshRef = useRef()

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <planeGeometry args={[3, 3.5]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </Float>
  )
}

function SpinningImage() {
  return (
    <div style={{ height: '400px', backgroundColor: '#111' }}>
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[0, 0, 5]} />
        <ProfilePlane />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default SpinningImage
