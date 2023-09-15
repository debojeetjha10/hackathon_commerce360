import "./styles.css";
function LandingPage() {
  return (
    <div className="landingpage">
      <div className="landingpagecontainer">
        <h2>Product 360</h2>
        <ul>
          <li>
            <h4>View All Catalog</h4>
          </li>
          <li>
            <h4>View All Products</h4>
          </li>
          <li>
            <h4>Create New Product</h4>
          </li>
          <li>
            <h4>Modify Existing Product</h4>
          </li>
          <li>
            <h4>Create New Product Family</h4>
          </li>
          <li>
            <h4>Modify Product Meta Data</h4>
          </li>
        </ul>
      </div>
      <div className="landingpagecontainer">
        <h2>Pricing 360</h2>
        <ul>
          <li>
            <h4>View All Pricelists</h4>
          </li>
          <li>
            <h4>Create New Pricelists</h4>
          </li>
          <li>
            <h4>Price a Product</h4>
          </li>
          <li>
            <h4>Create Price Rules</h4>
          </li>
          <li>
            <h4>Create New Promotion</h4>
          </li>
        </ul>
      </div>
      <div className="landingpagecontainer">
        <h2>Policy 360</h2>
        <ul>
          <li>
            <h4>View All Policies</h4>
          </li>
          <li>
            <h4>Modify Existing Policies</h4>
          </li>
          <li>
            <h4> View All FX Rates</h4>
          </li>
          <li>
            <h4>Schedule FX Changes</h4>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LandingPage;
