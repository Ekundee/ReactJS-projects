import {Link} from "react-router-dom"

const Navbar = () => {
    return(
        <nav className="navbar">
            <div className="companyName">
                <h1>Ekundee's Blog</h1>
            </div>   
            <div className="navbarLinks">
                <ul>
                    <li><Link to="/home"> Home </Link></li>
                    <li><Link to="/create"> New blog </Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;