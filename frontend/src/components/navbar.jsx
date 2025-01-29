import { Link } from "react-router-dom";
import "../css/nav.css";
import img from "../assets/img.jpg"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/home">Resume Builder</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/sample">Sample Resume</Link></li>
        <li><Link to="/templates">Templates</Link></li>
        <li><Link to="/templates">Create Resume</Link></li>
      </ul>
      <div className="profile">
        <Link to="/profile">
          <img src={img} alt="Profile" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
