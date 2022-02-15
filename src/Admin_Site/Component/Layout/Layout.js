import React, {useState} from 'react';

import "../../Css/layout.css";
import Slidebar from "./Slidebar";
import Header from "./Header";
const Layout = () => {
    const [sidebar,setSideBar]=useState(true);
    const showSideBar=()=>{
        setSideBar(!sidebar);
    }
    const [dropDown,setDropDown]=useState(true);
    const showDropDown=()=>{
        setDropDown(!dropDown);
    }

    return (
    <>
        <div className="main">
            {/*<section id={sidebar?"menu":"menu active"}>*/}

            <Slidebar SideBar={sidebar} ShowDropDown={showDropDown} DropDown={dropDown}/>
            <Header Show={showSideBar} SideBar={sidebar}/>
        </div>
    </>
    );
};

export default Layout;
