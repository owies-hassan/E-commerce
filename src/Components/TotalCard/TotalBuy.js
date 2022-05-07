import {useSelector} from "react-redux";

import './TotalBuy.css'

const TotalBuy=()=>{
    const {totalProducts} = useSelector(state => state)
    return(
        <div className='total-products animate__animated animate__bounce animate__delay-2s'>

                <p>Total : <span> {totalProducts.toFixed(2)} $</span></p>

        </div>
    )
}
export default TotalBuy;