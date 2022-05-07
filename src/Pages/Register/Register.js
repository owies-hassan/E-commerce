import {Box, Button, Checkbox, FormControlLabel, FormGroup, TextField} from "@mui/material";
import Input from '../../Components/SelectInput/Input'


import './Rigister.css'
import SelectInput from "../../Components/SelectInput/SelectInput";
import {NavLink, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import InputPicker from "../../Components/SelectInput/InputPicker";
import {useEffect, useState} from "react";
import ErrorComponents from "../../Components/ErrorComponent/ErrorComponents";
import {controllerLogin} from "../../Store/Action";

const countryArr = ['lebanon', 'syria', 'iraq', 'jordan', 'egypt']
const sexArr = ['male', 'female']


const Register = () => {


    const {name, middle, lastName, sex, country, age, email, password,controlLogin} = useSelector(state => state)
    let localStorageData = localStorage.length && JSON.parse(localStorage.getItem('arr'));
    const [arrLocal, setArrLocal] = useState(localStorageData?localStorageData:[])
    const [checkerInfo, setCheckerInfo] = useState(false)
    const history = useNavigate();
    const dispatch=useDispatch()
    const handleClick=()=>{
        dispatch(controllerLogin(!controlLogin))
        history(`/log`)
    }

    const localStorageSetData = () => {
        setArrLocal([...arrLocal, {
            name: name,
            middle: middle,
            lastName: lastName,
            country: country,
            sex: sex,
            email: email,
            password: password,
            age: age
        }])
    }
    const goToHomeAndCheckerInfoInput = () => {
        setCheckerInfo(false)
        history('/')
    }
    const checkerValidation = async () => {
        if (name && middle && lastName && sex && country && age && email && password) {
           await localStorageSetData();
                goToHomeAndCheckerInfoInput()
        } else {
            setCheckerInfo(true)

        }
    }

    useEffect(() => {
        localStorage.setItem('arr', JSON.stringify(arrLocal&&arrLocal))
    }, [arrLocal])


    return (
        <Box className='main-app-register'>
            <div className='app-register'>
                <div className='content-img'>
                    <div className='bk-image'></div>
                </div>
                <div className='content-register'>
                    <Input type='text' label={'your name'} variant='standard'/>
                    <Input type='text' label={'middle Name'} variant='standard'/>
                    <Input type='text' label={'last Name'} variant='standard'/>
                    <InputPicker/>
                    <SelectInput  data={sexArr} label='sex'/>
                    <SelectInput  data={countryArr} label='country'/>
                    <Input type='email' label={'your email'} variant='standard'/>
                    <Input type='password' label='your passWord' variant='standard'/>
                    <FormControlLabel className='pt' control={<Checkbox defaultChecked/>} label="I agree  "/>
                    <Button onClick={checkerValidation} className='pt' variant='contained'
                            color='primary'>Submit</Button>
                    <span className='pt' onClick={handleClick}>Login</span>
                    {checkerInfo&&<ErrorComponents text='please check of all field'/>}
                </div>
            </div>
        </Box>
    )
}
export default Register;


