
const Signout_Started=()=>{
    return{
        type:"Signout_Started",
        payload:{loading:true}
    }
}
const Signout_Success=()=>{
    return{
        type:"Signout_Success",
        payload:{
            loading:false,
            // login:true
        }
    }
}
// const Admin_Signout_Success=()=>{
//     return{
//         type:"Admin_Signout_Success",
//         payload:{
//             loading:false,
//             // login:true
//         }
//     }
// }
// const Employee_Signout_Success=()=>{
//     return{
//         type:"Employee_Signout_Success",
//         payload:{
//             loading:false,
//             // login:true
//         }
//     }
// }

const Signout_Failure=(error)=>{
    return{
        type:"Signout_Failure",
        payload:{loading:false,error}
    }
}
const Signout_Intialize=()=>{
    // const data={
    //     email:email,
    //     password:password,
    //     returnSecureToken:true,
    // }
    return async function(dispatch){
        dispatch(Signout_Started())
        try
        {

            // await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data).then((user)=>{
            //     dispatch(Login_Success(user.data.localId));
            // });


            dispatch(Signout_Success());
            // dispatch(Employee_Signout_Success());
        }
        catch(e)
        {
            dispatch(Signout_Failure(e.message));
        }

    }
}
export default Signout_Intialize;
