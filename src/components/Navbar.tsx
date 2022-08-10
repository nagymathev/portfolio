export default function Navbar({ scrollto }: any) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => scrollto.current.scrollTo(0)}>Home</li>
        <li onClick={() => scrollto.current.scrollTo(1)}>About</li>
        <li onClick={() => scrollto.current.scrollTo(2)}>Projects</li>
        <li onClick={() => scrollto.current.scrollTo(3)}>Contact</li>
      </ul>
    </nav>
  );
}
