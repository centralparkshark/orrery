export default function Planet({position, size, color}) {
    return (
        <mesh position={position}>
          <sphereGeometry args={size}/>
          <meshStandardMaterial color={color}/>
        </mesh>
    )
}