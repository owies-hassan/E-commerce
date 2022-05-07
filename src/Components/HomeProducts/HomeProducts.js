

import './HomeProducts.css'
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {incrementProducts, totalProductsFun} from "../../Store/Action";
import {Button} from "@mui/material";

const HomeProducts = ({img, id, title, category, price,response}) => {
    const history = useNavigate()
    const dispatch=useDispatch();

    const addCard = (id) => {
        const product=response.find(item=>item.id===id)
        dispatch(incrementProducts(product,price));

    }

    const goCard = () => {
        history('/buy')
    }
    const showDetails = (id) => {
        history(`details/${id}`)
    }

    return (
        <div className='home-products'>
            <img src={img}/>
            <div className='center'>
                <p>{title.split(' ').slice(0,2).join(' ')}</p>
                <p>{price} $</p>
            </div>
            <div className='btn-products'>
                <Button variant='contained' color='error' onClick={() => addCard(id)}>Add to card</Button>
                <Button variant='contained' color='error' onClick={goCard}>Go to card</Button>
                <Button variant='contained' color='error' onClick={() => showDetails(id)}>Show details</Button>
            </div>
        </div>
    )
}

export default HomeProducts;