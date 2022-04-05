import "../../styles/contactus.css"
import Location from "../../images/location.png"
import Phone from "../../images/phone.png"
import Email from "../../images/email.png"
const Contactus = () =>{
    return(
        <div className="contactus">
            <h1>Contact us</h1>
            <div>
                <div className="contact">
                    <img src={Location} alt="Location_picture"/>
                    <h3>Our Address</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida, quam sed laoreet facilisis</p>
                </div>
                <div className="contact">
                    <img src={Phone} alt="Phone_picture"/>
                    <h3>By Phone</h3>
                    <p>+234-703-611-5256</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida, quam sed laoreet facilisis</p>
                </div>
                <div className="contact">
                    <img src={Email} alt="Email_picture"/>
                    <h3>By Mail</h3>
                    <p>isaiahekundayo17@gmail.com</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse gravida, quam sed laoreet facilisis</p>
                </div>
            </div>
        </div>
    )
}
export default Contactus