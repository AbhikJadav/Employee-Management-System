import axios from "axios";
import {getDownloadURL, ref, uploadBytes, uploadBytesResumable} from "@firebase/storage";
import {storage} from "../../Admin_Site/Component/Authentication/Firebase";
import Show_Employee_Intialize from "../Action/show_Employee_Action"
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
                image:image.name
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

                // const uploadImage=uploadBytesResumable(imageref,image);
                // uploadImage.on("state_changed",
                //     (snapshot)=>{
                //         const progressPercent=Math.round ((snapshot.bytesTransferred/snapshot.totalBytes)*100);
                //         setProgress(progressPercent);
                //     },(error)=>{
                //         console.log(error);
                //     },()=>{
                //         getDownloadURL(uploadImage.snapshot.ref)
                //             .then((url)=>{
                //                 setUrl(url);
                //             })
                //             .then(()=>{
                //                 setProgress(0);
                //             }).catch((err)=>{
                //             console.log(err);
                //         })
                //     }
                // )


            }
            dispatch(Add_Employee_Success(email,password,empData,image));
            // dispatch(Show_Employee_Intialize());
        }
        catch(e)
        {
            dispatch(Add_Employee_Failure(e.response.data.error.message));
        }

    }
}
export default Add_Employee_Intialize;
