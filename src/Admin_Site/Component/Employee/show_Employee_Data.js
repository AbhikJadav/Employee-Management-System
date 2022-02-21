import React, {useEffect, useState} from 'react';
import Edit_Employee from "./Edit_Employee";
import Modal from "react-bootstrap/Modal";
import {useDispatch, useSelector} from "react-redux";
import Image_Upload_Intialize from "../../../redux/Action/Image_Upload_Action";

const Show_Employee_Data = (props) => {
    // const [modalShow, setModalShow] = React.useState(false);
    // const Edit_btn=()=>{
    //     setModalShow(true);
    //     props.onSubmit_Edit(props.emp_id);
    // }

    const {id,emp_id,username,email,password,gender,dob,address,image,onSubmit_Del,onSubmit_Edit}=props;
    const [modalShow, setModalShow] = React.useState(false);
    const dispatch=useDispatch();
    const selector=useSelector((state=>state.employee_reducer));
    const [imgUrlData,setImgUrlData]=useState(null);
    useEffect(()=>{

        console.log("my_url:",selector.payload.url_Data);
        setImgUrlData(selector.payload.url_Data);
    },[selector.payload.url_Data]);
    const img_btn=()=> {
        setModalShow(true)
        dispatch(Image_Upload_Intialize(email,password));

    }
    return (
        <>

            <Modal
                show={modalShow}
                onHide={() => setModalShow(false)}
                size="sm"
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Image
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{width:"700px"}}>
                    <img src={imgUrlData}/>
                </Modal.Body>
                <Modal.Footer>

                    <button className="btn btn-primary" onClick={() => setModalShow(false)}>Close</button>
                </Modal.Footer>
            </Modal>

            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                {/*<td>{password}</td>*/}
                <td>{dob}</td>
                <td>{gender}</td>
                <td>{address}</td>
                <td><button className="btn btn-outline-primary" onClick={img_btn}>
                    {image}
                </button></td>
                {/*<td><button className="btn btn-outline-primary">{image}</button></td>*/}
                <Edit_Employee onSubmit={onSubmit_Edit} employee_id={emp_id}/>
                    {/*<button className="btn btn-outline-dark" onClick={()=>props.onSubmit_Edit(props.emp_id)}>Edit</button></td><td>*/}

                    <td><button className="btn btn-outline-danger" onClick={()=>onSubmit_Del(emp_id,email,password,image)} >Delete</button></td>


            </tr>

        </>
    );
};

export default Show_Employee_Data;
