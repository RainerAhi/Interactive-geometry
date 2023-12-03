import React from "react";
import CanvasContainer from "../CanvasContainer";

export const SectionOne = () => {
    return (
        <section className="one">
            <div className="nav">
                <div className="left-content">
                    <h1>BASKETBALL</h1>
                </div>
                <div className="right-content">
                    <div className="linksone" >
                      <a href="https://twitter.com/L7XICZ" target="_blank">
                        <i className="fa-solid fa-link"></i>
                      </a>
                    </div>
                    <div className="links">
                            <h1>RAINER AHI</h1>
                    </div>
                </div>
            </div>
            <h1 className="motivation">TWICE THE <span className="cuts">CUTS</span> <br /> DOUBLE THE <span className="glory">GLORY.</span></h1>
        </section>
    )
}