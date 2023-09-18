import React from "react";

function ViewPriceRule () {
    return (
        <div className="justify-content-center vh-100 m-4">
            <div className="row w-100">
                <h4 className="text-primary">View Price Rules</h4>
                <hr className="text-dark"/>
                
                <div className="col-12">
                    <div className="w-100 vh-50 display-flex justify-content-center align-items-center">

                    <table className="w-100 p-3 m-3 h-4 table table-striped table-bordered">
                            <thead className="table table-primary">
                                <tr>
                                    <th>ACTIVE</th>
                                    <th>RULE NAME</th>
                                    <th>RULE DETAIL</th>
                                    <th>CREATED BY</th>
                                    <th>ACTION</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>YES</td>
                                    <td>Azure Compute Discount for New Customers.</td>
                                    <td>
                                        FROM Date 1 to Date 2 <br/>IF no Compute Asset exists <br/>THEN give 10% discount  <br/> ON Azure Compute Product family <br/> FOR All Customers
                                    </td>
                                    <td>Swapnil</td>
                                    <td><a className="text-primary">Edit</a>/<a className="text-primary">/Delete</a></td>
                                </tr>
                                <tr>
                                    <td>YES</td>
                                    <td>Europe Promotion for Office E5 Product </td>
                                    <td>
                                    FROM Date 1 to Date 2​ <br/>IF Pricelist name is Pricelist - EUROPE​<br/>THEN give 20% discount ​<br/>ON Azure Compute Product family ​<br/>FOR All Customers
                                    </td>
                                    <td>Debojeet</td>
                                    <td><a className="text-primary">Edit</a>/<a className="text-primary">/Delete</a></td>
                                </tr>
                                <tr>
                                    <td>NO</td>
                                    <td>Customer specific discount - Walmart</td>
                                    <td>
                                    FROM Date 1 to Date 2​<br/>IF Pricelist name is Pricelist - NA​<br/>THEN give 3.5% discount ​<br/>ON All Products​<br/>FOR Customer Account as Walmart Inc
                                    </td>
                                    <td>Ronak</td>
                                    <td><a className="text-primary">Edit</a>/<a className="text-primary">/Delete</a></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <button className="btn btn-primary">Add New Price Rule</button>
        </div>
    )
}

export default ViewPriceRule