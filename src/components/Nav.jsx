import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <nav className="navbar-container">
      <Link to="/" className="JHill"><div>JH</div></Link>
      <div className="navbar">
        <NavLink to="/" className="nav-link" activeclasscame="active"><span className="hover-underline-animation"> Home </span></NavLink>
        <NavLink to="/about" className="nav-link" activeclasscame="active"><span className="hover-underline-animation"> About </span></NavLink>
        <NavLink to="/experience" className="nav-link" activeclasscame="active"><span className="hover-underline-animation"> Experience </span></NavLink>
      </div>
    </nav>
  );
}
