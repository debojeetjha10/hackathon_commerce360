import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  return (
    <div className="navbardiv">

      <div className="navbar navbar-expand-lg navbar-light bg-light navbarus text-center">
        <h1 className="heading"><Link className="text-danger"  style={{textDecoration: 'none'}} to="/home"><b>PROTON</b></Link></h1>
        <br/>
        <h4> - Platform For New Age Commerce</h4>
      </div>
    </div>
  );
}

export default NavBar;
