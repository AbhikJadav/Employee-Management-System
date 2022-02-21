import React, {useEffect, useState} from 'react';
import Layout from "../Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import Show_Employee_Intialize from "../../../redux/Action/show_Employee_Action";
import show_Employee_Data from "../Employee/show_Employee_Data";
import Show_Employee_Data from "../Employee/show_Employee_Data";
import Delete_Employee_Intialize from "../../../redux/Action/delete_Employee_Action";
import {Redirect} from "../../../redux/Action/login_action";
import Update_Employee_Intialize from "../../../redux/Action/Update_Employee_Action";
const Show_Employee = () => {
    const disptach=useDispatch();
    const selector=useSelector((state=>state.employee_reducer));
    // useEffect(()=>{
    //     console.log("sel:",selector.payload.data);
    // },[selector.payload.data])
    useEffect(()=>{
        disptach(Show_Employee_Intialize());

    //    console.log("selector:",selector.payload.table);
    },[disptach])
    const Delete_Event=(id,email,password)=>{
        // console.log("id",id);
        // console.log("emai:",email);
        // console.log("password",password);
        disptach(Delete_Employee_Intialize(id,email,password));
    }
    const Edit_Event=(id)=>{
        console.log("id",id);

        // console.log("emai:",email);
        // console.log("password",password);
        //  disptach(Update_Employee_Intialize(id));
    }
    // {
    //     selector.payload.table.map((element,index)=> {
    //         console.log("image:",element.data.image)
    //     })
    // }
    const add_Employee=()=>{
        disptach(Redirect("/Add_Employee"));
    }
    return (
        <>

            <Layout/>
            <div className="main_employee">
                <div className="add_Employee_Container" >
                    <div className="col-md-7 col-lg-8">
                        <div className="header_add_Employee">
                            <div className="title"><h3>Show Employee</h3></div>
                            <div><button className="show_Add_btn btn btn-dark" onClick={add_Employee}>Add Employee</button></div>
                        </div>
                        <div className="table_data">

                        <table className="table mt-5">
                            <thead>
                            {selector.payload.table.length?<tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Dob</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>:null}
                            </thead>
                            <tbody>
                            {

                                selector.payload.table.map((element,index)=>{
                                    return(

                                            <Show_Employee_Data key={index}
                                                                id={index+1}
                                                                emp_id={element.id}

                                                                username={element.data.empdata.username}
                                                                email={element.data.empdata.email}
                                                                password={element.data.empdata.password}
                                                                dob={element.data.empdata.dob}
                                                                gender={element.data.empdata.gender}
                                                                address={element.data.empdata.address}
                                                                image={element.data.image}
                                                                onSubmit_Del={Delete_Event}
                                                                onSubmit_Edit={Edit_Event}
                                            />





                                    )
                                    // console.log("address:",element.data.empdata.dob);
                                })
                            }

                            </tbody>
                        </table>
                        </div>
                     </div>
                </div>
            </div>
        </>
    );
};

export default Show_Employee;
