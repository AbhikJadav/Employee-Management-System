import React, {useEffect, useState} from 'react';
import {storage} from "./Firebase";
import {ref, uploadBytesResumable, getDownloadURL, deleteObject} from "@firebase/storage";

const Image_Upload = () => {

    const [image,setimage]=useState(null);
    const [url,setUrl]=useState(null);
    const [data,setData]=useState([]);
    const [progress,setProgress]=useState(0);
    const inputEvent=(e)=>{
        if(e.target.files[0]){
            setimage(e.target.files[0]);
        }
    }


    console.log("img:",image);
    const Submit=()=>{

        const imageref=ref(storage,`/images/${image.name}`);
        const uploadImage=uploadBytesResumable(imageref,image);
        uploadImage.on("state_changed",
        (snapshot)=>{
            const progressPercent=Math.round ((snapshot.bytesTransferred/snapshot.totalBytes)*100);
            setProgress(progressPercent);
        },(error)=>{
                console.log(error);
            },()=>{
                getDownloadURL(uploadImage.snapshot.ref)
                    .then((url)=>{
                        setUrl(url);
                    })
                    .then(()=>{
                        setProgress(0);
                    }).catch((err)=>{
                    console.log(err);
                })
            }
            )
        // const imageref=ref(storage,`/images/${image.name}`);
        // uploadBytes(imageref,image).then(()=>{
        //     getDownloadURL(imageref).then((url)=>{
        //         setUrl(url);
        //     }).catch(error=>{
        //         console.log(error.message,"error getting the image url");
        //     });
        //     setimage(null);
        // }).catch(error=>{
        //     console.log(error.message);
        // });
    }
    const deleteimg=async()=>{
        try {
            const storageRef=ref(storage,url);
            await deleteObject(storageRef)
        }catch (e) {
            console.log(e);
        }

    }

    return (
        <div>
            <img src={url} height="300px" width="300px"/>
            <h6>{url}</h6>
            <input type="file" onChange={inputEvent} />
            {progress===0?null:(
                <div className="progress">
                    <div className="progress-bar progress-bar-striped mt-2" style={{width:`${progress}%`}}>
                        {`uploading image ${progress}%`}
                    </div>
                </div>
            )}

            <button onClick={Submit}>Upload</button>
            <button className="btn btn-danger" onClick={deleteimg}>Delete</button>
        </div>
    );
};

export default Image_Upload;
