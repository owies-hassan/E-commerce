import {Button} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import {useEffect, useState} from "react";
import UpdateProfile from "./UpdateProfile";
import {useDispatch, useSelector} from "react-redux";
import {updateNameVal} from "../../Store/Action";
import './ProfileInfo.css'
const ProfileInfo=({data,text,keyData})=>{

    const[toggleEdit,setToggleEdit]=useState(true)

    const toggleEditFun=()=>{

      setToggleEdit(!toggleEdit)

    }

    return(

            <div  className='pro-info'>
               <div className='detail-profile'>
                   {toggleEdit? <p>{text} <span>{data}</span></p>:<UpdateProfile keyData={keyData} defultVal={data} toggleEdit={toggleEdit} setToggleEdit={setToggleEdit} />}
                   <Fab color="secondary" aria-label="edit">
                       <EditIcon onClick={toggleEditFun} />
                   </Fab>
               </div>
            </div>

    )
}

export default ProfileInfo;