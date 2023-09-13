import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const[email,setEmail] = useState()
    const[password,setPassword] = useState()
    const[msg,setMsg] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {
            console.log(result)
            if (result.data == "Success")
            {
                navigate('/home')
            }
            else{
                setMsg("Invalid Login")
            }
        })
        .catch(err => console.log(err))
    }

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-3 rounded w-25 border border-dark">
                <h2 className="text-center">SignIn</h2>
                <div className="text-danger text-center">{msg}</div>
                <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" required="true" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <br/>
                <div className="form-group">
                    <label for="exampleInputPassword1" className="strong">Password</label>
                    <input type="password" className="form-control" required="true" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <br/>
                <div className="row">
                    <div className="float-left col-6"><button type="submit" className="btn btn-success">Login</button></div>
                    <div className="float-right col-6"><small className="ml-5">New User? <Link className="text-success" to="/register">Register Now</Link></small></div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login