import { OrbitControls } from '@react-three/drei'
import './App.css'
import NEO from './components/NEO'
import Earth from './components/Earth'
import { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { asteroids } from './assets/asteroids'

function App() {


  

  return (
    <>
      <Canvas
      camera={{ 
        fov: 75, 
        aspect: window.innerWidth / window.innerHeight, 
        near: 0.1, 
        far: 500, 
        position: [0, 0, 20] 
      }}
      >
        <ambientLight intensity={0.2} /> 
        <directionalLight color="white" position={[10, 5, 5]} intensity={1}/>
        <Earth />
        <group>
          {asteroids.map((neo) => {
            return <NEO key={neo.spkid} info={neo}/>;
          })}
        </group>
        
        <OrbitControls></OrbitControls>
      </Canvas>
      <div className="card">NEO Orrery</div>
    </>
  )
}

export default App

