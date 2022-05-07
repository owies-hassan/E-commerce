
import './GoToTop.css'

const GoToTop=()=>{
    const goToTop=()=>{
        window.scrollTo({top:'0',behavior:'smooth'})
    }
    return(
        <div className='content-Top' onClick={goToTop}>
            <p>GO TOP</p>
        </div>
    )
}

export default GoToTop;