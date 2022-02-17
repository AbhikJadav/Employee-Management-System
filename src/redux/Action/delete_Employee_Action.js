import axios from "axios";
import Show_Employee_Intialize from "../Action/show_Employee_Action";
const Delete_Employee_Started=()=>{
    return{
        type:"Add_Employee_Started",
        payload:{loading:true}
    }
}
const Delete_Employee_Success=(emp_id)=>{
    return{
        type:"Delete_Employee_Success",
        payload:{
            loading:false,
            emp_id,
        }

    }

}
const Delete_Employee_Failure=(error)=>{
    return{
        type:"Delete_Employee_Failure",
        payload:{loading:false,error}
    }
}

const Delete_Employee_Intialize=(id,isEmp)=>{


    return async function(dispatch){
        dispatch(Delete_Employee_Started())
        try
        {
            // const user=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,d);

            // let uid={id:user.data.localId};
            // if (isAdmin===false)
            // {
                console.log("name:",id);
                await axios.delete(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/employee/${id}.json`);

            // }
            dispatch(Delete_Employee_Success(id));
            dispatch(Show_Employee_Intialize);
        }
        catch(e)
        {
            dispatch(Delete_Employee_Failure(e.response.data.error.message));
        }

    }
}
export default Delete_Employee_Intialize;
