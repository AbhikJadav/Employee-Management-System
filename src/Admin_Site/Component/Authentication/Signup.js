import React, {useState} from 'react';
import "../../Css/login.css"
import userimg from "../../images/user.png";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Signup_Intialize from "../../../redux/Action/signup_action";
import {Redirect} from "../../../redux/Action/login_action";
const Signup = () => {
    const [registerEmail,setRegisterEmail]=useState("");
    const [registerPassword,setRegisterPassword]=useState("");
    const dispatch=useDispatch();
    const selector=useSelector((state => state.signup_reducer));
    const navigate=useNavigate();

    // useEffect(()=>{
    //     if(selector.payload.login==true)
    //     {
    //         navigate("/Login");
    //     }
    // },[selector.payload.login]);
    const signIn=()=>{
        dispatch(Signup_Intialize(registerEmail,registerPassword));
        // console.log("sel:",selector);
        setRegisterEmail("");
        setRegisterPassword("");

    }
    const Login_Link=()=>{
        dispatch(Redirect("/"));
    }
    return (

        <>
            <div className="content">
                <div className="app">

                    <div className="bg"></div>

                    <div className="form">
                        <header>
                            <img src={userimg}/><br/>
                            <span className="header-login">Signup</span>
                        </header>

                        <div className="inputs">
                            <input type="email" name="" placeholder="Email" onChange={(event)=>setRegisterEmail(event.target.value)} value={registerEmail} required/>
                            <input type="password" name="" placeholder="password" onChange={(event)=>setRegisterPassword(event.target.value)} value={registerPassword} required/>

                            {/*<p className="light"><Link to="/Forgot_Password">Forgot password?</Link></p>*/}
                        </div>

                    </div>

                    <footer>
                        <button onClick={signIn} className="button">Signup Here</button>
                        {/*<p>Go To! <Link to="/" className="Link">Login</Link></p>*/}
                        <p>Go To! <span onClick={Login_Link} className="Link">Login</span></p>
                    </footer>


                </div>
            </div>
        </>
    );
};

export default Signup;
