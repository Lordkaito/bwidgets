import { Link } from "react-router-dom";
import "../styles/navbar.scss";
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="nav">
      <div className="logo">
        <Link to="/">BWidgets</Link>
      </div>
      <ul>
        <div>
          <Link to="/">Homepage</Link>
        </div>
        <div>
          <Link to="/">Homepage</Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
