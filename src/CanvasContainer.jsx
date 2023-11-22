import * as THREE from 'three'
import { useRef, useReducer } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { easing } from 'maath'

export default function CanvasContainer(props) {
  return (
    <Canvas flat shadows camera={{ position: [0, 0, 30], fov: 17.5, near: 10, far: 40 }}>
      <color attach="background" args={['#141622']} />
      <Physics /*debug*/ timeStep="vary" gravity={[0, 0, 0]}>
        <Pointer />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
        <Sphere />
      </Physics>
      <Environment resolution={256}>
        <group rotation={[-Math.PI / 3, 0, 1]}>
          <Lightformer form="circle" intensity={100} rotation-x={Math.PI / 2} position={[10, 5, -9]} scale={2} />
          <Lightformer form="ring" color="#4060ff" intensity={80} onUpdate={(self) => self.lookAt(0, 0, 0)} position={[10, 10, 0]} scale={10} />
        </group>
      </Environment>
    </Canvas>
  )
}

function Sphere({ position, children, vec = new THREE.Vector3(), scale, r = THREE.MathUtils.randFloatSpread, }) {
  const api = useRef()
  const ref = useRef()
  const pos = position || [r(10), r(10), r(10)]
  useFrame((state, delta) => {
    delta = Math.min(0.1, delta)
    api.current?.applyImpulse(vec.copy(api.current.translation()).negate().multiplyScalar(0.2))
    easing.dampC(ref.current.material.color, '#6693F5', 0.2, delta)
  })
  return (
    <RigidBody linearDamping={4} angularDamping={1} friction={0.1} position={pos} ref={api} colliders={false}>
      <BallCollider args={[1]} />
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color="#444" roughness={0.1} metalness={0.5} transparent={false} opacity={1} />
      </mesh>
    </RigidBody>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ mouse, viewport }) => ref.current?.setNextKinematicTranslation(vec.set((mouse.x * viewport.width) / 2, (mouse.y * viewport.height) / 2, 0)))
  return (
    <RigidBody position={[0, 0, 0]} type="kinematicPosition" colliders={false} ref={ref}>
      <BallCollider args={[1]} />
    </RigidBody>
  )
}