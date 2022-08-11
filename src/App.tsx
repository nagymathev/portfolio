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
        <ParallaxLayer offset={1} speed={2} factor={1.5} style={{ backgroundColor: "#dd3f31" }} />

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
                I’m passionate about all things Programming. I write clean code and I genuinely love to learn. Currently
                looking for the right opportunity to work in an environment that will help me progress in my skills.
              </p>
              <p>
                I've been coding actively for 2 years now. And found my place as a Front-End developer. Being able to
                create visually stunning experiences for the users without them having to download anything is
                incredible. I've been coding here and there always in my life but never really stuck with something
                until now.
              </p>
              <p>
                I've been playing video games since i was little, and i thought i enjoyed it, but i realized that using
                my creativity and building experiences from the ground up on the web available for everyone is actually
                the thing i want to pursue. I enjoy solving complex problems while learning a lot. I've done lot of
                HackerRank challenges.
              </p>
            </div>
            <h1 className="skillsH">SKILLS</h1>
            <div className="skills">
              <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>SASS</li>
                <li>Python</li>
                <li>C#</li>
                <li>Unity</li>
                <li>Firebase</li>
                <li>NodeJS</li>
              </ul>
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
