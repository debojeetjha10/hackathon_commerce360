import React from "react";

function ViewBundle () {
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
                                    <td>Inclusion</td>
                                    <td>
                                    FROM Jan-1-2023 to Dec-31-2023​<br/>IF Office E7 selected​<br/>THEN ADD​<br/>PRODUCT Office Co-PIlot​<br/>FOR All Customers
                                    </td>
                                    <td>Swapnil</td>
                                    <td><a className="text-primary">Edit</a>/<a className="text-primary">/Delete</a></td>
                                </tr>
                                <tr>
                                    <td>YES</td>
                                    <td>Exclusion </td>
                                    <td>
                                    FROM Jan-1-2023 to Dec-31-2023​<br/>IF Office E3 selected​<br/>THEN REMOVE/HIDE​<br/>PRODUCT Office Co-Pilot​<br/>FOR All Customers
                                    </td>
                                    <td>Debojeet</td>
                                    <td><a className="text-primary">Edit</a>/<a className="text-primary">/Delete</a></td>
                                </tr>
                                <tr>
                                    <td>NO</td>
                                    <td>Recommended</td>
                                    <td>
                                    FROM Jan-1-2023 to Dec-31-2023​<br/>IF Windows E5 or E7  selected​<br/>THEN RECOMMEND​<br/>PRODUCT Office Co-Pilot​<br/>FOR All Customers
                                    </td>
                                    <td>Ronak</td>
                                    <td><a className="text-primary">Edit</a>/<a className="text-primary">/Delete</a></td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <button className="btn btn-primary">Add New bundle Rule</button>
        </div>
    )
}

export default ViewBundle