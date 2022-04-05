import { ReactComponent as FacebookSvg } from '../../images/facebook.svg';
import { ReactComponent as LinkedInSvg } from '../../images/linkedin.svg';
import { ReactComponent as GoogleSvg } from '../../images/google.svg';
import {useState, useEffect} from "react"
import { useNavigate, Link } from "react-router-dom";

const RegisterMain = () => {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [info, setInfo] = useState("")

    useEffect(()=>{
        if(info === "Successful Login"){
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000);
        }
    })
    const handleLogin = (e) =>{
        e.preventDefault();
        try{
            fetch("http://localhost:7070/api_signUp",{
                method : "POST",
                headers : {"Content-Type" : "application/json"},
                body : JSON.stringify({firstname,lastname,email, password})
            })
                .then(response=>{
                // return response.json()
                    return response.json();
                })
                .then(responseData=>{
                    setInfo(responseData)
                    setFirstname("")
                    setLastname("")
                    setEmail("")
                    setPassword("")
                })

        }catch(err){
            console.log(err.message)
            console.log(email)
        }
    }
    return ( 
        <div className="login-main">
            <div className="left-side">
                <h1>Register Account</h1>
                <p>Register using social accounts</p>

                <div className="social-login-div">
                    <FacebookSvg className="social-login"/>
                    <LinkedInSvg className="social-login"/>
                    <GoogleSvg className="social-login"/>
                </div>

                <div className="or-div">
                    <div className="left-line"></div>
                    <div className="or">OR</div>
                    <div className="right-line"></div>
                </div>

                <form onSubmit={(e)=>{handleLogin(e)}}>
                    <div className="input-txtbx-div">
                        <input
                            type="text"
                            required
                            placeholder="Firstname"
                            className="input-txtbx"
                            name='firstname'
                            value={firstname}
                            onChange={(e)=>{setFirstname(e.target.value)}}
                        />
                    </div>

                    <div className="input-txtbx-div">
                        <input
                            type="text"
                            required
                            placeholder="Lastname"
                            className="input-txtbx"
                            name='lastname'
                            value={lastname}
                            onChange={(e)=>{setLastname(e.target.value)}}
                        />
                    </div>

                    <div className="input-txtbx-div">
                        <input
                            type="email"
                            required
                            placeholder="Email"
                            className="input-txtbx"
                            name='email'
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>
                    <div className="input-txtbx-div">
                        <input
                            type="password"
                            required
                            placeholder="Password"
                            className="input-txtbx"
                            name="password"
                            value={password}
                            onChange = {(e)=>{setPassword(e.target.value)}}
                        />
                    </div>
                    
                    <div className="input-txtbx-div">
                        <p id="info">{info}</p>
                        <input
                            type="submit"
                            required
                            value ="Sign in"
                            className="submit-button"
                        />
                    </div>
                
                </form>
            </div>
            <div className="right-side">
                <div className="content">
                    <h2>New Here?</h2>
                    <p>Sign up and discover a great amount of new opportunities</p>
                    <Link to="/"><button>Sign up</button></Link>
                </div>
            </div>
        </div>
     );
}
 
export default RegisterMain;