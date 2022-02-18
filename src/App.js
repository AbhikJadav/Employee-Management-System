import React, {useEffect, useState} from 'react';
// import Admin from "./Admin_Site/Component/Admin";
import Login from "./Admin_Site/Component/Authentication/Login";
import Layout from "./Admin_Site/Component/Layout/Layout";
import Signup from "./Admin_Site/Component/Authentication/Signup";
import Forgot_Password from "./Admin_Site/Component/Authentication/Forgot_Password";
import Error from "./Admin_Site/Component/Authentication/Erros";
import {Routes, Route} from "react-router";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import Home from "./Employee_Site/Component/Home";
import Add_Employee from "./Admin_Site/Component/Employee/Add_Employee";
import Image_Upload from "./Admin_Site/Component/Authentication/Image_Upload";
import Dashboard from "./Admin_Site/Component/Dashboard";
import Show_Employee from "./Admin_Site/Component/Employee/Show_Employee";

const App = () => {
    const [isAdminlogin, setIsAdminLogin] = useState(null);
    const [isEmplogin, setIsEmpLogin] = useState(null);
    useEffect(() => {
        if (localStorage.getItem("Admin")) {
            setIsAdminLogin(true);
        } else {
            setIsAdminLogin(false);
        }
    }, [localStorage.getItem("Admin")])
    useEffect(() => {
        if (localStorage.getItem("Employee")) {
            setIsEmpLogin(true);
        } else {
            setIsEmpLogin(false);
        }
    }, [localStorage.getItem("Employee")])
    const selector = useSelector((state => state.signup_reducer));
    const navigate = useNavigate();
    const redirect = selector.payload.redirect;
    useEffect(() => {
        if (redirect) {
            navigate(`${redirect}`);
        }

    }, [redirect, navigate])

    return (
        <>

            {
                isAdminlogin === null ? "" :
                    isAdminlogin ?
                        <Routes>
                            <Route path="/Layout" element={<Layout/>}></Route>
                            <Route path="/Dashboard" element={<Dashboard/>}></Route>
                            <Route path="/Add_Employee" element={<Add_Employee/>}></Route>  {/*this is for add employee profile.*/}

                            <Route path="/Show_Employee" element={<Show_Employee/>}></Route>

                            <Route path="*" element={<Layout/>}></Route>
                        </Routes>
                         :

                         isEmplogin ?
                             <Routes>
                                 <Route path="/Home" element={<Home/>}></Route>
                             </Routes>
                        :
                        <Routes>
                            <Route path="/" element={<Login/>}></Route>
                            <Route path="/Signup" element={<Signup/>}></Route>
                            <Route path="/Forgot_Password" element={<Forgot_Password/>}></Route>
                            <Route path="/Image" element={<Image_Upload/>}></Route>
                            <Route path="*" element={<Error/>}></Route>
                        </Routes>

            }


        </>
    );
};

export default App;
