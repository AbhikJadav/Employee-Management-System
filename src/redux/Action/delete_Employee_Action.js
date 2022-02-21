import axios from "axios";
import Show_Employee_Intialize from "../Action/show_Employee_Action";
import {deleteObject, getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {storage} from "../../Admin_Site/Component/Authentication/Firebase";
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

const Delete_Employee_Intialize=(id,email,password,image)=>{

    const data={
        email:email,
        password:password,
        returnSecureToken:true
    }
    // console.log("image:",image);
    return async function(dispatch){
        dispatch(Delete_Employee_Started())
        try
        {

            const user=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data);
            console.log("idtoken",user.data.idToken);
            console.log("name:",id);
                const empdata=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:delete?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`, {
                    "idToken": user.data.idToken,
                });

            await axios.delete(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/employee/${id}.json`);
                // const imageref=ref(storage,`/employee_images/${user.data.localId+" "+image.name}`);
            console.log("image:",image);
                const storageRef=ref(storage,`/employee_images/${user.data.localId+".jpeg"}`);
                await deleteObject(storageRef)
                console.log("Delete successfully");


            dispatch(Delete_Employee_Success(id));
            dispatch(Show_Employee_Intialize());
        }
        catch(e)
        {
            dispatch(Delete_Employee_Failure(e.message));
        }

    }
}
export default Delete_Employee_Intialize;
