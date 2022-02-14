import React, {useEffect, useState} from 'react';
import "../../Css/login.css"
import userimg from "../../images/login.png";
import {useDispatch, useSelector} from "react-redux";
import Login_Intialize from "../../../redux/Action/login_action";
import {Redirect} from "../../../redux/Action/login_action";
import {Link, useNavigate} from "react-router-dom";

const Login = () => {

    const[loginFormData,setLoginFormData]=useState({
        email:"",
        password:"",
    })
    const inputEvent=(event)=>{
        const{name,value}=event.target;
        setLoginFormData((prevalue)=>{
            return{...prevalue,
            [name]:value}
        })
    }


    const dispatch=useDispatch();
    const selector=useSelector((state=>state.signup_reducer));
    const redirect = selector.payload.redirect;
    const navigate=useNavigate();


     const logIn=()=>{


            dispatch(Login_Intialize(loginFormData.email,loginFormData.password));
            // console.log(loginFormData.password.length);
            // console.log("sel:", selector);


        setLoginFormData({email: "",password: ""})

    }
    const FPassword_Link=()=>{
        dispatch(Redirect("/Forgot_Password"));
    }
    const Signup_Link=()=>{
        dispatch(Redirect("/Signup"));
    }
    return (

        <>
            <div className="content">
                <div className="app">

                    <div className="bg"></div>

                    <div className="form">
                        <header>
                            <img src={userimg}/><br/>
                            <span className="header-login">Login</span>
                                    </header>

                        <div className="inputs">
                            <input type="email" name="email" id="email" placeholder="Email" onChange={inputEvent} value={loginFormData.email} required/>

                                <input type="password" name="password" id="password" placeholder="Password" onChange={inputEvent} value={loginFormData.password} required/>

                                    <p className="light">
                                        {/*<Link to="/Forgot_Password">Forgot password?</Link>*/}
                                        <span onClick={FPassword_Link} className="Link">Forgot Password?</span>
                                    </p>
                        </div>

                    </div>

                    <footer>

                        <span id="err" style={{color:"red",fontWeight:"bold"}}>{selector.payload.error}</span>
                        {/*<span id="errEmail" style={{color:"red"}}></span>*/}
                        {/*<span id="errPassword" style={{color:"red"}}></span>*/}
                        <button onClick={logIn} className="button">Login Here</button>
                        {/*<p>Don't have an account?<Link to="/Signup" className="Link">Sign Up</Link></p>*/}
                        <p>Don't have an account?<span onClick={Signup_Link} className="Link">Sign Up</span></p>
                    </footer>


                </div>
            </div>
        </>
    );
};

export default Login;
