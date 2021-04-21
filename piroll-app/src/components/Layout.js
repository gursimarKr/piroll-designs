import React from 'react'
import Footer from './Footer'
import Header from './Header'
import "../css/style.css";
const Layout = (props) => {
    return (
        <div className="site-container">
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}
export default Layout