import axios from "axios";
import {tab} from "@testing-library/user-event/dist/tab";
const Login_Started=()=>{
    return{
        type:"Login_Started",
        payload:{loading:true}
    }
}
const Login_Success=(userid)=>{
    return{
        type:"Login_Success",
        payload:{
            loading:false,
            userid,
            // login:true
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
            await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data).then(async(user)=>{
            const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`);

                const table=[];
                for (let key in response.data)
                {
                    table.push(
                        // id:key,
                        response.data[key].id
                    )
                }
                console.log("table:",table);
                console.log(user.data.localId);
                table.find((element)=>{
                    if(element==user.data.localId)
                    {
                        dispatch(Redirect("/Layout"));
                    }
                    else
                    {
                        dispatch(Redirect("/Home"));
                    }
                });
                dispatch(Login_Success(user.data.localId));
            });

            // dispatch(Login_Success(email,password));
        }
        catch(e)
        {
            dispatch(Login_Failure(e.message));
        }

    }
}
export default Login_Intialize;
export {Redirect};