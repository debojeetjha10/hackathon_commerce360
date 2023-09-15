import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import axios from "axios";
import table from "./Images/Table.png"

function AllPolicies(){
    

    return (
        <div className="justify-content-center vh-100 m-4">
            <div className="row w-100">
                <h4 className="text-primary">View All POLICIES</h4>
                <hr className="text-dark"/>
                <div className="col-12">
                    <div className="w-75 bg-dark display-flex justify-content-center align-items-center m-auto" style={{minHeight:"60vh"}}>
                        <img className="display-flex justify-content-center align-items-center m-auto" style={{minHeight:"100%",minWidth:"100%"}} src={table}></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllPolicies