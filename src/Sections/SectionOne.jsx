import React from "react";

export const SectionOne = () => {
    return (
        <section className="one" >
            <div className="nav" >
                <h1>PORSCHE LANDING PAGE</h1>
                <a href="https://twitter.com/L7XICZ" target="_blank" ><h1>RAINER AHI <i class="fa-solid fa-link"></i> </h1></a>
            </div>
            <div className="onemain" >
            <div class="headline-container">
                <div id="text-behind">PORSCHE<br />911 CARRERA</div>
                <div id="text-behind-blur">PORSCHE<br />911 CARRERA</div>
                <div id="text-front">PORSCHE<br />911 CARRERA</div>
            </div>
            </div>
            <div className="oneinfo">
                <div className="infobig" >
                    <div>
                        <h1 className="desc" >331kW/450 PS</h1>
                        <p className="descp" >Power(kW)/Power(PS)</p>
                    </div>
                    <div>
                        <h1 className="desc" >3,6s</h1>
                        <p className="descp" >Acceleration 0 - 100 km/h</p>
                    </div>
                    <div>
                        <h1 className="desc" >306 km/h</h1>
                        <p className="descp" >Top speed</p>
                    </div>
                </div>
                <div className="info" >
                    <h1>Discover Offers</h1>
                    <div className="buybutton" >
                        <a href="https://www.porsche.com/international/models/911/911-models/carrera-4s/" target="_blank" >
                           <i class="fa-solid fa-arrow-right fa-xl" style={{color: "#f8a601"}}></i>
                       </a>
                    </div>
                </div>
            </div>
        </section>
    )
}