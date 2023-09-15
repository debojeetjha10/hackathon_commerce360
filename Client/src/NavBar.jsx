import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbardiv">
      <div className="navbar navbar-expand-lg navbar-light bg-light navbarus text-center">
        <h1 className="heading"><Link className="text-dark"  style={{textDecoration: 'none'}} to="/home">Commerce 360</Link></h1>
      </div>
    </div>
  );
}

export default NavBar;
