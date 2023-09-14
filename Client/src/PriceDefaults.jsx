import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function PriceDefault(){

    const navigate = useNavigate();

    const submit = (e) =>{
        e.preventDefault()
        navigate('/TaxAndBilling')
    }

    const backToChannelsAndAudience = (e) => {
        e.preventDefault()
        navigate('/ChannelsAndAudience')
    }

    return (
        <div className="justify-content-center vh-100 m-4">
            <div className={`row w-100`}>
                <div className="col-12 text-primary text-center"><h2>Commerce360</h2></div>
                <h4 className="text-primary">Price Defaults</h4>
                <hr className="text-dark"/>
                <div className="w-75 m-auto p-5 border border-dark rounded mt-5">
                    <form className="h6">
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Default Quanitity</label>
                                <input type="text" id="form6Example2" className="form-control"/>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Default Selling Term</label>
                                <input type="text" id="form6Example2" className="form-control"/>
                            </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Auto Renew</label>
                                <input type="text" id="form6Example2" className="form-control"/>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Min Usage Quantity</label>
                                <input type="text" id="form6Example2" className="form-control"/>
                            </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                                <div className="form-outline mb-4">
                                <a className="btn btn-primary btn-block mb-4" onClick={submit}>Submit</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline mb-4">
                                <a className="btn btn-dark btn-block mb-4" onClick={backToChannelsAndAudience}>Back</a>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default PriceDefault