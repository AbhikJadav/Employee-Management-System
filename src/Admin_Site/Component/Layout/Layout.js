import React, {useState} from 'react';

import "../../Css/layout.css";
import Slidebar from "./Slidebar";
import Header from "./Header";
const Layout = () => {
    const [sidebar,setSideBar]=useState(true);
    const showSideBar=()=>{
        setSideBar(!sidebar);
    }
    return (
    <>
        <div className="main">
            {/*<section id={sidebar?"menu":"menu active"}>*/}

            <Slidebar SideBar={sidebar}/>
            <Header Show={showSideBar} SideBar={sidebar}/>
        </div>
    </>
    );
};

export default Layout;
