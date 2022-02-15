import React, {useState} from 'react';
import "../../Css/login.css"
import userimg from "../../images/user.png";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import Signup_Intialize, {Signup_Admin} from "../../../redux/Action/signup_action";
import {Redirect} from "../../../redux/Action/login_action";

const Signup = () => {
    const [signupFormData,setSignupFormData]=useState({
        email:"",
        password:"",

    })
    const handleChangeEvent=(event)=>{
        const {name,value}=event.target;
        setSignupFormData((prevalue)=>{
            return{...prevalue,
            [name]:value}
        })
    }
    // const [registerEmail,setRegisterEmail]=useState("");
    // const [registerPassword,setRegisterPassword]=useState("");
    const [isAdmin,setIsAdmin]=useState(false);
    const [image,setImage]=useState(null);
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
        // const id=selector.payload.userid;

        dispatch(Signup_Intialize(signupFormData.email,signupFormData.password,isAdmin,image));
        // console.log("sel:",selector.payload.userid);
        setSignupFormData({
            email: "",
            password: ""
        });

    }
    const Login_Link=()=>{
        dispatch(Redirect("/"));
    }
    const Image=()=>{
        dispatch(Redirect("/Image"));
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

                            <input type="email" name="email" placeholder="Email" onChange={handleChangeEvent} value={signupFormData.email} required/>
                            <input type="password" name="password" placeholder="password" onChange={handleChangeEvent} value={signupFormData.password} required/>
                            <input type="file" name="image" onChange={(event)=>{
                                if(event.target.files[0]){
                                    setImage(event.target.files[0]);
                                }
                            }} style={{width:"240px",height:"50px"}}/>

                            {/*<p className="light"><Link to="/Forgot_Password">Forgot password?</Link></p>*/}
                        </div>

                    </div>

                    <footer>
                        <span id="err" style={{color:"red",fontWeight:"bold"}}>{selector.payload.error}</span>
                        {/*<span onClick={Image} style={{color:"navy",fontWeight:"bold"}}>Image</span>*/}
                        <input type="checkbox" name="admin" onChange={(event)=>setIsAdmin(event.target.checked)} checked={isAdmin} /><span style={{color:"navy",fontWeight:"bold"}}>Admin</span>
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
