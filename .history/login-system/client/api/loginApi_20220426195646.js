export const loginApi = (data) =>{
    try{
        fetch("http://localhost:7070/api_signin",{
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(})
        })
            .then(response=>{
            // return response.json()
                return response.json();
            })
            .then(responseData=>{
                setInfo(responseData)
            })
    
    }catch(err){
        console.log(err.message)
        console.log(email)
    }
}