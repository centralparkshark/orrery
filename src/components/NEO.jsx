import OrbitLine from "./OrbitLine";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function NEO({ info }) {
  const neoRef = useRef(); // Reference to the NEO object for animating it
  // console.log(info)
  if (!info) {
    console.error("NEO not found.")
    return null;
  }

  const { a, e, i, w, om, n } = info;

  const AU_SCALE = 50 // 1 AU in meters

  // Extract and convert the needed properties
  const semiMajorAxis = parseFloat(a) * AU_SCALE; // Convert to meters
  const eccentricity = parseFloat(e);
  const inclination = parseFloat(i) * (Math.PI / 180); // Convert to radians
  const argumentOfPeriapsis = parseFloat(w) * (Math.PI / 180); // Convert to radians
  const longitudeOfAscendingNode = parseFloat(om) * (Math.PI / 180); // Convert to radians

  const meanMotion = parseFloat(n) * (Math.PI / 180) * 10; // Convert mean motion to radians per second

  let theta = useRef(0)

  useFrame((state, delta) => {
    theta.current += meanMotion * delta; // Change the angle slightly each frame to create animation

    // Calculate the current radius (r) using the orbital equation
    const r = (semiMajorAxis * (1 - eccentricity ** 2)) / (1 + eccentricity * Math.cos(theta.current));

    // Polar coordinates before rotation
    let x_prime = r * Math.cos(theta.current);
    let y_prime = r * Math.sin(theta.current);

    // Rotate by argument of periapsis (w)
    const x_double_prime = x_prime * Math.cos(argumentOfPeriapsis) - y_prime * Math.sin(argumentOfPeriapsis);
    const y_double_prime = x_prime * Math.sin(argumentOfPeriapsis) + y_prime * Math.cos(argumentOfPeriapsis);

    // Apply inclination (i) rotation
    const z_double_prime = y_double_prime * Math.sin(inclination);
    const y_triple_prime = y_double_prime * Math.cos(inclination);

    // Apply rotation by longitude of ascending node (om)
    const x = x_double_prime * Math.cos(longitudeOfAscendingNode) - y_triple_prime * Math.sin(longitudeOfAscendingNode);
    const y = x_double_prime * Math.sin(longitudeOfAscendingNode) + y_triple_prime * Math.cos(longitudeOfAscendingNode);
    const z = z_double_prime;

    // Update the NEO position in 3D space
    neoRef.current.position.set(x, y, z);
  });

  return (
    <>
      <mesh ref={neoRef}>
        <sphereGeometry args={[.5, 32, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <OrbitLine
        semiMajorAxis={semiMajorAxis}
        eccentricity={eccentricity}
        inclination={inclination}
        argumentOfPeriapsis={argumentOfPeriapsis}
        longitudeOfAscendingNode={longitudeOfAscendingNode}
      />
    </>
  )
}