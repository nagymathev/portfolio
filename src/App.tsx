import "./App.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import { useRef } from "react";

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
            <h1>Hi, I'm Viktor Nagymathe</h1>
            <p>A self-taught frontend web developer, who enjoys a great UI</p>
          </div>
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
            <h1>About me</h1>
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
            <h1>Projects</h1>
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
            <h1>Contact</h1>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
