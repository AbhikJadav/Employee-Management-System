import axios from "axios";
import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {storage} from "../../Admin_Site/Component/Authentication/Firebase";

const Show_Employee_Started=()=>{
    return{
        type:"Show_Employee_Started",
        payload:{loading:true}
    }
}
const Show_Employee_Success=(data)=>{
    return{
        type:"Show_Employee_Success",
        payload:{
            loading:false,
            data,
        }

    }

}
const Show_Employee_Failure=(error)=>{
    return{
        type:"Show_Employee_Failure",
        payload:{loading:false,error}
    }
}

const Show_Employee_Intialize=(isAdmin)=>{
    // const data={
    //     email:email,
    //     password:password,
    //     returnSecureToken:true
    // }

    return async function(dispatch){
        dispatch(Show_Employee_Started())
        try
        {
            // const user=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data);
            // var userdata={
            //     id:user.data.localId,
            //     empdata:empData,
            // }
            //  let uid={id:user.data.localId};
            // if (isAdmin===false)
            // {
            //     console.log("name:",userdata);
            //     await axios.post(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/employee.json`,userdata);
            //
            // }
            const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/employee.json`);
            const table=[];
            for(let key in response.data)
            {
                table.push({
                    id:key,
                    data:response.data[key],
                })
            }
            dispatch(Show_Employee_Success(table));
            // table.map((element)=>{
            //     return(
            //         console.log("name:",element.data.empdata.address)
            //     )
            // })
        }
        catch(e)
        {
            dispatch(Show_Employee_Failure(e.response.data.error.message));
        }

    }
}
export default Show_Employee_Intialize;