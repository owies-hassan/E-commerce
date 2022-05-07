import {useDispatch, useSelector} from "react-redux";
import './Profile.css'
import {Avatar} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import ProfileInfo from "../../Components/ProfileInfo/ProfileInfo";
import {updateImgPreview} from "../../Store/Action";


const Profile = () => {
    const [image, setImage] = useState('');
    const current = new Date();
    const dispatch = useDispatch()

    const {getDataProfile,selectImg} = useSelector(state => state)
    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;



    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                dispatch(updateImgPreview(reader.result))
                // localStorage.setItem('images',JSON.stringify(selectImg))

            };
            reader.readAsDataURL(image)

        } else {
            dispatch(updateImgPreview(null))
        }
    }, [image])


    return (

        <div className='main-profile'>
            <div className='content-profile'>
                <div className='content-profile-img'>
                    <Avatar
                        alt="Remy Sharp"
                        src={selectImg}
                        sx={{width: 500, height: 500}}
                    />
                    <label className="label">
                        <input type="file"
                            accept='image/*'
                            onChange={(e) => {
                                const file = e.target.files[0]
                                if (file && file.type.substr(0, 5) === 'image') {
                                    setImage(file)
                                }
                            }}/>
                        <span>Select a file</span>
                    </label>
                </div>
                <div className='content-profile-info'>
                    <ProfileInfo text='your Name :' keyData='name' data={getDataProfile.name}/>
                    <ProfileInfo text='your lastName :' keyData='lastName' data={getDataProfile.lastName}/>
                    <ProfileInfo text='your MiddleName :' keyData='age' data={getDataProfile.age}/>
                    <ProfileInfo text='your Sex :' keyData='sex' data={getDataProfile.sex}/>
                    <ProfileInfo text='your Email :' keyData='email' data={getDataProfile.email}/>
                    <ProfileInfo text='your date :' keyData='middle' data={getDataProfile.date}/>
                    <ProfileInfo text='your Country :' keyData='country' data={getDataProfile.country}/>
                </div>
            </div>
        </div>

    )
}
export default Profile;


