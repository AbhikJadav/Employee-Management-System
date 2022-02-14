import React from 'react';
import "../../Css/error.css";
import {Redirect} from "../../../redux/Action/login_action";
import {useDispatch} from "react-redux";

const Error = () => {
    const dispatch=useDispatch();
    const home=()=>{
        dispatch(Redirect("/"));
    }
    return (

        <>
            <div className="error_content">
                <div className="mainbox">
                    <div className="err">4</div>
                    <i className="far fa-question-circle fa-spin error_icon"></i>
                    <div className="err2">4</div>
                    <div className="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed
                        in the first place?<p>Let's go <span onClick={home}>Home</span> and try from there.</p></div>
                </div>
            </div>
        </>
    );
};

export default Error;
