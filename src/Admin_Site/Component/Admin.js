import React, {useState} from 'react';
import Post_Intialize from "../../redux/Action/addadmin_action";
import {useDispatch} from "react-redux";

const Admin = () => {
    const dispatch=useDispatch();
    const [formData,setFormData]=useState({
        uname:"",
        email:"",
        password:"",
    })
    const inputevent=(event)=>{
        const {name,value}=event.target;
        setFormData((prevalue)=>{
            return{...prevalue,
                    [name]:value,}
        })
    }
    const insert=()=>{
        const data=JSON.stringify(formData);
        dispatch(Post_Intialize(data));
    }
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="m-4 w-50">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                        <input type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" name="uname" value={formData.uname} onChange={inputevent}/>
                        {/*<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={formData.email} onChange={inputevent}/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="text" className="form-control" id="exampleInputPassword1" name="password" value={formData.password} onChange={inputevent}/>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={insert}>Submit</button>
                </div>



            </div>

        </>
    );
};

export default Admin;
