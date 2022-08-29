import React from "react";
import "../assets/scss/style.scss";
import Header from "./header";
import Footer from './footer'

const Layout = (props) => {
    console.log(props);
    return  <div>
        <Header/>
        {props.children}
        <Footer/>
    </div>
}


export default Layout;