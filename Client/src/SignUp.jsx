import { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-3 rounded w-25 border border-dark">
                <h2 className="text-center">Register</h2>
                <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <br/>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="strong">Password</label>
                    <input type="password" className="form-control" required="true" id="exampleInputPassword1" placeholder="Password"/>
                </div>
                <br/>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="strong">Confirm Password</label>
                    <input type="password" className="form-control" required="true" id="exampleInputPassword1" placeholder="Confirm Password"/>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <Link className="text-success" to='/'>login</Link>
            </div>
        </div>
    )
}

export default SignUp