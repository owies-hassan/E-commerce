import {useEffect, useState} from "react";
import axios from "axios";


const UseAxios=({url})=>{
    const[response,setResponse]=useState([])
    const[loading,setLoading]=useState(true)
    // const amounting=true


    const  getData=async ()=> {
        const{data}= await axios.get(url);
        setResponse(await data )
        setLoading(false)
    }

    // const postData=async ()=> {
    //   await  axios({
    //         method: 'post',
    //         url: url,
    //         data: {
    //             category: 'bmw',
    //             price: 'free'
    //         }
    //     })
    // }


    useEffect(() => {

        // Promise.all([postData(), getData()])
        //     .then(function (results) {
        //         const acct = results[0];
        //         const perm = results[1];
        //     });
getData()

    }, [url])

    return {response,loading}
}
export default UseAxios


// axios.get(url)
//     .then(res => setResponse(res.data))
//     .then(res => setLoading(false))