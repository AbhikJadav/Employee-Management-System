import React, {useState} from 'react';
import "../../Css/login.css"
import fpass from "../../images/fpassword.png";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Forgot_Password_Initialize from "../../../redux/Action/forgot_password_action";
import {Redirect} from "../../../redux/Action/login_action";
const Forgot_Password = () => {
    const [fEmail,setFEmail]=useState("");
    const dispatch=useDispatch();
    const selector=useSelector((state => state.signup_reducer));
    const Submit=()=>{
        dispatch(Forgot_Password_Initialize(fEmail));
        // alert("Goto Check Your Email");
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
                            <img src={fpass}/><br/>
                            <span className="header-login">Forgot Password</span>
                        </header>

                        <div className="inputs">
                            <input type="text" name="" placeholder="Email" onChange={(event)=>setFEmail(event.target.value)} value={fEmail} required/>
                            {/*<input type="text" name="" placeholder="password" onChange={(event)=>setRegisterPassword(event.target.value)} value={registerPassword} required/>*/}

                            {/*<p className="light"><Link to="/Forgot_Password">Forgot password?</Link></p>*/}
                        </div>

                    </div>

                    <footer>
                        <button onClick={Submit} disabled={!fEmail} className="button">Submit</button>
                        {/*<p>Go To! <Link to="/" className="Link">Login</Link></p>*/}
                        <p>Go To! <span onClick={Login_Link} className="Link">Login</span></p>
                    </footer>


                </div>
            </div>
        </>
    );
};

export default Forgot_Password;
