import React from 'react';
import Layout from "../Layout/Layout";

const Add_Employee = () => {
    return (
        <>
            <Layout/>
            <h1 style={{marginTop:"150px",marginLeft:"310px"}}>Add Employee</h1>
            <div className="add_Employee_Container">

            <div className="">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1"
                       placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            </div>
        </>
    );
};

export default Add_Employee;
