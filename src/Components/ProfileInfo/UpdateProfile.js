import {Button, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getDataFromStorageFun, updateNameVal} from "../../Store/Action";
import {useEffect, useState} from "react";


const UpdateProfile=({defultVal,toggleEdit,setToggleEdit,keyData})=>{
    const updateLocalStorage=JSON.parse(localStorage.getItem('dataStorage'))
    const[val,setVal]=useState('')
    const{getDataProfile}=useSelector(state=>state)

    const dispatch=useDispatch()

    const updateData = (key) => {
        updateLocalStorage[key] = val
        localStorage.setItem('dataStorage', JSON.stringify(updateLocalStorage))
        dispatch(getDataFromStorageFun(JSON.parse(localStorage.getItem('dataStorage'))))
        setToggleEdit(!toggleEdit)
    }

    return(
        <div>
            <TextField
            variant='standard'
            defaultValue={defultVal}
            onChange={(e)=>setVal(e.target.value)}
            />
            <Button variant='contained' onClick={()=>updateData(keyData)}>update</Button>
        </div>
    )
}
export default UpdateProfile