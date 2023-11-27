import { Loader } from "@react-three/drei";
import CanvasContainer from "./CanvasContainer";
import { SectionOne } from "./Sections/SectionOne";
import Lenis from "@studio-freight/lenis";

import { useProgress } from "@react-three/drei";
import { Suspense, useLayoutEffect } from "react";
import { SectionTwo } from "./Sections/SectionTwo";
import { SectionFive } from "./Sections/SectionFive";
import { SectionFour } from "./Sections/SectionFour";
import { SectionThree } from "./Sections/SectionsThree";
import { SectionSix } from "./Sections/SectionSix";
import { SectionSeven } from "./Sections/SectionSeven";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useThree } from "@react-three/fiber";
import Football from "./Sections/Football";
gsap.registerPlugin(ScrollTrigger);

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">NIKE FOOTBALL</h1>
        <div className="progress__container">
          <div
            className="progress__bar"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

function App() {

  const lenis = new Lenis({
    duration: 1, // speed
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
    direction: "vertical", // vertical, horizontal
    gestureDirection: "vertical", // vertical, horizontal, both
    smooth: true,
    mouseMultiplier: 0.5, // sensibility
    smoothTouch: false, // Mobile
    touchMultiplier: 2, // sensibility on mobile
    infinite: false // Infinite scrolling
  });
  
  //get scroll value
  // Here we can do a throttle like
  // in other projects to reduce the callbacks.
  // lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
  //   console.log(direction);
  // });
  
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  function addAnotherSection() {
    const element = document.createElement("div");
    element.classList.add("section");
    element.innerHTML = "";
    document.body.appendChild(element);
  }
  
  requestAnimationFrame(raf);
  setTimeout(addAnotherSection, 1000);

  // const tl = gsap.timeline()

  // useLayoutEffect(() => {

  //   tl
  //   .to(".footballContainer", { scale: 1.5,
  //   scrollTrigger: {
  //     trigger: ".seven",
  //     start: "top bottom",
  //     end: "top top",
  //     scrub: true,
  //     immediateRender: false,
  //   }})


  // }, [])

    return (
      <>
        <main className="main" >
            <LoadingScreen />
            {/* <div  className="experience">
                <Suspense>
                <Football />
                </Suspense>
            </div> */}

              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SectionSix />
              <SectionSeven />
            
        </main>
        </>
    )
}

export default App;