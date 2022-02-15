import axios from "axios";
import {ref} from "@firebase/storage";
import {storage} from "../../Admin_Site/Component/Authentication/Firebase";
const Image_Upload_Started=()=>{
    return{
        type:"Image_Upload_Started",
        payload:{loading:true}
    }
}
const Image_Upload_Success=(image)=>{
    return{
        type:"Image_Upload_Success",
        payload:{
            loading:false,
            image,
        }
    }
}
const Image_Upload_Failure=(error)=>{
    return{
        type:"Image_Upload_Failure",
        payload:{loading:false,error}
    }
}

const Image_Upload_Intialize=(image,isAdmin)=>{
    // const data={
    //     email:email,
    //     password:password,
    //     returnSecureToken:true
    // }

    return async function(dispatch){
        dispatch(Image_Upload_Started())
        try
        {

            const user=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`);
            let uid={id:user.data.localId};
            if (isAdmin===true)
            {
                await axios.post(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`,uid);
                // const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`);
                //  console.log("data",response);
                const imageref=ref(storage,`${image.name}`);
            }
            dispatch(Image_Upload_Success(email,password));

        }
        catch(e)
        {
            dispatch(Image_Upload_Failure(e.response.data.error.message));
        }

    }
}
export default Signup_Intialize;
