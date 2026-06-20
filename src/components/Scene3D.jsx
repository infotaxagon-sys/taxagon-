import { Canvas } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'

function Orb({ position, scale, color, speed, distort = 0.4 }) {
  return (
    <Float speed={speed} rotationIntensity={0.7} floatIntensity={1.4}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 6]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.6}
          roughness={0.12}
          metalness={0.25}
          transparent
          opacity={0.6}
        />
      </mesh>
    </Float>
  )
}

/** Subtle floating "glass" orbs — a calm Three.js backdrop for inner pages. */
export default function Scene3D() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 7], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.85} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-6, -2, 4]} intensity={55} color="#FF5CE1" />
      <pointLight position={[6, 3, -2]} intensity={48} color="#784EFF" />
      <Orb position={[3.4, 0.6, -1]} scale={1.4} color="#784EFF" speed={1.3} />
      <Orb position={[-3.6, -0.7, 0]} scale={0.95} color="#FF5CE1" speed={1.8} distort={0.5} />
      <Orb position={[-1.4, 1.9, -2.5]} scale={0.55} color="#5622FF" speed={2.3} distort={0.3} />
    </Canvas>
  )
}
