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
        }
    }
}
const Signup_Failure=(error)=>{
    return{
        type:"Signup_Failure",
        payload:{loading:false,error}
    }
}

const Signup_Intialize=(email,password,isAdmin)=>{
    const data={
        email:email,
        password:password,
        returnSecureToken:true
    }

    return async function(dispatch){
        dispatch(Signup_Started())
        try
        {
            await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data).then(async(user)=>{
                let uid={id:user.data.localId};
                if (isAdmin===true)
                    {
                        await axios.post(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`,uid);
                       // const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`);
                       //  console.log("data",response);
                    }
                 dispatch(Signup_Success(email,password));
            });
            // try{
            //     await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data)
            // }
            // catch (e) {
            //
            // }
            // await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data).then(async(user)=>{
            //     let uid={id:user.data.localId};
            //
            //     if (isAdmin===true)
            //         {
            //             await axios.post(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`,uid);
            //
            //         }
            //      dispatch(Signup_Success(email,password));
            // });




        }
        catch(e)
        {
            dispatch(Signup_Failure(e.message));
        }

    }
}
export default Signup_Intialize;
