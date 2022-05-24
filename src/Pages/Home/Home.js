import UseAxios from "../../Hook/UseAxios";
import HomeProducts from "../../Components/HomeProducts/HomeProducts";
import './Home.css'
import {Box, Button, Container, LinearProgress} from "@mui/material";
import UseBtn from "../../Hook/UseBtn";
import {Fragment, useEffect, useState} from "react";
import LinearDeterminate from "../../Components/Progress/Linear";
import GoToTop from "../../Components/GoTop/GoToTop";


const Home = () => {
    const {response, loading} = UseAxios({url: `https://fakestoreapi.com/products`})
    const{responseBtn,loadingBtn}=UseBtn({url:`https://fakestoreapi.com/products/categories`})
    const[cloneResponse,setCloneResponse]=useState(null);
    const[showGoToTop,setGoToTop]=useState(false)

    useEffect(()=>{
     setCloneResponse(response)
    },[response])

 useEffect(()=>{

         window.onscroll = () => {
             if (window.pageYOffset > 400) {
                 setGoToTop(true)
             } else if (window.pageYOffset <= 400) {
                 setGoToTop(false)
             }
         }

 },[showGoToTop])


    if (loading||loadingBtn) {
        return (
          <div className='progress'>
              <LinearDeterminate />
          </div>
        )
    }



const filteredResponse=(e)=>{
     const filteredResponse=response.filter(item=>item.category===e);
       setCloneResponse(filteredResponse)
}
const getAllResponse=()=>{
        setCloneResponse(response)
}

    return (
        <Box className='app-home' sx={{position:'relative'}}>
            {showGoToTop&& <GoToTop  />}

                <div className='header-home'>
                    <div className='img-shopping'>
                        <img src='Img/Women.jpg'/>
                    </div>

                    <div className='para-content'>
                        <p className='para-welcome'>welcome everyone</p>
                        <p className='para-check'>check out all the trends</p>
                    </div>
                </div>
            <Container>
                <div className='header-title'>
                    <h1 className='animate__animated animate__bounce animate__pulse'>latest products</h1>
                </div>
                <div className='btn-content-home'>
                    <Button onClick={getAllResponse} variant='outlined' color='error'>All</Button>
                    {responseBtn && responseBtn.map(item => {
                        return (
                            <Fragment key={item}>
                                <Button onClick={() => filteredResponse(item)} variant='outlined'
                                        color='error'>{item}</Button>
                            </Fragment>
                        )
                    })}

                </div>
                <div className='products'>
                    {cloneResponse && cloneResponse.map(item => {
                        return (
                            <div className='main-content' key={item.id}>
                                <HomeProducts

                                    response={response}
                                    id={item.id}
                                    category={item.category}
                                    img={item.image}
                                    price={item.price}
                                    title={item.title}

                                />
                            </div>
                        )
                    })}
                </div>
            </Container>
        </Box>
    )
}
export default Home;