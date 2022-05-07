import {InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useState} from "react";

import {FormControl} from "@mui/material";
import {useDispatch} from "react-redux";
import {countryVal, sexVal} from "../../Store/Action";
import './SelectInput.css'
const SelectInput = ({label, data}) => {
    const dispatch=useDispatch()
    const [value, setValue] = useState('')
    const handleChange=(e)=>{
        setValue(e.target.value)
        switch (label){
            case 'sex':
                return dispatch(sexVal(e.target.value))
            case 'country':
                return dispatch(countryVal(e.target.value))
        }
    }
    return (
       <FormControl>
           <InputLabel>{label}</InputLabel>
           <Select
               onChange={handleChange}
               variant='standard'
               label={label}
               value={value}
               style={{padding:'10px 0'}}
           >
               {data.map(item => {
                   return (
                       <MenuItem key={item} value={item}>{item}</MenuItem>
                   )
               })}
           </Select>
       </FormControl>
    )
}

export default SelectInput;