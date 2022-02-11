import axios from "axios";
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
            await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data).then((user)=>{
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