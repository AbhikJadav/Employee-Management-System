import React, {useEffect, useState} from 'react';
// import Admin from "./Admin_Site/Component/Admin";
import Login from "./Admin_Site/Component/Authentication/Login";
import Layout from "./Admin_Site/Component/Layout/Layout";
import Signup from "./Admin_Site/Component/Authentication/Signup";
import Forgot_Password from "./Admin_Site/Component/Authentication/Forgot_Password";
import {Routes,Route} from "react-router";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Home from "./Employee_Site/Component/Home";
const App = () => {
    const [islogin,setIsLogin]=useState(null);
    useEffect(()=>{
        if(localStorage.getItem("auth"))
        {
            setIsLogin(true);
        }

    },[localStorage.getItem("auth")])
    const selector=useSelector((state=>state.signup_reducer));
    const navigate=useNavigate();
    const redirect = selector.payload.redirect;
    useEffect(()=>{
        if(redirect){
            navigate(`${redirect}`);
        }

    },[redirect,navigate])

    return (
        <>

                <Routes>

                    {/*<Route path="/" element={<Login/>}></Route>*/}
                    <Route path="/" element={<Login/>}></Route>
                    {/*<Route path="/Signup" element={<Signup/>}></Route>*/}
                    <Route path="/Signup" element={<Signup/>}></Route>
                    <Route path="/Forgot_Password" element={<Forgot_Password/>}></Route>


                    {/*<Route path="/Layout" element={<Layout/>}></Route>*/}
                    {islogin == true ? <Route path="/Layout" element={<Layout/>}></Route> :""}
                    <Route path="/Home" element={<Home/>}></Route>
                </Routes>
            {/*{islogin === null ? "" :*/}
            {/*    <Routes>*/}
            {/*        /!*<Route path="/Layout" element={<Layout/>}></Route>*!/*/}

            {/*        {       islogin == true ? <Route path="/Layout" element={<Layout/>}></Route> :<Route path="/" element={<Login/>}></Route> }*/}
            {/*    </Routes>*/}
            {/*}*/}
            {/*    <Routes>*/}
            {/*        <Route path="/Home" element={<Home/>}></Route>*/}
            {/*    </Routes>*/}



        </>
    );
};

export default App;
