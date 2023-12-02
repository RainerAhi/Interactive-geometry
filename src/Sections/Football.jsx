import * as THREE from 'three'
import { useRef, useReducer } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Lightformer } from '@react-three/drei'
import { BallCollider, Physics, RigidBody } from '@react-three/rapier'
import { easing } from 'maath'
import Model from './Model'

export default function Football(props) {
  return (
    <Canvas className='football'  camera={{ position: [0, 125, 126] }}>
        <Environment preset='sunset' />
        <Model scale={ 0.05 } />
    </Canvas>
  )
}