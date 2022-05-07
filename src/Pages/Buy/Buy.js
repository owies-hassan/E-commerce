import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Rating} from "@mui/material";
import {incrementProducts} from "../../Store/Action";

import './Buy.css'
import {useEffect, useState} from "react";
import TotalBuy from "../../Components/TotalCard/TotalBuy";
const Buy = () => {
    const {productBuy,totalProducts} = useSelector(state => state)
    const dispatch=useDispatch()
    const incrementProductsFun=(id)=>{
        const product=productBuy.find(item=>item.id===id)
        dispatch(incrementProducts(product));

    }
    return (
        <div className='main-card'>
            <TotalBuy />
           <Container>
               {productBuy&&productBuy.map(item => {
                   return (
                       <div className='content-card' key={item.id}>
                           <div className='card-img'>
                               <img src={item.image}/>
                           </div>
                           <div className='card-info'>
                               <p>{item.title}</p>
                               <Rating name="half-rating" defaultValue={item.rating.rate} precision={0.5} />
                               <p>{item.price}$</p>
                               <p>Count :{item.qty}</p>
                               <p>total :{item.qty*item.price}</p>
                               <div>
                                   <Button onClick={()=>incrementProductsFun(item.id,item.qty*item.price)} size='large' variant='outlined' color='primary'>+</Button>
                                   <Button size='large' variant='outlined' color='primary'>-</Button>
                               </div>
                           </div>
                       </div>
                   )
               })}
           </Container>

        </div>
    )
}
export default Buy;