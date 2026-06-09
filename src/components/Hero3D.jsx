import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

// Flowing pink "silk" — domain-warped fbm turned into bright strands,
// sweeping in from the lower-left and fading out to white on the right.
const fragmentShader = /* glsl */ `
  precision highp float;
  uniform float uTime;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
      mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
      u.y
    );
  }

  float fbm(vec2 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 5; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.09;

    // shear coordinates so the wave flows diagonally up to the right
    vec2 p = uv;
    p.x += uv.y * 0.55;

    // organic flow via domain warping
    float flow = fbm(p * 2.2 + vec2(0.0, t * 1.1));
    vec2 q = vec2(
      fbm(p * 2.0 + vec2(1.7, t)),
      fbm(p * 2.0 + vec2(8.3, t * 0.7))
    );
    float f = fbm(p * 2.6 + q * 1.8 + vec2(t * 0.7, -t * 0.45));

    // turn the field into sharp flowing strands
    float strands = abs(sin(f * 7.0 + (p.x + p.y) * 5.0 - t * 2.2));
    strands = pow(1.0 - strands, 2.4);

    // soft translucent body between the strands
    float sheet = smoothstep(0.25, 0.95, flow);

    // overall presence: strong toward the left/bottom, fading to white at right
    float mask = 1.0 - smoothstep(0.05, 1.15, uv.x + uv.y * 0.18);

    float intensity = clamp(strands * 0.85 + sheet * 0.28, 0.0, 1.0) * mask;

    // pink -> violet gradient
    vec3 pink = vec3(1.0, 0.36, 0.88);   // #FF5CE1
    vec3 violet = vec3(0.47, 0.31, 1.0); // #784EFF
    vec3 col = mix(pink, violet, smoothstep(0.0, 1.0, uv.y + f * 0.35));

    float alpha = clamp(intensity, 0.0, 1.0) * 0.9;
    gl_FragColor = vec4(col, alpha);
  }
`

function SilkWave() {
  const matRef = useRef()
  const { viewport } = useThree()
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), [])

  useFrame((state) => {
    if (matRef.current) matRef.current.uniforms.uTime.value = state.clock.elapsedTime
  })

  return (
    <mesh scale={[viewport.width, viewport.height, 1]}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        ref={matRef}
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
        depthWrite={false}
      />
    </mesh>
  )
}

export default function Hero3D() {
  return (
    <Canvas
      className="!absolute inset-0"
      camera={{ position: [0, 0, 7], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <SilkWave />
    </Canvas>
  )
}
