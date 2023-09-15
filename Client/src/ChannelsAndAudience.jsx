import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ChannelsAndAudience(){

    const navigate = useNavigate();

    const submit = (e) =>{
        e.preventDefault()
        navigate('/PriceDefault')
    }

    const backToCreateMetric = (e) => {
        e.preventDefault()
        navigate('/CreateMetric')
    }

    return (
        <div className="justify-content-center vh-100 m-4">
            <div className={`row w-100`}>
                <h4 className="text-primary">Channels and Audience</h4>
                <hr className="text-dark"/>
                <div className="w-75 m-auto p-5 border border-dark rounded mt-5">
                    <form className="h6">
                        <div className="row mb-4">
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example1">Channels</label>
                                <select className="w-100" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="sample1">sample1</option>
                                    <option value="sample2">sample2</option>
                                    <option value="sample3">sample3</option>
                                    <option value="sample4">sample4</option>
                                    <option value="sample5">sample5</option>
                                </select>
                            </div>
                            </div>
                            <div className="col">
                            <div className="form-outline">
                                <label className="form-label" for="form6Example2">Audience</label>
                                <select className="w-100" style={{height:"35px"}} id="cars" name="cars">
                                    <option value="sample1">sample1</option>
                                    <option value="sample2">sample2</option>
                                    <option value="sample3">sample3</option>
                                    <option value="sample4">sample4</option>
                                    <option value="sample5">sample5</option>
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

export default ChannelsAndAudience