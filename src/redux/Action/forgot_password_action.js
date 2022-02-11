import axios from "axios";
const Forgot_Password_Started=()=>{
    return{
        type:"Forgot_Password_Started",
            payload:{loading:true}
    }
}
const Forgot_Password_Success=(email)=>{
    return{
        type:"Forgot_Password_Success",
            payload:{loading:false,
                email
        }
    }
}
const Forgot_Password_Failure=(error)=>{
    return{
        type:"Forgot_Password_Failure",
            payload:{loading:true,error}
    }
}
const Forgot_Password_Initialize=(email)=>{
    const data={

        requestType:"PASSWORD_RESET",
        email:email,
    }
    return async function(dispatch) {
        dispatch(Forgot_Password_Started());
        try {
            await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data);
            dispatch(Forgot_Password_Success(email));
        }
        catch(e)
        {
            Forgot_Password_Failure(e.message);
        }
    }

}
export default Forgot_Password_Initialize;