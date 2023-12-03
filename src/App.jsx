import { Loader } from "@react-three/drei";
import CanvasContainer from "./CanvasContainer";
import { SectionOne } from "./Sections/SectionOne";
import Lenis from "@studio-freight/lenis";

import { useProgress } from "@react-three/drei";
import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
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
import { SectionEight } from "./Sections/SectionEight";
import { SpaceContainer } from "./Sections/SpaceContainer";
gsap.registerPlugin(ScrollTrigger);

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">BASKETBALL</h1>
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

  const tl = gsap.timeline()

  useLayoutEffect(() => {

    tl
    .to(".one", { opacity: 0,
    scrollTrigger: {
      trigger: ".three",
      start: "top bottom",
      end: "top top",
      scrub: true,
      immediateRender: false,
    }})

  }, [])

  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = svg.querySelector('path');

    const scroll = () => {
      const startOffset = 4000; // Set the scroll position to start the animation
      const distance = window.scrollY;
      const totalDistance = svg.clientHeight - window.innerHeight;
      const percentage = (distance - startOffset) / totalDistance;

      if (percentage >= 0 && percentage <= 1) {
        const pathLength = path.getTotalLength();
        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength * (1 - percentage)}`;
      }
    };

    scroll();
    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

    return (
      <>
        <main className="main" >
            <LoadingScreen />

              <SectionOne />
              <SectionTwo />
              <SectionThree />
              <SectionFour />
              <SectionFive />
              <SpaceContainer />
              <SectionSix />
              <SectionSeven />
              <SectionEight />
            
        </main>

        <svg
        ref={svgRef}
      width="1000"
      height="2000"
      viewBox="0 0 1000 2000"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="squiggle"
    >
      <path
        d="M-24.5 101C285 315 5.86278 448.291 144.223 631.238C239.404 757.091 559.515 782.846 608.808 617.456C658.101 452.067 497.627 367.073 406.298 426.797C314.968 486.521 263.347 612.858 322.909 865.537C384.086 1125.06 79.3992 1007.94 100 1261.99C144.222 1807.35 819 1325 513 1142.5C152.717 927.625 -45 1916.5 1191.5 1852"
        stroke="#ddc88c"
        stroke-width="30"
        stroke-linejoin="round"
        stroke-linecap="round"
      />
    </svg>
        </>
    )
}

export default App;