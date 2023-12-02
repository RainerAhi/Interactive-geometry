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
    .to(".view", { width: "100vw", height: "100vh",  borderRadius: 0, position: "fixed", marginLeft: 0,
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
      <div ref={view1} className='view' style={ { height: "35vw", width: "47.5vw" } } />
      <div className='experienceinfo' >
        <p >Nike, Inc. is an American athletic footwear and apparel corporation headquartered near Beaverton, Oregon, United States. <br /> <br /> It is the world's largest supplier of athletic shoes and apparel and a major manufacturer of sports equipment, with revenue in excess of US$46 billion in its fiscal year 2022.</p>
      </div>
      <Canvas eventSource={ref} className='canvas' >
        <View track={ view1 }>
          <Model position={ [ 0, 0, 0 ] } scale={ 1 } />
          <OrbitControls makeDefault enableZoom={ false } />
          <Environment preset='sunset' />
          <ambientLight intensity={ 0.7 } />
          <PerspectiveCamera makeDefault fov={40} position={[0, 15, 0]} />
        </View>
      </Canvas>
    </div>

    <div className='containertwo' >
    </div>
    </>
    )
}
