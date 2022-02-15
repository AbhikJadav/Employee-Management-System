import axios from "axios";
import {storage} from "../../Admin_Site/Component/Authentication/Firebase";
import {ref,uploadBytes,getDownloadURL} from "@firebase/storage";
const Signup_Started=()=>{
    return{
        type:"Signup_Started",
        payload:{loading:true}
    }
}
const Signup_Success=(email,password,image)=>{
    return{
        type:"Signup_Success",
        payload:{
            loading:false,
                email,password,image
        }

    }

}
const Signup_Failure=(error)=>{
    return{
        type:"Signup_Failure",
        payload:{loading:false,error}
    }
}

const Signup_Intialize=(email,password,isAdmin,image)=>{
    const data={
        email:email,
        password:password,
        returnSecureToken:true
    }

    return async function(dispatch){
        dispatch(Signup_Started())
        try
        {
            // await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data).then(async(user)=>{
            //     let uid={id:user.data.localId};
            //     if (isAdmin===true)
            //         {
            //             await axios.post(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`,uid);
            //            // const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`);
            //            //  console.log("data",response);
            //         }
            //      dispatch(Signup_Success(email,password));
            // });

            const user=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0`,data);
            let uid={id:user.data.localId};
                if (isAdmin===true)
                    {
                        await axios.post(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`,uid);
                       // const response=await axios.get(`https://employeesystem-5ca76-default-rtdb.firebaseio.com/admin.json`);
                       //  console.log("data",response);

                      //image upload to storage code.
                        const imageref=ref(storage,`/admin_images/${user.data.localId+" "+image.name}`);
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
                 dispatch(Signup_Success(email,password,image));

        }
        catch(e)
        {
            dispatch(Signup_Failure(e.response.data.error.message));
        }

    }
}
export default Signup_Intialize;
