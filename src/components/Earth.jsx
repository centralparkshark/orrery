export default function Earth() {
    return (
          <mesh position={[0, 0, 0]}>
            <sphereGeometry args={[1, 32, 32]}/>
            <meshStandardMaterial color="blue"/>
          </mesh>
    )
}