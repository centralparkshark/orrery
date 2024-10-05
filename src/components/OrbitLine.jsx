// export default function OrbitLine({radius, e}) {

//       // Create the orbit path
//     const points = 100; // Number of points to represent the orbit
//     const orbitPoints = new Float32Array(points * 3);
//     for (let i = 0; i < points; i++) {
//         const angle = (i / points) * Math.PI * 2; // Full circle
//         const r = radius * (1 - e * Math.cos(angle)); // Radius based on eccentricity
//         orbitPoints[i * 3] = r * Math.cos(angle); // x position
//         orbitPoints[i * 3 + 1] = r * Math.sin(angle) * Math.sin(i); // y position based on inclination
//         orbitPoints[i * 3 + 2] = r * Math.sin(angle); // z position
//     }

//     return (
//         <Line points={orbitPoints} color="black" lineWidth={2}/>   
//     )
// }

import { useMemo } from 'react';
import { Line } from '@react-three/drei'; // Line component from drei for easier line rendering

const OrbitLine = ({ semiMajorAxis, eccentricity, inclination, argumentOfPeriapsis, longitudeOfAscendingNode }) => {
  // Memoize the points to avoid recalculating on every render
  const points = useMemo(() => {
    const numPoints = 100; // Number of points to calculate
    const calculatedPoints = [];
    for (let i = 0; i <= numPoints; i++) {
      const theta = (i / numPoints) * 2 * Math.PI; // Angle parameter

      // Calculate radius using the orbital equation
      const radius = (semiMajorAxis * (1 - eccentricity ** 2)) / (1 + eccentricity * Math.cos(theta));

      // Calculate x, y, z using the orbital parameters
      const x = radius * (Math.cos(longitudeOfAscendingNode) * Math.cos(argumentOfPeriapsis + theta) - Math.sin(longitudeOfAscendingNode) * Math.sin(argumentOfPeriapsis + theta) * Math.cos(inclination));
      const y = radius * (Math.sin(longitudeOfAscendingNode) * Math.cos(argumentOfPeriapsis + theta) + Math.cos(longitudeOfAscendingNode) * Math.sin(argumentOfPeriapsis + theta) * Math.cos(inclination));
      const z = radius * (Math.sin(argumentOfPeriapsis + theta) * Math.sin(inclination));

      calculatedPoints.push([x, y, z]);
    }
    return calculatedPoints;
  }, [semiMajorAxis, eccentricity, inclination, argumentOfPeriapsis, longitudeOfAscendingNode]);

  return (
    <Line 
      points={points}  // Pass the points to the Line component
      color="black"      // Color of the orbit path
      lineWidth={1}    // Line width
      transparent
      opacity={.25}
    />
  );
};

export default OrbitLine;
