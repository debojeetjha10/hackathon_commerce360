import { useState } from "react"
import { Link } from "react-router-dom"

function CreateABundle() {

    const EMSval = ["EMS-E3", "EMS-E5"]

    const WinVal = ["Windows-E3", "Windows-E5", "WIN STEPUP E3 to E7", "WIN STEPUP E5 to E7"]

    const officeVal = ["OFFICE E3", "OFFICE E7", "OFFICE E7"]

    const CoPilotVal = ["OFFICE Co-Pilot", "Seller Co-Pilot"]

 

    const [selectedOptions, setSelectedOptions] = useState([])

    const [rand, setrand] = useState("")

 

    const allOptions = [EMSval, WinVal, officeVal, CoPilotVal]

 

    const addValue = (e) => {

        if(e.target.checked){

            setSelectedOptions(val=> [...val, e.target.value])

            setrand(e.target.value)

        }

        else{

            setSelectedOptions(val=>val.filter(v=> v!==e.target.value))

        }

        console.log(selectedOptions)

    }

 

    return (<div className="justify-content-center vh-min-100 m-4 container">

        <div className="row">

            <div className="col-sm">

                <h2 className="text-primary"> Bundle Confetti </h2>

                <div className="display-flex row">
                    <h5 className="text-primary col" >Co-Pilot</h5> 
                    <small className="col">Min Products - </small>
                    <input className="col" type="text" defaultValue="1"></input>
                    <small className="col">Max Products - </small>
                    <input className="col" type="text" defaultValue=""></input>
                </div>
                <div className="ml-20px">

                {CoPilotVal.map((v, i) =>

                    <div className="form-check">

                        <input className="form-check-input" type="checkbox" value={v}  onChange={addValue}/>

                        <label className="form-check-label">

                            {v}

                        </label> <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-danger  btn-sm"><i>Remove</i></button>

                    </div>)

                }

<button style={{ marginRight: '4px', fontSize: '14px'}} type="button" class="btn btn-success   btn-sm">Add Product</button>

                </div>

                <div className="ml-20px">

                <div className="display-flex row">
                    <h5 className="text-primary col" >EMS</h5> 
                    <small className="col">Min Products - </small>
                    <input className="col" type="text" defaultValue="0"></input>
                    <small className="col">Max Products - </small>
                    <input className="col" type="text" defaultValue=""></input>
                </div>

               

                {EMSval.map((v, i) =>

                    <div className="form-check">

                        <input className="form-check-input" type="checkbox" value={v} onChange={addValue}/>

                        <label className="form-check-label">

                            {v}

                            </label> <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-danger  btn-sm"><i>Remove</i></button>

                    </div>)

                }

                <button style={{ marginRight: '4px', fontSize: '14px'}} type="button" class="btn btn-success   btn-sm">Add Product</button>

 

                </div>

                <div className="ml-20px">

                <div className="display-flex row">
                    <h5 className="text-primary col" >Windows</h5> 
                    <small className="col">Min Products - </small>
                    <input className="col" type="text" defaultValue=""></input>
                    <small className="col">Max Products - </small>
                    <input className="col" type="text" defaultValue="2"></input>
                </div>
                

                {WinVal.map((v, i) =>

                    <div className="form-check">

                        <input className="form-check-input" type="checkbox" value={v} onChange={addValue}/>

                        <label className="form-check-label">

                            {v}

                        </label> <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-danger  btn-sm"><i>Remove</i></button>

                        </div>)

                }

<button style={{ marginRight: '4px', fontSize: '14px'}} type="button" class="btn btn-success   btn-sm">Add Product</button>

 
                <div className="display-flex row">
                    <h5 className="text-primary col" >Office</h5> 
                    <small className="col">Min Products - </small>
                    <input className="col" type="text" defaultValue="1"></input>
                    <small className="col">Max Products - </small>
                    <input className="col" type="text" defaultValue="1"></input>
                </div>

                {officeVal.map((v, i) =>

                    <div className="form-check">

                        <input className="form-check-input" type="checkbox" value={v} onChange={addValue} />

                        <label className="form-check-label">

                            {v}

                            </label> <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-danger  btn-sm"><i>Remove</i></button>

                    </div>)

                }

<button style={{ marginRight: '4px', fontSize: '14px'}} type="button" class="btn btn-success   btn-sm">Add Product</button>

 

            </div>

            </div>

            <div className="col-sm" style={{borderLeft: 'solid black 2px'}} >

                <h2 className="text-primary">Check Bundle Configuration</h2>

                {selectedOptions.length>0 &&  selectedOptions.map((v) => <li>{v}</li>)}

            </div>

        </div>

        <div className="mt-5">
            <Link to="/ViewBundle" className="btn btn-primary">Proceed To Add Bundle Rules</Link>
        </div>

    </div>);

}

 

export default CreateABundle;