


import {
    AGE_VAL, CONTROL_LOGIN, CONTROL_REGISTER,
    COUNTRY_VAL,
    EMAIL_VAL, GET_DATA_FROM_STORAGE, INCREMENT_BADGE,
    INCREMENT_PRODUCTS, IS_LOGGED,
    LASTNAME_VAL,
    MIDDLE_VAL,
    NAME_VAL,
    PASSWORD_VAL,
    SEX_VAL, TARGET_EMAIL, TARGET_PASSWORD, TOTAL_PRODUCTS, UPDATE_IMG_PREVIEW, UPDATE_NAME_VAL
} from "./Type";


 const incrementProducts=(pro,total)=>{
    return{
        type:INCREMENT_PRODUCTS,
        pro,
        total,
    }
}
const incrementBadge=(badge)=>{
    return{
        type:INCREMENT_BADGE,
        badge,
    }
}
const totalProductsFun=(totalPro)=>{
     return{
         type:TOTAL_PRODUCTS,
         totalPro,
     }
}
const nameVal=(data)=>{
    return{
        type:NAME_VAL,
        data,
    }
}
const middleVal=(data)=>{
    return{
        type:MIDDLE_VAL,
        data,
    }
}
const lastVal=(data)=>{
    return{
        type:LASTNAME_VAL,
        data,
    }
}
const ageVal=(data)=>{
    return{
        type:AGE_VAL,
        data,
    }
}
const sexVal=(data)=>{
    return{
        type:SEX_VAL,
        data,
    }
}
const countryVal=(data)=>{
    return{
        type:COUNTRY_VAL,
        data,
    }

}
const emailVal=(data)=>{
    return{
        type:EMAIL_VAL,
        data,
    }

}
const passWordVal=(data)=>{
    return{
        type:PASSWORD_VAL,
        data,
    }

}
const controllerLogin=(data)=>{
return{
    type:CONTROL_LOGIN,
    data,
}
}
const isLoggedFun=(data)=>{
    return{
        type:IS_LOGGED,
        data,
    }
}
const targetEmail=(data)=>{
     return{
         type:TARGET_EMAIL,
         data,
     }
}
const targetPassWord=(data)=>{
    return{
        type:TARGET_PASSWORD,
        data,
    }
}
const getDataFromStorageFun=(data)=>{
    return{
        type:GET_DATA_FROM_STORAGE,
        data,
    }
}
const storageImgFun=(img)=>{
     return{
         type:StorageManager,
         img,
     }
}
const updateNameVal=(data)=>{
     return{
         type:UPDATE_NAME_VAL,
         data,
     }
}
const updateImgPreview=(data)=>{
    return{
        type:UPDATE_IMG_PREVIEW,
        data,
    }
}
export {
    updateImgPreview,
    storageImgFun,
    totalProductsFun,
    incrementBadge,
    updateNameVal,
    getDataFromStorageFun,
    targetEmail,
    targetPassWord,
    incrementProducts,
    nameVal,
    middleVal,
    lastVal,
    ageVal,
    sexVal,
    countryVal,
    emailVal,
    passWordVal,
    controllerLogin,
    isLoggedFun
}