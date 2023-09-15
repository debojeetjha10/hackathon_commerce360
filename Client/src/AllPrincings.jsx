import React, { useState } from "react";
import { Link } from "react-router-dom";
import $ from 'jquery'
import axios from "axios";

function AllPricings(){
    const [selectedCatalog,setSelectedCatalog] = useState()
    const [tableData,setTableData] = useState([])

    const populateData = (e) => {
        e.preventDefault()
        // var value =  e.target.textContent
        // setSelectedCatalog(value)
        // console.log("fetch data for",value)

        // axios.post('http://localhost:3001/catalogData',{value})
        // .then(tableData => {
        //     console.log(tableData.data[0].attributes)
        //     setTableData(tableData.data[0].attributes)
        // })
        // .catch(err => console.log(err))
    }

    return (
        <div className="justify-content-center vh-100 m-4">
            <div className="row w-100">
                <h4 className="text-primary">View All PRICELISTS</h4>
                <hr className="text-dark"/>
                
                <div className="col-12">
                    <div className="w-100 vh-50 display-flex justify-content-center align-items-center">

                    <table className="w-100 p-3 m-3 h-4 table table-striped table-bordered">
                            <thead className="table table-primary">
                                <tr>
                                    <th>PRICE LIST NAME</th>
                                    <th>DESCRIPTION</th>
                                    <th>ACTIVE</th>
                                    <th>CURRENCY</th>
                                    <th>START EFFECTIVE DATE</th>
                                    <th>END EFFECTIVE DATE</th>
                                    <th>CATALOGS</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    tableData.map(data => {
                                        return(
                                        <tr>
                                            <td>{data.product}</td>
                                            <td>{data.productCode}</td>
                                            <td>{data.productactive}</td>
                                            <td>{data.productchannel}</td>
                                        </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default AllPricings