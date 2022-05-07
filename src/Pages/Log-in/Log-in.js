import {Box, Button, Checkbox, FormControlLabel} from "@mui/material";
import Input from "../../Components/SelectInput/Input";
import InputPicker from "../../Components/SelectInput/InputPicker";
import SelectInput from "../../Components/SelectInput/SelectInput";
import {NavLink, useNavigate} from "react-router-dom";
import './Log-in.css'
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {controllerLogin, getDataFromStorageFun, isLoggedFun} from "../../Store/Action";
import ErrorComponents from "../../Components/ErrorComponent/ErrorComponents";


const LogIn=()=>{
    const localStorageGet=JSON.parse(localStorage.getItem('arr'))
    const{targetEmail,targetPassword,dataFromStorage}=useSelector(state=>state)
     const{controlLogin}=useSelector(state=>state)
    const [checkerInfo, setCheckerInfo] = useState(false)
    const[checkValidation,setCheckValidation]=useState(false)
const history=useNavigate()
    const dispatch=useDispatch()
    const closeLogin=()=>{
         dispatch(controllerLogin(!controlLogin))
    }
    const checkerValidation = async () => {

        if (localStorage.length) {
            setCheckerInfo(false)
            const checker = localStorageGet.find(item => item.password === targetPassword && item.email === targetEmail)
            if (checker) {

                setCheckValidation(false)
                dispatch(isLoggedFun(true))
                localStorage.setItem('isLogged', JSON.stringify(true))
                localStorage.setItem('dataStorage', JSON.stringify(checker))
                dispatch(controllerLogin(false))
                history('/')
            } else {
                setCheckValidation(true)
            }

        } else {
            setCheckerInfo(true)
        }
    }
    const handleClick=()=>{
        dispatch(controllerLogin(!controlLogin))
       history(`/register`)
    }

    return(

            <Box className='main-app-login'>

                {controlLogin&&  <div className='app-login'>
                    <span onClick={closeLogin} className='btn-close'>x</span>
                    <div className='content-img'>
                        <img src='Img/shop1.jpg'/>
                    </div>
                    <div className='content-login'>
                        <Input type='email' label='email' variant='standard'/>
                        <Input type='text' label='password' variant='standard'/>
                        <Button  fullWidth onClick={checkerValidation} className='pt' variant='contained' color='primary'>Submit</Button>
                        <span onClick={handleClick} className='pt pointer' >register</span>
                        {checkerInfo&&<ErrorComponents text='please register and come here dear'/>}
                        {checkValidation&&<ErrorComponents text='this email or password do not found'/>}

                    </div>
                </div>}
            </Box>

    )
}
export default LogIn;