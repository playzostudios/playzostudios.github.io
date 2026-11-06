import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link to="/home" className="brand">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Playzo logo" />
          <span>Playzo</span>
        </Link>
        <nav className="nav">
          <NavLink to="/home">Home</NavLink>
          <Link to="/home#platforms">Platforms</Link>
          <Link to="/home#contact">Contact</Link>
          <NavLink to="/privacy-policy">Privacy Policy</NavLink>
        </nav>
      </div>
    </header>
  );
}
