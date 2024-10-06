export default function Earth() {
    return (
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[5, 32, 32]}/>
            <meshStandardMaterial color="#1281e6" roughness={.5}/>
          </mesh>
    )
}