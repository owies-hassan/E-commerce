import { Swiper, SwiperSlide } from 'swiper/react';

import {Pagination,Navigation} from 'swiper'
import 'swiper/swiper.min.css'
import './SwiperProducts.css'

import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

import SwiperCore from 'swiper'
import {Box, CircularProgress, Container} from "@mui/material";
import {useEffect} from "react";
import axios from "axios";


const SwiperProducts=({category,setCategory,name,setLoad,load})=>{
    SwiperCore.use([Pagination,Navigation])


    const axiosCategory = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products/category/${name}`)
        setCategory(await data)
        setLoad&& setLoad(!load)
    }

    useEffect(()=>{
         axiosCategory()
    },[])

    return(
      <Box className='main-content-swiper'>
          {load&&load?<div style={{marginTop:'100px'}}><CircularProgress   size='100px' /></div>:<Box>
              {category&&
              <Container >
                  <Swiper
                      spaceBetween={50}
                      slidesPerView={4}
                      loop={true}
                      pagination={true}
                      navigation={true}

                  >
                      {category.map(item=>{
                          return(
                              <SwiperSlide key={Math.random()*10}><img src={item.image}/></SwiperSlide>
                          )
                      })}
                  </Swiper>
              </Container>}
          </Box>}
      </Box>
    )
}

export default SwiperProducts;