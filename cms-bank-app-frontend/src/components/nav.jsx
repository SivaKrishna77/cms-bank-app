import React from "react";
import { Link } from "react-router-dom";
import "../style/nav.css"
function Nav() {


    const navbar = React.useRef();
    const [isClicked, setIsClicked] = React.useState(false);


    const navToggle = () => {

        if (isClicked) {
            navbar.current.style.display = "none"

        } else {
            navbar.current.style.display = "flex";
        }
    }




    return (<nav>

        <i onClick={() => {
            setIsClicked(!isClicked);
            navToggle();
        }} id="hamburger" className={isClicked === true ? "fas fa-times" : "fas fa-bars"} ></i>

        <ul ref={navbar} id="navbar">
            <Link to="/">
                <li>Home</li>
            </Link>
            <Link to="/add">
                <li>Add Customer</li>
            </Link>
            <Link to="/view">
                <li>View All Customers</li>
            </Link>

        </ul>
    </nav>);
}

export default Nav;