import React from 'react';
import Edit_Employee from "./Edit_Employee";
const Show_Employee_Data = (props) => {
    // const [modalShow, setModalShow] = React.useState(false);
    // const Edit_btn=()=>{
    //     setModalShow(true);
    //     props.onSubmit_Edit(props.emp_id);
    // }
    const {id,emp_id,username,email,password,gender,dob,address,image,onSubmit_Del,onSubmit_Edit}=props;
    return (
        <>

            <tr>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                {/*<td>{password}</td>*/}
                <td>{dob}</td>
                <td>{gender}</td>
                <td>{address}</td>
                <td>{image}</td>

                <Edit_Employee onSubmit={onSubmit_Edit} employee_id={emp_id}/>
                    {/*<button className="btn btn-outline-dark" onClick={()=>props.onSubmit_Edit(props.emp_id)}>Edit</button></td><td>*/}

                    <td><button className="btn btn-outline-danger" onClick={()=>onSubmit_Del(emp_id,email,password)} >Delete</button></td>


            </tr>

        </>
    );
};

export default Show_Employee_Data;
