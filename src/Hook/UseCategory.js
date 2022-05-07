import {useEffect, useState} from "react";
import axios from "axios";


const UseCategory=()=>{
    const[jewelery,setJewelery]=useState(null);
    const[clothesMan,setClothesMan]=useState(null)
    const[clothesWoman,setClothesWoman]=useState(null)
    const[electronic,setElectronic]=useState(null)
    const[loading,setLoading]=useState(true)

    const axiosCategory=async (cate)=>{
        const {data}=await axios.get(`https://fakestoreapi.com/products/category/${cate}`)
        setJewelery(await data)
        setClothesMan(await data)
        setClothesWoman(await data)
        setElectronic(await data)
        setLoading(false)
    }

    useEffect(()=>{
        axiosCategory('jewelery')
        axiosCategory("women's clothing")
        axiosCategory("men's clothing")
        axiosCategory('electronics')

    },[])


    return{jewelery,clothesWoman,clothesMan,electronic,loading}
}
export default UseCategory