import axios from "axios";
import Admin from "../../Admin_Site/Component/Admin";

const Login_Started=()=>{
    return{
        type:"Login_Started",
        payload:{loading:true}
    }
}
// const Login_Success=(userid)=>{
//     return{
//         type:"Login_Success",
//         payload:{
//             loading:false,
//             userid,
//             // login:true
//         }
//     }
// }
const Admin_Login_Success=(userid)=>{
    return {
        type:"Admin_Login_Success",
        payload:{
            loading:false,
            userid,
        }
    }
}
const Employee_Login_Success=(userid)=>{
    return {
        type:"Employee_Login_Success",
        payload:{
            loading:false,
            userid
        }
    }
}


const Login_Failure=(error)=>{
    return{
        type:"Login_Failure",
        payload:{loading:false,error}
    }
}
const Redirect=(path)=>{
    return{
        type:"Redirect",
        payload:{
            loading:false,path
        }
    }
}

const Login_Intialize=(email,password)=>{
    const data={
        email:email,
        password:password,
        returnSecureToken:true,
    }
    return async function(dispatch){
        dispatch(Login_Started())
        try
        {
            // await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data).then(async(user)=>{
            // const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`);
            //
            //     const table=[];
            //     for (let key in response.data)
            //     {
            //         table.push(
            //             // id:key,
            //             response.data[key].id
            //         )
            //     }
            //     // console.log("table:",table);
            //     // console.log(user.data.localId);
            //     let findData=table.find((element)=>element === user.data.localId);
            //     // console.log("data:",findData);
            //     if(findData!==undefined)
            //     {
            //         dispatch(Admin_Login_Success(user.data.localId));
            //     }
            //     else
            //     {
            //         dispatch(Employee_Login_Success(user.data.localId));
            //     }

            const user= await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data)
            const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`);

                const table=[];
                for (let key in response.data)
                {
                    table.push(
                        // id:key,
                        response.data[key].id
                    )
                }
                // console.log("table:",table);
                // console.log(user.data.localId);
                let findData=table.find((element)=>element === user.data.localId);
                // console.log("data:",findData);
                if(findData!==undefined)
                {
                    dispatch(Admin_Login_Success(user.data.localId));
                }
                else
                {
                    dispatch(Employee_Login_Success(user.data.localId));
                }
                // dispatch(Login_Success(user.data.localId));

        }
        catch(e)
        {
            dispatch(Login_Failure(e.response.data.error.message));
        }

    }
}
export default Login_Intialize;
export {Redirect};