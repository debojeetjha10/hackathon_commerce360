import { Link } from "react-router-dom";
import "./styles.css";
function LandingPage() {
  return (
    <div className="card-group vh-100">
      <div className="card">
        <div className="card-body p-5">
          <h2 className="text-primary">Product 360</h2>
          <ul className="mt-5">
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="/Mycatalog">View All Catalog</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="">View All Products</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="/createproduct">Create New Product</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="">Modify Existing Product</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="">Create New Product Family</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="">Modify Product Meta Data</Link></h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card-body p-5">
        <h2 className="text-primary">Pricing 360</h2>
          <ul className="mt-5">
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="/AllPricings">View All Pricelists</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="">Create New Pricelists</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="/PriceAProduct">Price a Product</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="">Create Price Rules</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="">Create New Promotion</Link></h4>
            </li>
          </ul>
        </div>
      </div>
      <div className="card">
        <div className="card-body p-5">
        <h2 className="text-primary">Policy 360</h2>
          <ul className="mt-5">
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="/AllPolicies">View All Policies</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="">Modify Existing Policies</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to=""> View All FX Rates</Link></h4>
            </li>
            <li>
              <h4><Link classNameName="text-dark" style={{textDecoration:'none',color:"black"}} to="">Schedule FX Changes</Link></h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
