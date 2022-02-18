import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import Update_Employee_Intialize from "../../../redux/Action/Update_Employee_Action";
import {useDispatch, useSelector} from "react-redux";

const Edit_Employee = (props) => {

    // const [modalShow, setModalShow] = React.useState(false);
    const [modalShow, setModalShow] = React.useState(false);
    const [image,setImage]=useState(null);
    const selector=useSelector((state => state.employee_reducer));
    const dispatch=useDispatch();
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
    // const upd_Employee=()=>{
    //
    //     // dispatch(Add_Employee_Intialize(employeeFormData.email,employeeFormData.password,employeeFormData,image,isAdmin));
    //     setEmployeeFormData({
    //         email: "",
    //         password: "",
    //         username: "",
    //         gender:"",
    //         dob:"",
    //         address: "",
    //
    //     });
    // }

    const Edit_btn=()=>{
        setModalShow(true);
        // props.onSubmit_Edit(props.emp_id);
        props.onSubmit(props.employee_id);
        const emp_id=selector.payload.table.findIndex((element,index)=>element.id===props.employee_id);

        // console.log("emp_id:",props.emp_id);
        setEmployeeFormData({
            email:selector.payload.table[emp_id].data.empdata.email,
            username:selector.payload.table[emp_id].data.empdata.username,
            gender:selector.payload.table[emp_id].data.empdata.gender,
            dob:selector.payload.table[emp_id].data.empdata.dob,
            address:selector.payload.table[emp_id].data.empdata.address,

        })
        setImage(selector.payload.table[emp_id].data.image);
    }

    const Update_Employee=()=>{

        setModalShow(false);
       dispatch( Update_Employee_Intialize(props.employee_id,employeeFormData));
        // console.log(props.employee_id);

    }

    return (
        <>
            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Update Employee
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="container-xxl" style={{width:"100%"}}>

                        {/*<div className="main">*/}
                            <div className="col-lg-12">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Employee Name"
                                       name="username" onChange={handleChangeEvent} value={employeeFormData.username} required=""/>

                            </div>

                            <div className="col-12 mt-3">
                                <label htmlFor="email" className="form-label">Email </label>
                                <input type="email" className="form-control" id="email" name="email" placeholder="you@example.com" onChange={handleChangeEvent} value={employeeFormData.email} />

                            </div>
                            {/*<div className="col-12 mt-3">*/}
                            {/*    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>*/}

                            {/*    <input type="password" className="form-control" id="password" name="password" placeholder="Enter Employee Password"*/}
                            {/*           onChange={handleChangeEvent} value={employeeFormData.password} required/>*/}
                            {/*</div>*/}
                            <div className="col-12 mt-3">
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
                            <div className="col-12 mt-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea className="form-control" id="address" placeholder="1234 Main St"
                                          required="" onChange={handleChangeEvent} value={employeeFormData.address} name="address"/>

                            </div>
                            <div className="col-sm-6 mt-3">
                                <label htmlFor="image" className="form-label">Image</label>
                                <input type="file" className="form-control " id="image"
                                       required=""
                                       onChange={(event)=>{
                                           if(event.target.files[0]){
                                               setImage(event.target.files[0]);
                                           }
                                       }} name="image" />
                            </div>
                        {/*</div>*/}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-primary" onClick={Update_Employee}>Update</button>
                    <button className="btn btn-danger" onClick={() => setModalShow(false)}>Close</button>
                </Modal.Footer>
            </Modal>
            <td><button className="btn btn-outline-dark" onClick={Edit_btn}>
                Edit
            </button></td>
        </>
    );
};

export default Edit_Employee;
