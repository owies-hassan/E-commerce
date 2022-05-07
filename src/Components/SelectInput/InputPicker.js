import {Stack, TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {ageVal} from "../../Store/Action";


const InputPicker=()=>{
    const[value,setValue]=useState('');
    const dispatch=useDispatch()
    const handleChange=(e)=>{
        setValue(e.target.value);
        dispatch(ageVal(e.target.value))
    }
    return (

        <TextField className=' text-center'
                   fullWidth={true}
                   id="datetime-local"
                   type="datetime-local"
                   variant='standard'
                   value={value}
                   onChange={handleChange}
                   style={{padding:'10px 0',marginTop:'15px'}}
        />

    )
}

export default InputPicker