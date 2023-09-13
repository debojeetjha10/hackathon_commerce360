import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

function SignUp() {
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[msg, setMsg] = useState('')
    const[confirmPassword, setConfirmPassword] = useState()

    const url = import.meta.env.vite_url + '/register'

    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (password === confirmPassword){
            axios.post('http://localhost:3001/register', {email, password})
            .then(result => {console.log(result)
            navigate('/')
            })
            .catch(err => console.log(err))
        }
        else{
            console.log("error")
            setMsg('password missmatch!')
        }
    }
    

    return(
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="p-3 rounded w-25 border border-dark">
                <h2 className="text-center">Register</h2>
                <h5 className="text-danger text-center">{msg}</h5>
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
                <div className="form-group">
                    <label for="exampleInputPassword1" className="strong">Confirm Password</label>
                    <input type="password" className="form-control" required="true" id="exampleInputPassword1" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                </div>
                <br/>
                <div className="row">
                    <div className="float-left col-6"><button type="submit" className="btn btn-primary">Register</button></div>
                    <div className="float-right col-6"><small className="ml-5">Already a user? <Link className="text-primary" to="/">login</Link></small></div>
                </div>
                </form>
                
            </div>
        </div>
    )
}

export default SignUp