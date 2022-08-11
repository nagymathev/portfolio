import "./App.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import video from "./assets/img/lamp.mp4";

function App() {
  const ref = useRef(null);

  return (
    <div className="App">
      <Navbar scrollto={ref} />
      <Parallax pages={4} style={{ top: "0", left: "0" }} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
        >
          <div className="hero">
            <h1>
              Hi, My name is <span>Viktor Nagymathe</span>
            </h1>
            <p>I'm a Self-Taught, Front-End developer</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          // offset={0}
          speed={1}
          sticky={{ start: 0, end: 3 }}
          style={{ position: "fixed", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "-1" }}
        >
          <video autoPlay muted loop className="video">
            <source src={video} type="video/mp4" />
          </video>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: "#dd3f31" }} />

        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className="about">
            <h1>ABOUT ME</h1>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro ad accusamus ipsa placeat minima
                amet enim quam. Ut perspiciatis explicabo quos blanditiis ipsa, officiis eos adipisci numquam quas,
                possimus, veniam quibusdam! Rem aspernatur, repudiandae ut, magnam ad quidem reprehenderit distinctio
                accusamus vero ea laborum aliquid ipsam. Impedit, molestias voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro ad accusamus ipsa placeat minima
                amet enim quam. Ut perspiciatis explicabo quos blanditiis ipsa, officiis eos adipisci numquam quas,
                possimus, veniam quibusdam! Rem aspernatur, repudiandae ut, magnam ad quidem reprehenderit distinctio
                accusamus vero ea laborum aliquid ipsam. Impedit, molestias voluptatibus.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo porro ad accusamus ipsa placeat minima
                amet enim quam. Ut perspiciatis explicabo quos blanditiis ipsa, officiis eos adipisci numquam quas,
                possimus, veniam quibusdam! Rem aspernatur, repudiandae ut, magnam ad quidem reprehenderit distinctio
                accusamus vero ea laborum aliquid ipsam. Impedit, molestias voluptatibus.
              </p>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className="projects">
            <h1>PROJECTS</h1>
            <div className="grid"></div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2} style={{ backgroundColor: "#dd3f31" }} />

        <ParallaxLayer
          offset={3}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className="contact">
            <h1>CONTACT ME</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
