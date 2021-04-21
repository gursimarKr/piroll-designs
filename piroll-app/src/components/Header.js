import React from 'react'
import "../css/style.css";
import logo from "../assets/logo.png";
const Header = () => {
    return (
        <div>
               <header className="site-header">
              {/* <!-- header --> */}
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="d-flex flex-grow-1">
            <span className="w-100 d-lg-none d-block">
                {/* <!-- hidden spacer to center brand on mobile --> */}
                </span>
            <a className="navbar-brand d-none d-lg-inline-block" href="index.html">
                <img src={logo} alt="pan"/>

            </a>
            <a className="navbar-brand-two mx-auto d-lg-none d-inline-block" href="#">
                {/* <!-- <img src="//placehold.it/40?text=LOGO" alt="logo"> --> */}
            </a>
            <div className="w-100 text-right">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>

        <div className="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
            <ul className="navbar-nav ml-auto flex-nowrap">
                <li className="nav-item">
                    <a href="./home.html" className="nav-link m-2 menu-item ">Home</a>
                </li>
                <li className="nav-item">
                    <a href="./about.html" className="nav-link m-2 menu-item ">About</a>
                </li>
                <li className="nav-item">
                    <a href="./contact.html" className="nav-link m-2 menu-item ">Contact</a>
                </li>   <li className="nav-item">
                    <a href="./contact.html" className="nav-link m-2 menu-item ">Login</a>
                </li>
            </ul>
        </div>
    </nav>
    {/* <!-- ---- --> */}
        </header>

        
        </div>
    )
}
export default Header
