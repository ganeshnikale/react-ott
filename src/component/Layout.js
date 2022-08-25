import React from "react";
import "../assets/scss/style.scss";

const Layout = (props) => {
    console.log(props);
    return  <div>
        
{props.children}
    </div>
}


export default Layout;