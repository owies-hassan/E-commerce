import {
    AGE_VAL, CONTROL_LOGIN, CONTROL_REGISTER,
    COUNTRY_VAL,
    EMAIL_VAL, GET_DATA_FROM_STORAGE, INCREMENT_BADGE,
    INCREMENT_PRODUCTS, IS_LOGGED,
    LASTNAME_VAL,
    MIDDLE_VAL,
    NAME_VAL,
    PASSWORD_VAL,
    SEX_VAL, STORAGE_IMG, TARGET_EMAIL, TARGET_PASSWORD, TOTAL_PRODUCTS, UPDATE_IMG_PREVIEW, UPDATE_NAME_VAL
} from "./Type";
import {totalProductsFun} from "./Action";


const initialState = {
    productBuy: [],
    incBadge:0,
    totalProducts:0,
    name: '',
    middle: '',
    lastName: '',
    age: '',
    sex: '',
    country: '',
    email: '',
    password: '',
    controlLogin:false,
    isLogged:false,
    targetEmail:'',
    targetPassword:'',
    selectImg:'',
    storageImg:JSON.parse(localStorage.getItem('image')),
    getDataProfile:JSON.parse(localStorage.getItem('dataStorage'))?JSON.parse(localStorage.getItem('dataStorage')):[],

}
   const Reducers = (state = initialState, action) => {

       switch (action.type) {
           case INCREMENT_PRODUCTS:
               const product=action.pro;
             const existProduct=state.productBuy.find(item=>item.id===product.id)
               const countTotal=state.productBuy.map(item=>item.total).reduce((acc,cur)=>acc+cur,0)

               if (existProduct) {
                   existProduct.qty++
                   existProduct.total += existProduct.price
                   return {
                       ...state,
                       incBadge: state.incBadge + 1,
                       totalProducts: countTotal
                   }
               } else {

                   return {
                       ...state,
                       productBuy: [...state.productBuy, {...product, qty: 1, total: action.total}],
                       incBadge: state.incBadge + 1,
                       totalProducts: countTotal

                   }
               }
           case INCREMENT_BADGE:
               return {
                   ...state,
                   incBadge: action.badge
               }
           case TOTAL_PRODUCTS:
               return {
                   ...state,
                   totalProducts: action.totalPro
               }
           case NAME_VAL:
               return {
                  ...state,
               name:action.data
               }
           case MIDDLE_VAL:
               return {
                   ...state,
                   middle:action.data
               }
           case LASTNAME_VAL:
               return {
                   ...state,
                   lastName:action.data
               }
           case AGE_VAL:
               return {
                   ...state,
                   age:action.data
               }
           case SEX_VAL:
               return {
                   ...state,
                   sex:action.data
               }
           case COUNTRY_VAL:
               return {
                   ...state,
                   country:action.data
               }
           case EMAIL_VAL:
               return {
                   ...state,
                   email: action.data
               }
           case PASSWORD_VAL:
               return {
                   ...state,
                   password: action.data
               }
           case CONTROL_LOGIN:
               return {
                   ...state,
                   controlLogin: action.data
               }
           case IS_LOGGED:
               return {
                   ...state,
                   isLogged: action.data
               }
           case TARGET_EMAIL:
               return {
                   ...state,
                   targetEmail: action.data
               }
           case TARGET_PASSWORD:
               return {
                   ...state,
                   targetPassword: action.data
               }
           case UPDATE_NAME_VAL:
               return {
                   ...state,
                   name: action.data
               }
           case GET_DATA_FROM_STORAGE:
               return {
                   ...state,
                   getDataProfile: action.data
               }
           case STORAGE_IMG:
               return {
                   ...state,
                   storageImg:action.img
               }
           case UPDATE_IMG_PREVIEW:
               return {
                   ...state,
                   selectImg:action.data
               }
       }
       return state;
   }

   export default Reducers;

