// My own hook
import { useState, useEffect, Component } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const AbortCont = new AbortController();

    useEffect(()=>{
        setTimeout(() => {
            fetch(url, {signal : AbortCont.signal})
            .then((response)=>{
                if(!response.ok){
                    throw Error("Inaccurate data")
                }
                return response.json()})
            .then((responseData)=>{
                console.log(responseData)
                setData(responseData)
                setLoading(false)
            })
            .catch(err=>{
                if(err.name === "AbortError"){
                    console.log("Component unmounted")
                }else{
                    setError(err.message)
                    console.log(err.message)
                    setLoading(false)
                }
            })
        }, 1000);
        
        return ()=>{AbortCont.abort()}

    },[url]);
    return {data, loading , error}
}

export default useFetch