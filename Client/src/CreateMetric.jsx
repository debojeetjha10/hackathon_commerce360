import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CreateMetric() {

    const navigate = useNavigate();

    const submitMetric = (e) => {
        e.preventDefault()
        navigate('/TaxAndBilling')
    }

    const backToPriceAProduct = (e) => {
        e.preventDefault()
        navigate('/PriceAProduct')
    }

    return (
        <>
        <div className="justify-content-center vh-100 m-4">
            <div className={`row w-100`}>
                <div className="w-100 m-auto p-3 border rounded">
                    <form className="h6">
                    <h5 className="text-primary mb-3">Price Metric for <span className="text-dark">Quantity</span> </h5><br/>
                        <div className="row">
                            <div className="col">
                                <label className="form-label" for="form6Example3">From</label><br/>
                                <input
                                    type="number"
                                    id="form6Example8"
                                    className="form-control"
                                    defaultValue="0"
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="form6Example3">To</label><br/>
                                <input
                                    type="number"
                                    id="form6Example8"
                                    className="form-control"
                                    defaultValue="100"
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="form6Example3">Unit Price/Discount %</label><br/>
                                <input
                                    type="text"
                                    id="form6Example8"
                                    className="form-control"
                                    defaultValue="0%"
                                />
                            </div>
                        
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="form-label" for="form6Example3">From</label><br/>
                                <input
                                    type="number"
                                    id="form6Example8"
                                    className="form-control"
                                    defaultValue="101"
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="form6Example3">To</label><br/>
                                <input
                                    type="number"
                                    id="form6Example8"
                                    className="form-control"
                                    defaultValue="1000"

                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="form6Example3">Unit Price/Discount %</label><br/>
                                <input
                                    type="text"
                                    id="form6Example8"
                                    className="form-control"
                                    defaultValue="10%"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="form-label" for="form6Example3">From</label><br/>
                                <input
                                    type="number"
                                    id="form6Example8"
                                    className="form-control"
                                    defaultValue="1001"
                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="form6Example3">To</label><br/>
                                <input
                                    type="number"
                                    id="form6Example8"
                                    className="form-control"
                                    defaultValue="10000"

                                />
                            </div>
                            <div className="col">
                                <label className="form-label" for="form6Example3">Unit Price/Discount %</label><br/>
                                <input
                                    type="text"
                                    id="form6Example8"
                                    className="form-control"
                                    defaultValue="20%"
                                />
                            </div>
                        </div>


                        <div className="row">

                        <h5 className="text-primary mt-5 mb-5">Channels and Audience</h5>

                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Channels</label><br/>
                                
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label class="form-check-label" for="inlineCheckbox1">CSP</label>
                                    <input class="form-check-input" checked type="checkbox" id="inlineCheckbox1" value="option1" />
                                    <label class="form-check-label" for="inlineCheckbox1">VL</label>

                            </div>
                        </div>

                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Audience</label><br/>
                                <input class="form-check-input"checked type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="form-check-label" for="inlineCheckbox1">Commercial</label>
                                <input class="form-check-input" checked type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="form-check-label" for="inlineCheckbox1">GOV</label>
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="form-check-label" for="inlineCheckbox1">EDU</label>
                                <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1" />
                                <label class="form-check-label" for="inlineCheckbox1">CHARITY</label>
                            </div>
                        </div>

                        <h5 className="text-primary mt-5 mb-5">Price Defaults</h5>

                        <div className="row">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Default Quanitity</label>
                                <input type="text" id="form6Example2"  defaultValue="1" className="form-control"/>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Default Selling Term</label>
                                <input type="text" id="form6Example2" className="form-control"/>
                            </div>
                        </div>

                        
                        </div>

                        <div className="row mt-5">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Min Usage Quantity</label>
                                <input type="text" id="form6Example2" className="form-control"/>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Auto Renew</label>
                                <input type="text" id="form6Example2" defaultValue="Yes" className="form-control"/>
                            </div>
                        </div>
                        </div>
                        </div>

                        <div className="row mt-3">
                            <div className="col">
                                <div className="form-outline mb-4">
                                <a className="btn btn-primary btn-block mb-4" onClick={submitMetric}>Proceed To Tax and Finance</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline mb-4">
                                <a className="btn btn-dark btn-block mb-4" onClick={backToPriceAProduct}>Back</a>
                                </div>
                            </div>
                        </div>
                    <div/>
                    </form>
                </div>
            </div>
        </div>
    </>
    )
}

export default CreateMetric