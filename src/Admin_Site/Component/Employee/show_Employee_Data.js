import React from 'react';

const Show_Employee_Data = (props) => {
    return (
        <>
            <tr>
                <td>{props.id}</td>
                <td>{props.username}</td>
                <td>{props.email}</td>
                <td>{props.dob}</td>
                <td>{props.gender}</td>
                <td>{props.address}</td>
                <td>{props.image}</td>

                <td><button className="btn btn-outline-dark">Edit</button></td><td>
                    <button className="btn btn-outline-danger" onClick={()=>props.onSubmit_Del(props.emp_id,props.email,props.password)} >Delete</button></td>
            </tr>

        </>
    );
};

export default Show_Employee_Data;
