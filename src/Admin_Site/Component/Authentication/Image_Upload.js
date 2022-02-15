import React, {useState} from 'react';
import {storage} from "./Firebase";
import {ref,uploadBytes,getDownloadURL} from "@firebase/storage";

const Image_Upload = () => {

    const [image,setimage]=useState(null);
    const [url,setUrl]=useState(null);
    const [data,setData]=useState([]);
    const inputEvent=(e)=>{
        if(e.target.files[0]){
            setimage(e.target.files[0]);
        }
    }

    console.log("img:",image);
    const Submit=()=>{
        const imageref=ref(storage,`/images/${image.name}`);
        uploadBytes(imageref,image).then(()=>{
            getDownloadURL(imageref).then((url)=>{
                setUrl(url);
            }).catch(error=>{
                console.log(error.message,"error getting the image url");
            });
            setimage(null);
        }).catch(error=>{
            console.log(error.message);
        });
    }
    const List=()=>{
        const imgref=ref(storage).bucket('/images/').listAll()
            .then(res=>{
                res.items.foreach((item)=>{
                    setData(arr=>[...arr,item.name]);
                })
            })
            .catch(err=>{
                alert(err.message);
            })
    }
    return (
        <div>
            <img src={url} height="300px" width="300px"/>
            <h6>{url}</h6>
            <input type="file" onChange={inputEvent} />
            <button onClick={Submit}>Upload</button>
            <button onClick={List}>List All Items</button>
        </div>
    );
};

export default Image_Upload;
