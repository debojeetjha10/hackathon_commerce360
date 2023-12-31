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
                <h4 className="text-primary">Price A Product</h4>
                <div className="w-100 m-auto p-3 border rounded">
                    <form className="h6">
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">PriceList</label>
                                <select
                                    className="w-100 mt-2"
                                    style={{ height: "35px" }}
                                    id="cars"
                                    name="cars"
                                >
                                    <option value="Standard Price">PriceList-North America</option>
                                    <option value="License Fee">License Fee</option>
                                    <option value="Subscription Fee">Subscription Fee</option>
                                    <option value="Installation Fee">Installation Fee</option>
                                    <option value="Maintenance Fee">Maintenance Fee</option>
                                    <option value="Usage Fee">Usage Fee</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Product Name</label>
                                <input type="text" id="form6Example2" defaultValue="Bundle Confetti" className="form-control" />
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Charge Type</label>
                                <select
                                    className="w-100 mt-2"
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
                        </div>

            <div className="row mb-4">
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
                    Price Method
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
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example9">
                    Cost (USD)
                  </label> 
                  <input
                    type="number"
                    id="form6Example9"
                    className="form-control"
                    defaultValue="150.00"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example10">
                    Base Price (USD)
                  </label>
                  <input
                    type="number"
                    id="form6Example10"
                    className="form-control"
                    defaultValue="165.00"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              
              <div className="col">
                <div className="form-outline mb-4 mt-2">
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
                    Min Price (USD)
                  </label>
                  <input
                    type="number"
                    id="form6Example12"
                    className="form-control"
                    defaultValue="155.00"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example13">
                    Max ADJ %
                  </label>
                  <input
                    type="text"
                    id="form6Example13"
                    className="form-control"
                    defaultValue="10%"
                  />
                </div>
              </div>
            </div>

            <div className="row mb-4">
              
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example14">
                    Effective Start Date
                  </label>
                  <input
                    type="text"
                    id="form6Example14"
                    className="form-control"
                    defaultValue="1-Nov-2023"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4">
                  <label className="form-label" for="form6Example15">
                    Effective Date End
                  </label>
                  <input
                    type="text"
                    id="form6Example15"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col">
                <div className="form-outline mb-4 mt-2">
                <label className="form-label" for="form6Example11">
                    Select Price Metric
                  </label>
                  <select
                    style={{ height: "35px" }}
                    className="w-100"
                    id="cars"
                    name="cars"
                  >
                    <option value="Each">Quantity Metric</option>
                    <option value="Hour">Usage Metric</option>
                    <option value="Day">Custom Metric</option>
                  </select>
                </div>
              </div>
            </div>
        
        <div className = "row mb-4">
            <div className="form-check col">
                <label class="form-check-label active" for="flexCheckDefault">
                    Cost Based Pricing
                </label>
                <input class="form-check-input" type="checkbox" checked value="1" id="flexCheckDefault"/>
            </div>
            <div className="form-check col">
                <label className="form-label" for="form6Example14">
                        Margin % 
                    </label>
                    <input
                        type="text"
                        id="form6Example14"
                        className="form-control w-50"
                        defaultValue="10%"
                    />
                </div>
        </div>

            <div className="row mb-4">
            <div class="form-check col">
                <label class="form-check-label active" for="flexCheckDefault">
                    Allow Manual Ajdustment
                </label>
                <input class="form-check-input" type="checkbox" checked value="1" id="flexCheckDefault"/>
                </div>
              <div class="form-check col">
                <label class="form-check-label active" for="flexCheckDefault">
                    Active
                </label>
                <input class="form-check-input" type="checkbox" checked value="1" id="flexCheckDefault"/>
                </div>
            </div>

            <a className="btn btn-primary btn-block mb-4" onClick={submitPrice}>
              Proceed To Price Metrics
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PriceAProduct;
