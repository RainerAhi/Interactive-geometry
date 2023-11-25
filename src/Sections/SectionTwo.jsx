import React from "react";
import CanvasContainer from "../CanvasContainer";

export const SectionTwo = () => {
    return (
      <section className="two" >
        <div className="border" />
        <div className="info" >
          <h1>Scroll to explore the website</h1>
          <h1>+</h1>
          <h1>Innovative products & experiences</h1>
        </div>
        <div className="onemain" >
          <CanvasContainer />
        </div>
      </section>
    )
}