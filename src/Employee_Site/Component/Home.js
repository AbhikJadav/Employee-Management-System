import React from 'react';
import Signout_Intialize from "../../redux/Action/signout_action";
import {useDispatch} from "react-redux";

const Home = () => {
    const dispatch=useDispatch();
    const Logout=()=>{
        dispatch(Signout_Intialize());
    }
    return (
        <div>
                <h1>This client home site</h1>
            <button onClick={Logout}>Logout</button>
        </div>
    );
};

export default Home;
