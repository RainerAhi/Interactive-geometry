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
  const perspectiveCamera= useRef()

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
        <p >Basketball, a global phenomenon of athletic prowess and team spirit, transcends mere sport to become a cultural icon. From street courts to grand arenas, it unites fans worldwide in a symphony of athleticism and passion. <br /> <br /> Generating an immersive experience, it's more than a game—it's a vibrant tapestry of skill, strategy, and sheer determination, captivating audiences and inspiring generations.</p>
      </div>
      <Canvas eventSource={ref} className='canvas' >
        <View track={ view1 }>
          <Model position={ [ 0, 0, 0 ] } scale={ 1 } />
          <OrbitControls makeDefault enableZoom={ false } enablePan={ false } enableRotate={ false } />
          <Environment preset='sunset' />
          <ambientLight intensity={ 0.7 } />
          <PerspectiveCamera ref={ perspectiveCamera } makeDefault fov={40} position={[0, 5, 5]} />
        </View>
      </Canvas>
    </div>

    <div className='containertwo' >
    </div>
    </>
    )
}
