import React from "react";
import "../assets/scss/style.scss";
import Header from "./header";
import Footer from './footer'

const Layout = (props) => {
    console.log(props);
    return  <div className="container">
        <div className="row">
            <div className="col-12">
                <Header/>
                {props.children}
                <Footer/>
            </div>
        </div>
    </div>
}


export default Layout;