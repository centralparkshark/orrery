import './App.css'
import Planet from './components/Planet'

// const URL = 'https://data.nasa.gov/resource/b67r-rgxc.json'

import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <>
      <Canvas>
        <ambientLight intensity={0.4} />
        <directionalLight color="white" position={[10, 5, 5]} />
        <Planet position={[0, 0, 0]} size={[2, 32, 32]} color={"red"}/>
      </Canvas>
    </>
  )
}

export default App
