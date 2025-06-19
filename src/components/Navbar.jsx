import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">dhub</span>
        <a href="/" className="link">Home</a>
        <a href="/about" className="link">About</a>
      </div>
      <div className="nav-right">
        <button className="button primary">Log In</button>
        <button className="button">Sign Up</button>
      </div>
    </nav>
  );
}
