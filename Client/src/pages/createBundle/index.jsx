import { useState } from "react"
import './styles.css'
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
                <h5 className="text-primary" >Co-Pilot</h5>
                <div className="ml-20px">
                {CoPilotVal.map((v, i) =>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={v}  onChange={addValue}/>
                        <label className="form-check-label">
                            {v}
                        </label> <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-danger  btn-sm"><i>Remove</i></button>
                    </div>)
                }
                <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-success   btn-sm">Add</button><label><i className="text-sm">Add Bundle Confetti</i></label>
                </div>
                <div className="ml-20px">

                <h5 className="text-primary">EMS</h5>
                
                {EMSval.map((v, i) =>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={v} onChange={addValue}/>
                        <label className="form-check-label">
                            {v}
                            </label> <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-danger  btn-sm"><i>Remove</i></button>
                    </div>)
                }
                <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-success   btn-sm">Add</button><label><i className="text-sm pl-2rem">Add Bundle Confetti</i></label>

                </div>
                <div className="ml-20px">
                <h5 className="text-primary">Windows</h5>
                {WinVal.map((v, i) =>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={v} onChange={addValue}/>
                        <label className="form-check-label">
                            {v}
                        </label> <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-danger  btn-sm"><i>Remove</i></button>
                        </div>)
                }
                <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-success   btn-sm">Add</button><label><i className="text-sm">Add Bundle Confetti</i></label>

                <h5 className="text-primary">Office</h5>
                {officeVal.map((v, i) =>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value={v} onChange={addValue} />
                        <label className="form-check-label">
                            {v}
                            </label> <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-danger  btn-sm"><i>Remove</i></button>
                    </div>)
                }
                <button style={{ marginRight: '4px', fontSize: '8px'}} type="button" class="btn btn-success   btn-sm">Add</button><label><i className="text-sm">Add Bundle Confetti</i></label>

            </div>
            </div>
            <div className="col-sm" style={{borderLeft: 'solid black 2px'}} >
                <h2 className="text-primary">New Bundle</h2>
                {selectedOptions.length>0 &&  selectedOptions.map((v) => <li>{v}</li>)}
            </div>
        </div>
    </div>);
}

export default CreateABundle;