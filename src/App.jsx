import { Loader } from "@react-three/drei";
import CanvasContainer from "./CanvasContainer";
import Experience from "./Experience";
import { SectionOne } from "./Sections/SectionOne";
import Lenis from "@studio-freight/lenis";

import { useProgress } from "@react-three/drei";
import { Suspense } from "react";
import { SectionTwo } from "./Sections/SectionTwo";
import { SectionThree } from "./Sections/SectionThree";

const LoadingScreen = () => {
  const { progress, active } = useProgress();

  return (
    <div className={`loading-screen ${active ? "" : "loading-screen--hidden"}`}>
      <div className="loading-screen__container">
        <h1 className="loading-screen__title">PORSCHE LANDING PAGE</h1>
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

    return (
      <>
        <main className="main" >
            <LoadingScreen />
            <div  className="experience">
                <Suspense>
                <CanvasContainer />
                </Suspense>
            </div>
            
        </main>
        </>
    )
}

export default App;