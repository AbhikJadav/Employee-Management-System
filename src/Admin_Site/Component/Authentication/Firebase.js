import {initializeApp} from "@firebase/app";
import {getStorage} from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDlxv7xQim0OVrcuZ3t2OFEeUqcxXm_go0",
    authDomain: "employeesystem-5ca76.firebaseapp.com",
    databaseURL: "https://employeesystem-5ca76-default-rtdb.firebaseio.com",
    projectId: "employeesystem-5ca76",
    storageBucket: "employeesystem-5ca76.appspot.com",
    messagingSenderId: "489234357961",
    appId: "1:489234357961:web:9f62fa5889c9de91fcf718"
};
const app=initializeApp(firebaseConfig);
export const storage=getStorage(app);