import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

function MyCatalog() {
  const Catalogs_list = [
    "CRM",
    "DynamicERP",
    "DynamicNAV",
    "MineCraft",
    "MixedReality",
  ];
  const [selectedCatalog, setSelectedCatalog] = useState();
  const [tableData, setTableData] = useState([]);

  const Catalogs = Catalogs_list.map((catalog) => {
    return <li>{catalog}</li>;
  });

  const populateData = (e) => {
    e.preventDefault();
    var value = e.target.textContent;
    setSelectedCatalog(value);
    console.log("fetch data for", value);

    axios
      .post("http://localhost:3001/catalogData", { value })
      .then((tableData) => {
        console.log(tableData.data[0].attributes);
        setTableData(tableData.data[0].attributes);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="justify-content-center vh-100 m-4">
      <div className="row w-100">
        <div className="col-12 text-primary text-center">
          <h2>Commerce360</h2>
        </div>
        <h4 className="text-primary">View All Catalogs</h4>
        <hr className="text-dark" />
        <div className="col-lg-2 col-3" style={{ borderRight: "1px solid" }}>
          <h5>All Catalogs</h5>
          <ul>
            <Link value={Catalogs} onClick={(e) => populateData(e)}>
              {Catalogs}
            </Link>
          </ul>
        </div>

        <div className="col-8">
          <div className="text-left">
            <h3>
              Selected Catalog -{" "}
              <small className="text-primary">{selectedCatalog}</small>
            </h3>
          </div>
          <div className="w-100 vh-50 display-flex justify-content-center align-items-center">
            <table className="w-100 p-3 m-3 h-4 table">
              <thead>
                <tr>
                  <th>PRODUCT</th>
                  <th>PRODUCT CODE</th>
                  <th>CHANNEL</th>
                  <th>ACTIVE</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((data) => {
                  return (
                    <tr>
                      <td>{data.product}</td>
                      <td>{data.productCode}</td>
                      <td>{data.productactive}</td>
                      <td>{data.productchannel}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyCatalog;
