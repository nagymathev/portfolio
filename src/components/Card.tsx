export default function Card({ image, title, description, liveLink, githubLink }: any) {
  return (
    <div className="card">
      <div className="img">
        <img src={image} alt="" />
        <div className="links">
          <a href={liveLink} target="_blank">
            Live
          </a>
          <a href={githubLink} target="_blank">
            Github
          </a>
        </div>
      </div>
      <div className="cardText">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
