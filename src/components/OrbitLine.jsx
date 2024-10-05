// import { Line } from "@react-three/drei";
// import * as THREE from 'three'

// function rotatePoint(point, angle, axis) {
//     const vector = new THREE.Vector3(...point);
//     const quaternion = new THREE.Quaternion();
//     quaternion.setFromAxisAngle(axis, angle); // Rotate around the axis by angle
//     vector.applyQuaternion(quaternion); // Apply the rotation to the vector
//     return [vector.x, vector.y, vector.z];
// }

// export default function OrbitLine({pointsRef}) {
//     const a = 1; // semi - major
//     const e = 1 / Math.sqrt(2) // eccentricity
//     const b = a * Math.sqrt(1 - e ** 2) // semi minor
//     const c = e * a; // distance from center to focus

//     // Generate points for the ellipse
//     const points = []
//     const u_values = Array.from({ length: 80 }, (_, i) => -Math.PI + (2 * Math.PI * i) / 80) // Array of 80 angles

//     // Axis definitions for rotations
//     const yAxis = new THREE.Vector3(0, 1, 0); // y-axis for pitch
//     const zAxis = new THREE.Vector3(0, 0, 1); // z-axis for yaw
//     const xAxis = new THREE.Vector3(1, 0, 0); // x-axis for roll
        
//     u_values.forEach(u => {
//     let x = a * Math.cos(u) - c
//     let y = b * Math.sin(u)
//     let z = 0;
    
//      // Apply Pitch rotation (around the y-axis)
//      [x, y, z] = rotatePoint([x, y, z], Math.PI / 5, yAxis);

//      // Apply Yaw rotation (around the z-axis)
//      [x, y, z] = rotatePoint([x, y, z], Math.PI / 4, zAxis);
 
//      // Apply Roll rotation (around the x-axis)
//      [x, y, z] = rotatePoint([x, y, z], Math.PI / 4, xAxis);
 
//      // Push the rotated points into the array
//      points.push(new THREE.Vector3(x, y, z));
//    });

//    pointsRef.current = points

//     return (
//         <Line points={points} color="black" lineWidth={2}/>   
//     )
// }