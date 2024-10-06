import { useMemo } from 'react';
import { Line } from '@react-three/drei'; // Line component from drei for easier line rendering

const OrbitLine = ({ color, semiMajorAxis, eccentricity, inclination, argumentOfPeriapsis, longitudeOfAscendingNode, visible }) => {
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

  return visible ? (
    <Line 
      points={points}  // Pass the points to the Line component
      color={color}      // Color of the orbit path
      lineWidth={1}    // Line width
      transparent
      opacity={.25}
    />
  ) : null;
};

export default OrbitLine;
