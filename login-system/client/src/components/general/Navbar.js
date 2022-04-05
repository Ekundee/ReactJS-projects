import {ReactComponent as Hamburger} from "../../images/hamburger.svg"
import {ReactComponent as CloseHamburger} from "../../images/close.svg"
import {useMediaQuery} from "react-responsive";
import {Link} from 'react-router-dom'
const Navbar = () => {
   

    const handleHamburger = () =>{
        const hamburger = document.querySelector(".hamburger")
        const closeHamburger = document.querySelector(".closeHamburger")
        const nav = document.querySelector(".nav-links")
                
        nav.style.display = "flex"
        hamburger.style.display= "none"
        closeHamburger.style.display= "flex"
    
    }

    const handleCloseHamburger = () =>{
        const hamburger = document.querySelector(".hamburger")
        const closeHamburger = document.querySelector(".closeHamburger")
        const nav = document.querySelector(".nav-links")


        nav.style.display = "none"
        hamburger.style.display= "flex"
        closeHamburger.style.display= "none"

    }

   
    
    const isMobile = useMediaQuery({query:'(max-width : 700px)'})

    let companyNameResponsive = {}
    let closeHamburger = {}
    let navLinksUl = {}
    let NavbarRes = {}
    let navLinksUlLi = {}
    let navLinks ={}

    if(isMobile){
        companyNameResponsive = {
            width : "100%",
            justifyContent : "space-between",
        }

        closeHamburger={
            display: "none",
            width : "35px"
        }

        NavbarRes={
            display: "flex",
            width: "100%",
            flexDirection : "column",
            zIndex: "2",
        }

        navLinksUl={
            display: "flex",
            flexDirection: "column",
            width: "100%",
            paddingRight: "50px",
        }

        navLinksUlLi={
            borderBottom: "1px solid grey",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "100%",
        }

        navLinks ={
            display: "none",
            backgroundColor: "white",
            width: "100%",
            justifyContent: "flex-start",
        }
    }

    const handleLinkCloseHamburger = () => {
        if(isMobile){
             const hamburger = document.querySelector(".hamburger")
            const closeHamburger = document.querySelector(".closeHamburger")
            const nav = document.querySelector(".nav-links")


            nav.style.display = "none"
            hamburger.style.display= "flex"
            closeHamburger.style.display= "none"
        }
    }
 

    return ( 
        <nav className="Navbar" style={NavbarRes}>
            <div className="company-name" style={companyNameResponsive}>
                <h2>Ekundee ReactJs</h2>
                {isMobile && <Hamburger className="hamburger" onClick={handleHamburger}/>}
                {isMobile && <CloseHamburger className="closeHamburger" style={closeHamburger} onClick={handleCloseHamburger}/>}
            </div>
           
            
            <div className="nav-links" style={navLinks}>
                <ul style={navLinksUl}>
                    <li style={navLinksUlLi} onClick={handleLinkCloseHamburger}><Link to="/">Home</Link></li>
                    <li style={navLinksUlLi} onClick={handleLinkCloseHamburger}><Link to="/aboutus">About&nbsp;Us</Link></li>
                    <li style={navLinksUlLi} onClick={handleLinkCloseHamburger}><Link to="/contactus">Contact&nbsp;Us</Link></li>
                    <li style={navLinksUlLi} onClick={handleLinkCloseHamburger}><Link to="/services">Services</Link></li>
                </ul>
            </div>
        
        </nav>
    );
}
 
export default Navbar;