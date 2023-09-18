import Table from "react-bootstrap/Table";
import "./viewAllproducts.css";

const ProductHeadings = [
  "Product Name",
  "Product Code",
  "Product Type",
  "Product Family",
  "Action"
];
const products = [
  {
    name: "M365 Per User",
    code: "AAA-30428",
    type: "Bundle",
    family: "0365",
  },
  {
    name: "EMS E5",
    code: "AAA-28248",
    type: "Option",
    family: "EMS E5",
  },
  {
    name: "Office 365 E5",
    code: "AAA-11029",
    type: "Option",
    family: "O365 E5",
  },
  {
    name: "Windows E3",
    code: "AAA-22427",
    type: "Standalone",
    family: "Win E3",
  },
  {
    name: "Windows E5 Addon",
    code: "AAA-28173",
    type: "Option",
    family: "Step-up",
  },
  {
    name: "Audio Conference Addon",
    code: "AAA-28241",
    type: "Standalone",
    family: "Audio Conferencing",
  },
  {
    name: "Office 365 E5 w/o Audio Conference",
    code: "AAA-28248",
    type: "Option",
    family: "0365 E5 w/o Audio Conf",
  },
];

function ViewAllProduct() {
  return (
      <div className="full-screen-cropped border rounded border-info p-2">
        <button type="button" class="btn btn-primary">Create a New product</button>
          <h2 className="text-primary text-center">All Products</h2>
      <Table responsive>
        <thead>
          <tr>
            {ProductHeadings.map((key, index) => (
              <th key={index}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key="index" className="p-1rem">
              <td>{product.name}</td>
              <td>{product.code}</td>

              <td>{product.type}</td>
              <td>{product.family}</td>
              <button  type="button" class="btn btn-link" >EDIT/VIEW</button>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ViewAllProduct;
