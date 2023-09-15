import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function CreateMetric() {

    const navigate = useNavigate();

    const submitMetric = (e) => {
        e.preventDefault()
        navigate('/ChannelsAndAudience')
    }

    const backToPriceAProduct = (e) => {
        e.preventDefault()
        navigate('/PriceAProduct')
    }

    return (
        <div className="justify-content-center vh-100 m-4">
            <div className={`row w-100`}>
                <h4 className="text-primary">Create Price Metric</h4>
                <hr className="text-dark"/>
                <div className="w-75 m-auto p-5 border border-dark rounded mt-5">
                    <form className="h6">
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">PriceList</label>
                                <input type="text" id="form6Example1" className="form-control" />
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Product</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline mb-4">
                                <label className="form-label" for="form6Example3">Charge type</label><br/>
                                <select className="w-100" style={{height:"35px"}} id="cars" name="cars">
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
                                <label className="form-label" for="form6Example4">Price Type</label>
                                <select style={{height:"35px"}} className="w-100" id="cars" name="cars">
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
                                <a className="btn btn-primary btn-block mb-4" onClick={submitMetric}>Submit</a>
                                </div>
                            </div>
                            <div className="col">
                                <div className="form-outline mb-4">
                                <a className="btn btn-dark btn-block mb-4" onClick={backToPriceAProduct}>Back</a>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateMetric