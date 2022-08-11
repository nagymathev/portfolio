export default function Card({ image, title, description }: any) {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}
