import React from "react";
import Typed from "react-typed";

function Hero() {
  return (
    <div className="hero-banner">
      <div className="hero-img"></div>
      <div className="typed-banner">
        <h2>
          Let Holidaze help you <span className="txt__bold">find the best</span>
        </h2>
        <h2>
          <Typed
            className="typed-style"
            strings={["Bed and Breakfasts", "Hotels", "Guesthouses"]}
            typeSpeed={30}
            stringsElement={null}
            startDelay={1500}
            backSpeed={40} // backspacing speed
            backDelay={1000} // time before backspacing
            loop={true} // infinite
            showCursor={false} // hide corsor
          ></Typed>
        </h2>
        <h2>
          in <span className="txt__bold">Bergen</span>
        </h2>
      </div>
    </div>
  );
}

export default Hero;
