
import './ErrorComponents.css'
import {Box} from "@mui/material";
const ErrorComponents=({text})=>{

    return(
        <Box>
            <p className='error-text'>{text}</p>
        </Box>
    )
}
export default ErrorComponents