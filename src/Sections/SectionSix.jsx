import { forwardRef, useLayoutEffect, useRef, useState } from 'react'
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
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

export const SectionSix = () => {

  const view1 = useRef()
  const ref = useRef()

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    tl
    .to(".view", { width: "100vw", height: "100vh",   transform: "translateY(0)", borderRadius: 0,
    scrollTrigger: {
      trigger: ".containertwo",
      start: "top bottom",
      end: "top top",
      scrub: true,
      immediateRender: false,
    }})


  }, [])

    return (
      <>
    <div ref={ref} className='container' >
      <div ref={view1} className='view' style={ { height: "40vw", width: "40vw" } } />
      <Canvas eventSource={ref} className='canvas' >
        <View track={ view1 }>
          <Model />
          <OrbitControls makeDefault enableZoom={ false } />
          <Environment preset='sunset' />
          <PerspectiveCamera makeDefault fov={40} position={[0, 7, 13]} />
        </View>
      </Canvas>
    </div>

    <div className='containertwo' >
      <h1>Container two</h1>
    </div>
    </>
    )
}
