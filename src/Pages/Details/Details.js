import UseAxios from "../../Hook/UseAxios";
import {useNavigate, useParams} from "react-router-dom";
import './Details.css'
import {Skeleton} from "@mui/material";
import {Button} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';const Details = () => {
    const {id} = useParams();
    const history=useNavigate()
    const {loading, response} = UseAxios({url: `https://fakestoreapi.com/products/${id && id}`})
const goToCard=()=>{
        history('/buy')
}
const goToHome=()=>{
        history('/')
}
    return (
        <div className='content-products-details'>
          <div className='content-products'>
              {loading?<Skeleton className='btn-ske'  width='100px' height='100px'  />: <ArrowBackIcon className='btn-close pointer' onClick={goToHome} variant='contained'color='error' />}

              {loading? <Skeleton className='img-ske' variant='circular'/> :<img src={response.image}/>}
              {loading?  <Skeleton className='p-ske' width='100%' height='100px'  />: <p><span>price :</span> {response.price}</p>}
              {loading?<Skeleton className='p-ske' width='100%' height='20%'  />:<p>{response.description}</p>}
               <div className='btn-details'>
                   {loading?<Skeleton className='btn-ske' width='100px'  height='100px' />:<Button onClick={goToCard} variant='contained'color='primary' >Go to card</Button>}
                   {loading?<Skeleton className='btn-ske'  width='100px' height='100px'  />: <Button onClick={goToHome} variant='contained'color='primary' >Go to Home</Button>}
               </div>
            </div>

        </div>
    )
}

export default Details;