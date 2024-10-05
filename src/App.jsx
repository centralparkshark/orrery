import { OrbitControls } from '@react-three/drei'
import './App.css'
import NEO from './components/NEO'
import Earth from './components/Earth'
import { useRef, useState, useEffect } from 'react'
import axios from 'axios'

// const URL = 'https://data.nasa.gov/resource/b67r-rgxc.json'

import { Canvas } from '@react-three/fiber'

function App() {
    const [neos, setNeos] = useState([]);
  
    useEffect(() => {
      const fetchNEOs = async () => {
        try {
          const response = await axios.get('https://data.nasa.gov/resource/b67r-rgxc.json');
          setNeos(response.data);
        } catch (error) {
          console.error('Error fetching NEOs:', error);
        }
      };
  
      fetchNEOs();
    }, []);

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
          <NEO></NEO>
          {neos.map((neo) => {
            return <NEO key={neo.object} info={neo}/>;
          })}
        </group>
        
        <OrbitControls></OrbitControls>
      </Canvas>

    </>
  )
}

export default App


// Example Object:
// e: "0.6652319399"
// epoch_tdb: "43773"
// i_deg: "5.947329619"
// moid_au: "0.13492"
// node_deg: "132.2535138"
// object: "D/1978 R1 (Haneda-Campos)"
// object_name: "D/1978 R1 (Haneda-Campos)"
// p_yr: "5.97"
// q_au_1: "1.101417705"
// q_au_2: "5.48"
// ref: "7"
// tp_tdb: "2443790.992"
// w_deg: "240.4622187"