import axios from "axios";
import Show_Employee_Intialize from "../Action/show_Employee_Action";
import {getDownloadURL, ref, uploadBytes, uploadBytesResumable} from "@firebase/storage";
import {storage} from "../../Admin_Site/Component/Authentication/Firebase";

import {Image_Progress, Image_UrlData} from "./Image_Upload_Action";
const Update_Employee_Started=()=>{
    return{
        type:"Edit_Employee_Started",
        payload:{loading:true}
    }
}
const Update_Employee_Success=(employee_id,image,emp_data)=>{
    return{
        type:"Update_Employee_Success",
        payload:{
            loading:false,
            employee_id,image,emp_data,
        }

    }

}
const Update_Employee_Failure=(error)=>{
    return{
        type:"Update_Employee_Failure",
        payload:{loading:false,error}
    }
}

const Update_Employee_Intialize=(employee_id,emp_email,emp_password,image,emp_data)=>{
    const data={
        email:emp_email,
        password:emp_password,
        returnSecureToken:true
    }
     return async function(dispatch){
        dispatch(Update_Employee_Started())
        try
        {
            console.log("update_id:",employee_id);

            await axios.put(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/employee/${employee_id}/empdata.json`,emp_data);

            const user=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data);

            const imageref=ref(storage,`/employee_images/${user.data.localId+".jpeg"}`);
            uploadBytes(imageref,image).then(()=>{
                getDownloadURL(imageref).then((url)=>{
                    // setUrl(url);
                    // let imageurl=url;
                    // localStorage.setItem("image",url);

                    console.log("image url:",url);
                }).catch(error=>{
                    console.log(error.message,"error getting the image url");
                });
                // setimage(null);
                console.log("uploaded");
            }).catch(error=>{
                console.log(error.message);
            });

            dispatch(Update_Employee_Success(employee_id,image,emp_data));
            dispatch(Show_Employee_Intialize());
        }
        catch(e)
        {
            dispatch(Update_Employee_Failure(e.response.data.error.message));
        }

    }
}
export default Update_Employee_Intialize;
