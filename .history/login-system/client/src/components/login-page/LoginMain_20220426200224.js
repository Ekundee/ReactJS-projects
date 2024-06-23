import { ReactComponent as FacebookSvg } from '../../images/facebook.svg';
import { ReactComponent as LinkedInSvg } from '../../images/linkedin.svg';
import { ReactComponent as GoogleSvg } from '../../images/google.svg';
import {useState, useEffect} from "react"
import { useNavigate, Link } from "react-router-dom";
import { lo


const LoginMain = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [info , setInfo] = useState("")

    useEffect(()=>{
        if(info === "Successful Login"){
            setTimeout(() => {
                navigate("/dashboard")
            }, 2000);
        }
    })

    const handleLogin = (e) =>{
        e.preventDefault();
        const data = {
            firstname : "firstname",lastname : "lastname",email, password
        }

        const responseData = loginApi(data)
        setInfo(responseData)
      
    }
    return ( 
        <div className="login-main">
            <div className="left-side">
                <h1>Login to Your Account</h1>
                <p>Login using social accounts</p>

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
                    <Link to="/signup" className="buttonLink"><button>Sign up</button></Link>
                </div>
            </div>
        </div>
     );
}
 
export default LoginMain;