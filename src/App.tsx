import "./App.scss";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import video from "./assets/img/lamp.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Card from "./components/Card";

import solarSys from "./assets/img/particle-solar-system.png";
import tenziesImg from "./assets/img/tenzies-game.png";
import bookLogger from "./assets/img/book-logger-app.png";

const data = [
  {
    image: solarSys,
    title: "Solar System made of Particles",
    description: "I used ThreeJS to built a solar system simulation where i represent the meshes with particles",
    liveLink: "https://particle-system-peach.vercel.app/",
    githubLink: "https://github.com/nagymathev/threejs-particle-solar-system",
  },
  {
    image: tenziesImg,
    title: "Tenzies Game",
    description: "This project taught me a lot about state in React",
    liveLink: "https://react-tenzies-game-eight.vercel.app/",
    githubLink: "https://github.com/nagymathev/react-tenzies-game",
  },
  {
    image: bookLogger,
    title: "A book logger app",
    description:
      "This is was my first react project, it saves user input from a form to state and displays it, and can delete items too",
    liveLink: "https://book-logger-app.vercel.app/",
    githubLink: "https://github.com/nagymathev/book-logger-app",
  },
];

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
            <div className="links">
              <a href="https://github.com/nagymathev" target="_blank">
                <FontAwesomeIcon icon={faGithub} style={{ fontSize: "1.5em" }} />
              </a>
              <a href="https://www.linkedin.com/in/viktor-nagymathe-2a931a221/" target="_blank">
                <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: "1.5em" }} />
              </a>
            </div>
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
                I've been playing video games since I was little, and I thought I enjoyed it, but I realized that using
                my creativity and building experiences from the ground up on the web available for everyone is actually
                the thing I want to pursue. I enjoy solving complex problems while learning a lot.
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
                <li>Git</li>
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
          factor={2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          <div className="projects">
            <h1>PROJECTS</h1>
            <div className="grid">
              {data.map((d) => (
                <Card
                  image={d.image}
                  title={d.title}
                  description={d.description}
                  liveLink={d.liveLink}
                  githubLink={d.githubLink}
                />
              ))}
            </div>
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
