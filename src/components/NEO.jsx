export default function NEO({info}) {
  // console.log(info)
  if (!info) {
    console.error("NEO not found.")
    return null;
  }

  const AU_TO_METERS = 1.496e+11; // 1 AU in meters

   // Extract and convert the needed properties
   const semiMajorAxis = parseFloat(info.a1_au_d_2) * AU_TO_METERS; // Convert to meters
   const eccentricity = parseFloat(info.e);
   const inclination = parseFloat(info.i_deg) * (Math.PI / 180); // Convert to radians
   const argumentOfPeriapsis = parseFloat(info.w_deg) * (Math.PI / 180); // Convert to radians
   const longitudeOfAscendingNode = parseFloat(info.node_deg) * (Math.PI / 180); // Convert to radians
 
   // Calculate the radius at periapsis
   const periapsis = semiMajorAxis * (1 - eccentricity); // Distance at periapsis
 
   // Calculate Cartesian coordinates for periapsis
   const x = periapsis * (Math.cos(longitudeOfAscendingNode) * Math.cos(argumentOfPeriapsis) - Math.sin(longitudeOfAscendingNode) * Math.sin(argumentOfPeriapsis) * Math.cos(inclination));
   const y = periapsis * (Math.sin(longitudeOfAscendingNode) * Math.cos(argumentOfPeriapsis) + Math.cos(longitudeOfAscendingNode) * Math.sin(argumentOfPeriapsis) * Math.cos(inclination));
   const z = periapsis * (Math.sin(argumentOfPeriapsis) * Math.sin(inclination));
 
  
  return (
          <mesh position={[x, y, z]}>
            <sphereGeometry args={[.5, 32, 32]}/>
            <meshStandardMaterial color="white"/>
          </mesh>
    )
}