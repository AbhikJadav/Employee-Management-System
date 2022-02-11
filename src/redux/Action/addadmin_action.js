import axios from "axios";
const Post_Started=()=>{
    return{
        type:"Post_Started",
        payload:{loading:true}
    }
}
const Post_Success=(data)=>{
    return{
        type:"Post_Success",
        payload:{loading:false,data}
    }
}
const Post_Failure=(error)=>{
    return{
        type:"Post_Failure",
        payload:{loading:true,error}
    }
}
const Post_Intialize=(data)=>{
    return async function(dispatch){
        dispatch(Post_Started());
        try{
            await axios.post(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`,data);
            dispatch(Post_Success(data));

        }
        catch(e)
        {
            dispatch(Post_Failure(e.message));
        }
    }
}
export default Post_Intialize;