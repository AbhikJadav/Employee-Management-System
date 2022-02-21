import axios from "axios";
import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {storage} from "../../Admin_Site/Component/Authentication/Firebase";
const Image_Upload_Started=()=>{
    return{
        type:"Image_Upload_Started",
        payload:{loading:true}
    }
}
const Image_Upload_Success=(email,password)=>{
    return{
        type:"Image_Upload_Success",
        payload:{
            loading:false,
            email,password
        }
    }
}
const Image_Upload_Failure=(error)=>{
    return{
        type:"Image_Upload_Failure",
        payload:{loading:false,error}
    }
}
const Image_UrlData=(url)=>{
    return{
        type:"Image_UrlData",
        payload:{loading:false,url}
    }
}
const Image_Progress=(progress)=>{
    return{
        type:"Image_Progress",
        payload:{loading:false,progress}
    }
}
const Image_Upload_Intialize=(email,password)=>{
    const data={
        email:email,
        password:password,
        returnSecureToken:true
    }

    return async function(dispatch){
        dispatch(Image_Upload_Started())
        try {

            const user=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data);

            const imageref = ref(storage, `/employee_images/${user.data.localId + ".jpeg"}`);

             getDownloadURL(imageref).then((url) => {
                // setUrl(url);
                // let imageUrl=url;
                dispatch(Image_UrlData(url));
                // localStorage.setItem("image",url);
                console.log("image url:", url);
            })

            dispatch(Image_Upload_Success(email,password));
            // setimage(null);

        }
        catch(e)
        {
            dispatch(Image_Upload_Failure(e.response.data.error.message));
        }

    }
}
export default Image_Upload_Intialize;
export {Image_UrlData,Image_Progress};