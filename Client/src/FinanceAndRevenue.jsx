import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function FinanceAndRevenue(){
    const navigate = useNavigate();

    const submit = (e) =>{
        e.preventDefault()
        navigate('/')
    }

    const backToCreateMetric = (e) => {
        e.preventDefault()
        navigate('/TaxAndBilling')
    }

    return (
        <div className="justify-content-center vh-100 m-4">
            <div className={`row w-100`}>
                <h4 className="text-primary">Finance And Revenue</h4>
                <hr className="text-dark"/>
                <div className="w-75 m-auto p-5 border border-dark rounded mt-5">
                    <form className="h6">
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">A/R Account</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Deferred Revenue Account</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Recognized Rev Account</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Unbilled A/R Account</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Revenue Recognition Policy</label>
                                <select className="w-100" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="Immediate">Immediate</option>
                                    <option value="As Invoiced">As Invoiced</option>
                                    <option value="Manual">Manual</option>
                                    <option value="Prepaid">Prepaid</option>
                                    <option value="Usage">Usage</option>
                                    <option value="Prepaid">Milestone</option>
                                    <option value="True-up">True-up</option>
                                    <option value="Deferred Revenue Subscription">Deferred Revenue Subscription</option>
                                    <option value="Non-deferred Revenue Subscription">Non-deferred Revenue Subscription</option>
                                </select>
                            </div>
                        </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">RevenueSplit/Merge Policy</label>
                                <select className="w-100" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="SSP">SSP</option>
                                    <option value="SSP Floor & Ceiling">SSP Floor & Ceiling</option>
                                </select>
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
                                <a className="btn btn-dark btn-block mb-4" onClick={backToCreateMetric}>Back</a>
                                </div>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default FinanceAndRevenue