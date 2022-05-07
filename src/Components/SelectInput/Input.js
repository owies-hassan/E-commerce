import {TextField} from "@mui/material";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {emailVal, lastVal, middleVal, nameVal, passWordVal, targetEmail, targetPassWord} from "../../Store/Action";


const Input=({label,variant,type})=>{


    const[val,setVal]=useState('');
    const dispatch=useDispatch()

    const handleChange = (e) => {
        setVal(e.target.value);
        switch (label) {
            case 'your name':
              return   dispatch(nameVal(e.target.value))
            case 'middle Name':
                return  dispatch(middleVal(e.target.value))
            case 'last Name':
                return  dispatch(lastVal(e.target.value))
            case 'your email':
              return   dispatch(emailVal(e.target.value))
            case 'your passWord':
              return   dispatch(passWordVal(e.target.value))
            case 'email':
                return dispatch(targetEmail(e.target.value))
            case 'password':
                return dispatch(targetPassWord(e.target.value))
        }
        return false;
    }

    return(
        <TextField
            type={type}
            fullWidth
            onChange={handleChange}
            style={{padding: '10px 0'}}
            label={label}
            variant={variant}
            value={val}
        />
    )
}

export default Input