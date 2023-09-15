import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function TaxAndBilling(){
    const navigate = useNavigate();

    const submit = (e) =>{
        e.preventDefault()
        alert("Form Submitted Successfully")
        navigate('/home')
    }

    const backToCreateMetric = (e) => {
        e.preventDefault()
        navigate('/PriceDefault')
    }

    return (
        <div className="justify-content-center vh-100 m-4">
            <div className={`row w-100`}>
                <h4 className="text-primary">Tax And Billing</h4>
                <hr className="text-dark"/>
                <div className="w-75 m-auto p-5 border border-dark rounded mt-5">
                    <form className="h6">
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Taxable?</label>
                                <select className="w-100" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Tax Included?</label>
                                <select className="w-100" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Tax Code</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Billing Rule</label>
                                <select className="w-100" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="Bill In Advance">Bill In Advance</option>
                                    <option value="Bill in Arrears">Bill in Arrears</option>
                                    <option value="Milestone Billing">Milestone Billing</option>
                                    <option value="Bill on Ready for Billing Date">Bill on Ready for Billing Date</option>
                                </select>
                            </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Billing Frequency</label>
                                <select className="w-100" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="One Time">One Time</option>
                                    <option value="Monthly">Monthly</option>
                                    <option value="Yearly">Yearly</option>
                                    <option value="Quarterly">Quarterly</option>
                                </select>
                            </div>
                            </div>
                        <br/>
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

export default TaxAndBilling