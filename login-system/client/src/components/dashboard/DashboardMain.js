import {useEffect, useState} from 'react'
import "../../styles/dashboard.css"
const Dashboard = () =>{
    
    const [registeredUsers, setRegisteredUsers] = useState(null)

    fetch("http://localhost:7070/api_getUsers")
    .then((response)=>{ return response.json()})
    .then((data)=>{
        setRegisteredUsers(data)
    })

    

    return(
        <>
        <div className="dashboard">
            <table border={3} cellPadding={15} cellSpacing={0}>
                <tr>
                    <th colSpan={3}>
                        <h2>List of registered users</h2>
                    </th>
                </tr>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>             
            { 
                registeredUsers &&
                registeredUsers.map((user)=>(
                    <tr>
                        <td>{user.FirstName}</td>
                        <td>{user.LastName}</td>
                        <td>{user.Email}</td>
                    </tr>
                ))
            }
            </table>
        </div>
        </>
    );
}

export default Dashboard;








