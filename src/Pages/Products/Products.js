
import {Box} from "@mui/material";

import SwiperProducts from "../../Components/SwiperProducts/SwiperProducts";
import {Fragment, useState} from "react";

import './Products.css'

const Products=()=>{

    const[jewelery,setJewelery]=useState(null);
    const[clothesMan,setClothesMan]=useState(null)
    const[clothesWoman,setClothesWoman]=useState(null)
    const[electronic,setElectronic]=useState(null)
    const[load,setLoad]=useState(true)





    return(
        <Box>
            <div className='content-products-swiper'>
                <SwiperProducts name="men's clothing" category={clothesMan} setCategory={setClothesMan} load={load} setLoad={setLoad} />
                <SwiperProducts name="women's clothing" category={clothesWoman} setCategory={setClothesWoman}/>
                <SwiperProducts name='jewelery' category={jewelery} setCategory={setJewelery}/>
                <SwiperProducts name='electronics' category={electronic} setCategory={setElectronic}/>

            </div>
        </Box>
    )
}
export default Products;