import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function TaxAndBilling(){
    const navigate = useNavigate();

    const submit = (e) =>{
        e.preventDefault()
        alert("Form Submitted Successfully")
        navigate('/SummaryCreatePrice')
    }

    const backToCreateMetric = (e) => {
        e.preventDefault()
        navigate('/CreateMetric')
    }

    return (
        <div className="justify-content-center vh-100 m-4">
            <div className={`row w-100`}>
                <h5 className="text-primary">Tax And Billing</h5>
                <div className="w-100 m-auto p-3 border rounded">
                    <form className="h6">
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Taxable?</label>
                                <select className="w-100 mt-2" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Tax Included?</label>
                                <select className="w-100 mt-2" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="yes">yes</option>
                                    <option value="no">no</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Tax Code</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>

                        </div>
                        <div className="row mb-4">
                            
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
                        
                        
                        
                        {/* closing row */}
                        </div>
                        
                        <h5 className="text-primary mb-4">Finance And Revenue</h5>
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
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Recognized Rev Account</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>
                        </div>
                        <div className="row mb-4">
                            
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Unbilled A/R Account</label>
                                <input type="text" id="form6Example2" className="form-control" />
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Revenue Recognition Policy</label>
                                <select className="w-100 mt-3" style={{height:"35px"}} id="cars" name="cars">
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
                                <select className="w-100 mt-3" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="SSP">SSP</option>
                                    <option value="SSP Floor & Ceiling">SSP Floor & Ceiling</option>
                                </select>
                            </div>
                            </div>
                        </div>

                        <div className="row mb-4">
                        
                            
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