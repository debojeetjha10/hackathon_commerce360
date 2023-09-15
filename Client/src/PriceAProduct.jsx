import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function PriceAProduct() {
  const navigate = useNavigate();

  const submitPrice = (e) => {
    e.preventDefault();
    navigate("/CreateMetric");
  };

  return (
    <div className="justify-content-center vh-150 m-4">
      <div className={`row w-100`}>
        <div className="col-12 text-primary text-center">
          <h2>Commerce360</h2>
        </div>
        <h4 className="text-primary">Price A Product</h4>
        <hr className="text-dark" />
        <div className="w-75 m-auto p-5 border border-dark rounded">
          <form className="h6">
            <div className="row mb-4">
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form6Example1">
                    PriceList
                  </label>
                  <input
                    type="text"
                    id="form6Example1"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline">
                  <label className="form-label" for="form6Example2">
                    Product
                  </label>
                  <input
                    type="text"
                    id="form6Example2"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example3">
                    Charge type
                  </label>
                  <br />
                  <select
                    className="w-100"
                    style={{ height: "35px" }}
                    id="cars"
                    name="cars"
                  >
                    <option value="Standard Price">Standard Price</option>
                    <option value="License Fee">License Fee</option>
                    <option value="Subscription Fee">Subscription Fee</option>
                    <option value="Installation Fee">Installation Fee</option>
                    <option value="Maintenance Fee">Maintenance Fee</option>
                    <option value="Usage Fee">Usage Fee</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example4">
                    Price Type
                  </label>
                  <select
                    style={{ height: "35px" }}
                    className="w-100"
                    id="cars"
                    name="cars"
                  >
                    <option value="One Time">One Time</option>
                    <option value="Recurring">Recurring</option>
                    <option value="Usage">Usage</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example5">
                    Frequency
                  </label>
                  <select
                    style={{ height: "35px" }}
                    className="w-100"
                    id="cars"
                    name="cars"
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Quarterly">Quarterly</option>
                    <option value="Yearly">Yearly</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example6">
                    Preice Method
                  </label>
                  <select
                    style={{ height: "35px" }}
                    className="w-100"
                    id="cars"
                    name="cars"
                  >
                    <option value="Per Unit">Per Unit</option>
                    <option value="Flat Price">Flat Price</option>
                    <option value="Related Price">Related Price</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example7">
                    Active
                  </label>
                  <select
                    style={{ height: "35px" }}
                    className="w-100"
                    id="cars"
                    name="cars"
                  >
                    <option value="True">True</option>
                    <option value="False">False</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example8">
                    Description
                  </label>
                  <input
                    type="text"
                    id="form6Example8"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example9">
                    Cost
                  </label>
                  <input
                    type="number"
                    id="form6Example9"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example10">
                    Base Price
                  </label>
                  <input
                    type="number"
                    id="form6Example10"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example11">
                    Price UOM
                  </label>
                  <select
                    style={{ height: "35px" }}
                    className="w-100"
                    id="cars"
                    name="cars"
                  >
                    <option value="Each">Each</option>
                    <option value="Hour">Hour</option>
                    <option value="Day">Day</option>
                    <option value="Month">Month</option>
                    <option value="Year">Year</option>
                    <option value="Mb">Mb</option>
                    <option value="Gb">Gb</option>
                    <option value="Tb">Tb</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example12">
                    Min Price
                  </label>
                  <input
                    type="number"
                    id="form6Example12"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example13">
                    Max ADJ %
                  </label>
                  <input
                    type="number"
                    id="form6Example13"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example14">
                    Effective Date
                  </label>
                  <input
                    type="text"
                    id="form6Example14"
                    className="form-control"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example15">
                    Eff Date End
                  </label>
                  <input
                    type="text"
                    id="form6Example15"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example16">
                    Allow Manual Ajustment
                  </label>
                  <select
                    style={{ height: "35px" }}
                    className="w-100"
                    id="cars"
                    name="cars"
                  >
                    <option value="True">True</option>
                    <option value="False">False</option>
                  </select>
                </div>
              </div>
            </div>

            <a className="btn btn-primary btn-block mb-4" onClick={submitPrice}>
              Submit
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PriceAProduct;
