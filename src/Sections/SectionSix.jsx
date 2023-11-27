import { forwardRef, useRef, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import {
  View,
  Preload,
  OrbitControls,
  PerspectiveCamera,
  CameraShake,
  PivotControls,
  Environment,
  Center,
  useTexture
} from '@react-three/drei'
import Model from './Model'

export const SectionSix = () => {

  const view1 = useRef()
  const ref = useRef()

    return (
    <div ref={ref} className='container' >
        <div className='text' >
          <div ref={view1} className='view scale' style={ { height: 300 } } />
          We've tried our best to keep breaking changes to a minimum,
        </div>
      <Canvas eventSource={ref} className='canvas' >
        <View track={ view1 }>
          <Common color="lightblue" />
          <Model />
          <OrbitControls makeDefault />
        </View>
      </Canvas>
    </div>
    )
}

const Common = ({ color }) => (
  <>
    {color && <color attach="background" args={[color]} />}
    <ambientLight intensity={0.5} />
    <pointLight position={[20, 30, 10]} intensity={1} />
    <pointLight position={[-10, -10, -10]} color="blue" />
    <Environment preset="dawn" />
    <PerspectiveCamera makeDefault fov={40} position={[0, 0, 6]} />
  </>
)