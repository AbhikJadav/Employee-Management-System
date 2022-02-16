import axios from "axios";
import {getDownloadURL, ref, uploadBytes} from "@firebase/storage";
import {storage} from "../../Admin_Site/Component/Authentication/Firebase";

const Add_Employee_Started=()=>{
    return{
        type:"Add_Employee_Started",
        payload:{loading:true}
    }
}
const Add_Employee_Success=(email,password,image,empData)=>{
    return{
        type:"Add_Employee_Success",
        payload:{
            loading:false,
            email,password,image,empData
        }

    }

}
const Add_Employee_Failure=(error)=>{
    return{
        type:"Add_Employee_Failure",
        payload:{loading:false,error}
    }
}

const Add_Employee_Intialize=(email,password,empData,image,isAdmin)=>{
    const data={
        email:email,
        password:password,
        returnSecureToken:true
    }

    return async function(dispatch){
        dispatch(Add_Employee_Started())
        try
        {
            const user=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data);
            var userdata={
                id:user.data.localId,
                empdata:empData,
            }
            // let uid={id:user.data.localId};
            if (isAdmin===false)
            {
                console.log("name:",userdata);
                await axios.post(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/employee.json`,userdata);
                // const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`);
                //  console.log("data",response);
                const imageref=ref(storage,`/employee_images/${user.data.localId+" "+image.name}`);
                uploadBytes(imageref,image).then(()=>{
                    getDownloadURL(imageref).then((url)=>{
                        // setUrl(url);

                        // localStorage.setItem("image",url);
                        console.log("image url:",url);
                    }).catch(error=>{
                        console.log(error.message,"error getting the image url");
                    });
                    // setimage(null);
                }).catch(error=>{
                    console.log(error.message);
                });

            }
            dispatch(Add_Employee_Success(email,password,empData,image));

        }
        catch(e)
        {
            dispatch(Add_Employee_Failure(e.response.data.error.message));
        }

    }
}
export default Add_Employee_Intialize;
