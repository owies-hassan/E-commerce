import {useEffect, useState} from "react";
import axios from "axios";


const UseBtn=({url})=>{

    const [responseBtn,setResponseBtn]=useState(null)
    const[loadingBtn,setLoadingBtn]=useState(true)

    useEffect(()=>{
        axios.get(url)
            .then(res=>setResponseBtn(res.data))
            .then(load=>setLoadingBtn(false))
    },[url]);

    return {responseBtn,loadingBtn}
}
export default UseBtn