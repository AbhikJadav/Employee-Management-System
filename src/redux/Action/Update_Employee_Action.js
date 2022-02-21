import axios from "axios";
import Show_Employee_Intialize from "../Action/show_Employee_Action";
const Update_Employee_Started=()=>{
    return{
        type:"Edit_Employee_Started",
        payload:{loading:true}
    }
}
const Update_Employee_Success=(employee_id,emp_data)=>{
    return{
        type:"Update_Employee_Success",
        payload:{
            loading:false,
            employee_id,emp_data,
        }

    }

}
const Update_Employee_Failure=(error)=>{
    return{
        type:"Update_Employee_Failure",
        payload:{loading:false,error}
    }
}

const Update_Employee_Intialize=(employee_id,emp_data)=>{
     return async function(dispatch){
        dispatch(Update_Employee_Started())
        try
        {
            console.log("update_id:",employee_id);

            await axios.put(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/employee/${employee_id}/empdata.json`,emp_data);

            // }
            // const user=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`);
            // let uid={id:user.data.localId};
            // console.log("uid",uid);
            // if (isEmp===true)
            // {
            //     await axios.post(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`,uid);
            //     // const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`);
            //     //  console.log("data",response);
            //
            // }
            dispatch(Update_Employee_Success(employee_id,emp_data));
            dispatch(Show_Employee_Intialize());
        }
        catch(e)
        {
            dispatch(Update_Employee_Failure(e.response.data.error.message));
        }

    }
}
export default Update_Employee_Intialize;
