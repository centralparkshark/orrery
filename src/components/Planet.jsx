import { useRef, useState } from "react"
import OrbitLine from "./OrbitLine"
import { useFrame } from "@react-three/fiber"

export default function Planet({position, size, color, pointsRef}) {
  const planetRef = useRef()
  const [t, setT] = useState(0)
  
  useFrame((state, delta) => {
    if (!pointsRef.current || pointsRef.current.length === 0) return; // Check for valid points
    
    // Update the 't' value based on delta time
    setT(prev => (prev + delta * 0.5) % 1);
    
    // Find the point index based on 't'
    const pointIndex = Math.floor(t * pointsRef.current.length);
    
    // Safeguard against out-of-bounds access
    const point = pointsRef.current[pointIndex] || new THREE.Vector3(0, 0, 0);

    // Update planet position
    if (planetRef.current) {
      planetRef.current.position.set(point.x, point.y, point.z);
    }
  });
  
  return (
        <>
          <mesh position={position} ref={planetRef}>
            <sphereGeometry args={size}/>
            <meshStandardMaterial color={color}/>
          </mesh>
          <OrbitLine pointsRef={pointsRef}></OrbitLine>
        </>
    )
}