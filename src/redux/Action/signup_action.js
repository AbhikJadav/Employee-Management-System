import axios from "axios";
const Signup_Started=()=>{
    return{
        type:"Signup_Started",
        payload:{loading:true}
    }
}
const Signup_Success=(email,password)=>{
    return{
        type:"Signup_Success",
        payload:{
            loading:false,
                email,password,
            login:true
        }
    }
}
const Signup_Failure=(error)=>{
    return{
        type:"Signup_Failure",
        payload:{loading:false,error}
    }
}
const Signup_Intialize=(email,password)=>{
    const data={
        email:email,
        password:password,
        returnSecureToken:true
    }
    return async function(dispatch){
        dispatch(Signup_Started())
        try
        {
            await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data);
            dispatch(Signup_Success(email,password));
        }
        catch(e)
        {
            dispatch(Signup_Failure(e.message));
        }

    }
}
export default Signup_Intialize;
