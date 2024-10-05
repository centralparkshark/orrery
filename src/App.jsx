import { OrbitControls, Stars } from '@react-three/drei'
import './App.css'
import NEO from './components/NEO'
import Earth from './components/Earth'
import { useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { asteroids } from './assets/asteroids'

function App() {

  const [showOrbitLines, setShowOrbitLines] = useState(true);
  
  const toggleOrbitLines = () => {
    setShowOrbitLines(prev => !prev);
  };
  

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
      fog={{ color: '#000000', near: 50, far: 300 }} // Space fog settings
      >
        <ambientLight intensity={0.2} /> 
        <directionalLight color="white" position={[10, 10, 10]} intensity={1}/>
        
        <Stars radius={100} depth={50} count={1000} factor={.3} />
        <Earth />
        <group>
          {asteroids.map((neo) => {
            return <NEO key={neo.spkid} info={neo} showOrbitLines={showOrbitLines}/>;
          })}
        </group>
        
        <OrbitControls></OrbitControls>
      </Canvas>
      <div className="card">
        <div>Near Earth Objects Orrery</div>
        <input type="button" value="Toggle Orbit Lines" onClick={toggleOrbitLines}/>
      </div>
    </>
  )
}

export default App

