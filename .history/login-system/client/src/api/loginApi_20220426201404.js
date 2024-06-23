import { useState } from "react";

export const loginApi = (data) =>{
    const [x, setx] 

    try{
        fetch("http://localhost:7070/api_signin",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)
        })
            .then(response=>{
            // return response.json()
                return response.json();
            })
            .then(responseData=>{
                return responseData
            })
    
    }catch(err){
        console.log(err.message)
        // console.log(email)
    }
}