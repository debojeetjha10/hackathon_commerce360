import React from "react";
import { Link } from "react-router-dom";

function SummaryCreatePrice () {
    return (<>

        <div className="justify-content-center vh-100 m-4">
            <div className={`row w-100`}>
                <div className="w-100 m-auto p-3 border rounded">
                    <form className="h6">
                    <h4 className="text-center alert alert-primary w-100"> Summary </h4>
            <br/>
            <span className="text-primary text-center" >Pricelist</span>
            
            
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                    <b>PriceList</b> - PriceList/NorthAmerica
                </div>
                <div className="col">
                <b>Product</b> - Bundle Confetti
                </div>
                <div className="col">
                <b>ChargeType </b>- Standard Price
                </div>
            </div>

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>Price Type</b> - Recurring
                </div>
                <div className="col">
                <b>Frequency</b> - Monthly
                </div>
                <div className="col">
                <b> PriceMethod</b> - Per Unit
                </div>
            </div>

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>Description </b>
                </div>
                <div className="col">
                <b>Cost</b>
                </div>
                <div className="col">
                <b>Base Price</b>
                </div>
            </div>

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>Price UOM  </b> - Each
                </div>
                <div className="col">
                <b>Min Price</b>
                </div>
                <div className="col">
                <b>Max ADJ %</b>
                </div>
            </div>

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>Effective Start Date </b>
                </div>
                <div className="col">
                <b> Effective End Date</b>
                </div>
                <div className="col">
                <b>Price Metric Type</b> - Quantity Metric
                </div>
            </div>

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>Allow Manual Adjustment</b> - yes
                </div>
                <div className="col">
                <b>Active</b> - True
                </div>
                <div className="col">
                </div>
            </div>

            <hr/>
            <span className="text-primary text-center" >Price metric</span>
            <br/>
            

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>FROM</b> - 101
                </div>
                <div className="col">
                <b>TO</b> - 1000
                </div>
                <div className="col">
                <b>Unit Price / discount %</b> - 10%
                </div>
            </div>

            <hr/>
            <span className="text-primary text-center" >Channels and Audience</span>
            <br/>
            


            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>Channels</b> - VL
                </div>
                <div className="col">
                <b>Audience</b> - Commercial
                </div>
                <div className="col">
                </div>
            </div>
            
                    <hr/>
            <span className="text-primary text-center" >Price Defaults</span>
            <br/>
            

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>Default Quantity</b>
                </div>
                <div className="col">
                <b>Default Selling Term</b>
                </div>
                <div className="col">
                </div>
            </div>

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>Minimum usage Quantity</b>
                </div>
                <div className="col">
                     <b>Auto Renew</b>
                </div>
                <div className="col">
                </div>
            </div>

            <hr/>
            <span className="text-primary text-center" >Tax & Billings</span>
            <br/>
            


            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>Taxable</b> - yes
                </div>
                <div className="col">
                     <b>tax Included</b> - yes
                </div>
                <div className="col">
                     <b>Tax Code</b> - T0C97VLP3
                </div>
            </div>

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b> Billing Rule </b>
                </div>
                <div className="col">
                     <b>Billing Frequency</b>
                </div>
                <div className="col">
                </div>
            </div>

            <hr/>
            <span className="text-primary text-center" >Finance & Revenue</span>
            <br/>
            


            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b> A/R Account </b>
                </div>
                <div className="col">
                    <b> Deferred Revenue Account</b>
                </div>
                <div className="col">
                     <b>Recognized Rev Account</b>
                </div>
            </div>

            <br/>
            <div className="row" style={{marginLeft:"6%"}}>
                <div className="col">
                <b>  Unbilled A/R Account </b>
                </div>
                <div className="col">
                    <b> Revenue Recognization Policy</b>
                </div>
                <div className="col">
                   <b> RevenueSplit/Merge Policy</b>
                </div>
            </div>

            <br/>
            <div className="row m-4">
                <div className="col text-center">
                    <Link to="" className="btn btn-danger m-2">
                        Edit
                    </Link>
                    <Link to="/home" className="btn btn-primary m-2">
                        Confirm
                    </Link>
                </div>
            </div>
                    </form>
                </div>
            </div>
        </div>

</>
    )
}


export default SummaryCreatePrice