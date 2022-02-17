import React, {useEffect} from 'react';
import Layout from "../Layout/Layout";
import {useDispatch, useSelector} from "react-redux";
import Show_Employee_Intialize from "../../../redux/Action/show_Employee_Action";
import {logger} from "redux-logger/src";
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
    return (
        <>

            <Layout/>
            <div className="main_employee">
                <div className="add_Employee_Container" >
                    <div className="col-md-7 col-lg-8">
                        <h3>Show Employee</h3>

                        <table className="table mt-5">
                            <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Dob</th>
                                <th>Gender</th>
                                <th>Address</th>
                                <th>Image</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                selector.payload.table.map((element)=>{
                                    return(
                                        <tr>
                                            <td>{element.data.empdata.username}</td>
                                            <td>{element.data.empdata.email}</td>
                                            <td>{element.data.empdata.dob}</td>
                                            <td>{element.data.empdata.gender}</td>
                                            <td>{element.data.empdata.address}</td>
                                            <td>{element.data.empdata.image}</td>

                                            <td><a href="#">Edit</a></td><td><a href="#">Delete</a></td>
                                        </tr>

                                    )
                                    console.log("address:",element.data.empdata.dob);
                                })
                            }

                            </tbody>
                        </table>

                     </div>
                </div>
            </div>
        </>
    );
};

export default Show_Employee;
