import { OrbitControls } from '@react-three/drei'
import './App.css'
import Planet from './components/Planet'
import { useRef } from 'react'

// const URL = 'https://data.nasa.gov/resource/b67r-rgxc.json'

import { Canvas } from '@react-three/fiber'

function App() {
  const pointsRef = useRef([])

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.2} /> 
        <directionalLight color="white" position={[10, 5, 5]} intensity={1}/>
        {/* <group position={[0, -1, 0]}>
          <Planet position={[3, 0, 0]} size={[1, 32, 32]} color={"red"}/>
          <Planet position={[-3, 0, 0]} size={[1, 32, 32]} color={"hotpink"}/>
        </group> */}
        <Planet pointsRef={pointsRef} position={[-3, 0, 0]} size={[1, 32, 32]} color={"hotpink"}/>
        <OrbitControls></OrbitControls>
      </Canvas>

    </>
  )
}

export default App
