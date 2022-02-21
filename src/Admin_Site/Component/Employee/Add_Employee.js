import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import Add_Employee_Intialize from "../../../redux/Action/Add_Employee_Action";
import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {storage} from "../Authentication/Firebase";
import {Redirect} from "../../../redux/Action/login_action";
import Show_Employee_Intialize from "../../../redux/Action/show_Employee_Action";
// import Redirect from "../../../redux/Action/login_action";
const Add_Employee = () => {
    const [employeeFormData,setEmployeeFormData]=useState({
        email:"",
        password:"",
        username:"",
        gender:"",
        dob:"",
        address:"",

    })

    const handleChangeEvent=(event)=>{

        const {name,value}=event.target;
        setEmployeeFormData((prevalue)=>{
            return{...prevalue,
                [name]: value}
        })

    }
    const [isAdmin,setIsAdmin]=useState(false);
    const [image,setImage]=useState(null);

    const dispatch=useDispatch();
    const selector=useSelector((state => state.employee_reducer));

    // const params=(useParams().postId);
    // console.log("params",params);
    // selector.payload.table.map((element,index)=>{
    //     console.log("emp_data:",element.data.empdata);
    // })
    // console.log("selector:",selector.payload.table);
    // const emp_id=selector.payload.table.findIndex((element,index)=>element.id===params);
    // console.log("email:",selector.payload.table[emp_id].data.empdata.email);
    // console.log("username:",selector.payload.table[emp_id].data.empdata.username);
    // console.log("gender:",selector.payload.table[emp_id].data.empdata.gender);
    // console.log("dob:",selector.payload.table[emp_id].data.empdata.dob);
    // console.log("address:",selector.payload.table[emp_id].data.empdata.address);

    const add_Employee=()=>{

        dispatch(Add_Employee_Intialize(employeeFormData.email,employeeFormData.password,employeeFormData,image,isAdmin));
        setEmployeeFormData({
            email: "",
            password: "",
            username: "",
            gender:"",
            dob:"",
            address: "",

        });
        // dispatch(Redirect("/Show_Employee"));
        dispatch(Redirect("/Show_Employee"));
        dispatch(Show_Employee_Intialize());
    }
    return (
        <>
            <Layout/>
            {/*<h2 style={{marginTop:"130px",marginLeft:"300px"}} className="mb-3"></h2>*/}
            <div className="main_employee">
            <div className="add_Employee_Container" >
            <div className="col-md-7 col-lg-8">
                <h3>Add Employee</h3>

                    <div className="row g-3 mt-2">
                        <div className="col-12">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter Employee Name"
                                   name="username" onChange={handleChangeEvent} value={employeeFormData.username} required=""/>

                        </div>

                        <div className="col-12">
                            <label htmlFor="email" className="form-label">Email </label>
                            <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" onChange={handleChangeEvent} value={employeeFormData.email} />

                        </div>
                        <div className="col-12">
                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>

                                <input type="password" className="form-control" id="password" name="password" placeholder="Enter Employee Password"
                                       onChange={handleChangeEvent} value={employeeFormData.password} required/>
                        </div>
                        <div className="col-12">
                            <label htmlFor="inputDob" className="col-sm-2 col-form-label">Date of Birth</label>
                                <div className="col-5">
                                <input type="date" className="form-control" id="dob" name="dob" placeholder=""
                                       onChange={handleChangeEvent} value={employeeFormData.dob} required/>
                                </div>
                        </div>

                        <div className="my-3">
                            <label htmlFor="gender" className="col-sm-2 col-form-label">Gender</label>

                                <input className="mt-3" type="radio" name="gender" value="Male" onChange={handleChangeEvent} checked={employeeFormData.gender==="Male"} />
                                <label className="form-check-label ms-1" >Male</label>
                                <input className="mt-3 ms-4" type="radio" name="gender" value="Female" onChange={handleChangeEvent} checked={employeeFormData.gender==="Female"}/>
                                <label className="form-check-label ms-1" >Female</label>

                        </div>
                        <div className="col-12">
                            <label htmlFor="address" className="form-label">Address</label>
                            <textarea className="form-control" id="address" placeholder="1234 Main St"
                                      required="" onChange={handleChangeEvent} value={employeeFormData.address} name="address"/>

                        </div>
                        <div className="col-sm-6">
                            <label htmlFor="image" className="form-label">Image</label>
                            <input type="file" className="form-control " id="image"
                                      required=""
                                onChange={(event)=>{
                                if(event.target.files[0]){
                                    setImage(event.target.files[0]);
                                }
                            }} name="image" />
                            <div className="progress-bar progress-bar-striped mt-2" style={{width:"100%"}}>
                                {`uploading image`}
                            </div>
                        </div>
                        {/*<div className="col-sm-6">*/}
                        {/*    <label htmlFor="image" className="form-label">Image</label>*/}

                        {/*    <img src={url} height="100px" width="300px"/>*/}
                        {/*</div>*/}
                    </div>

                <hr className="my-4"/>
                    <div className="col-12 d-flex justify-content-center">
                    <div className="col-12">
                    <button className="w-100 btn btn-primary btn-lg" onClick={add_Employee}>Add Employee
                    </button>
                    </div>
                    </div>
            </div>
            </div>
            </div>
        </>
    );
};

export default Add_Employee;
