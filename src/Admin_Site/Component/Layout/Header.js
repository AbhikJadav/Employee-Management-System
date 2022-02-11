import React, {useEffect} from 'react';
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import Signout_Intialize from "../../../redux/Action/signout_action";
import userimg from "../../images/user.jpeg";
const Header = (props) => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const selector=useSelector((state=>state.signup_reducer));
    const Logout=()=>{
        dispatch(Signout_Intialize());
    }
    return (
        <>
            <section id="interface">
                <div className="navigation">
                    <div className="n1">
                        <div>
                            {props.SideBar?<i id="menu-btn" className="fas fa-bars" onClick={props.Show}></i>:
                            <span id="menu-btn" onClick={props.Show} style={{color:"navy",fontWeight:"600px",textDEcoration:"bold"}}>X</span>

                                }
                            {/*<i id="menu-btn" className="fas fa-bars" onClick={props.Show}></i>*/}
                        </div>
                        <div className="search">
                            <i className="far fa-search"></i>
                            <input type="text" placeholder="Search"/>


                        </div>

                        {/*<button onClick={Logout}>Logout</button>*/}
                    </div>
                    <div className="profile">
                        <i className="far fa-bell"></i>
                        <i className='fas fa-power-off fa-lg' onClick={Logout}></i>
                        <img src={userimg} alt="profileimg"/>
                    </div>
                </div>
                <h3 className="i-name">
                    Dashboard
                </h3>
                <div className="values">
                    <div className="val-box">
                        <i className="fas fa-users"></i>
                        <div>
                            <h3>1000</h3>
                            <span>New Users</span>
                        </div>
                    </div>
                    <div className="val-box">
                        <i className="fas fa-user"></i>
                        <div>
                            <h3>100</h3>
                            <span>Total Employess</span>
                        </div>
                    </div>
                    <div className="val-box">
                        <i className="fas fa-table"></i>
                        <div>
                            <h3>10</h3>
                            <span>Tables</span>
                        </div>
                    </div>
                    <div className="val-box">
                        <i className="fas fa-user-circle"></i>
                        <div>
                            <h3>1</h3>
                            <span>Admin</span>
                        </div>
                    </div>
                </div>

                <div className="board">
                    <table width="100%">
                        <thead>
                        <tr>
                            <td>Name</td>
                            <td>Title</td>
                            <td>Status</td>
                            <td>Role</td>
                            <td></td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="people">
                                <img src="https://picsum.photos/200" alt=""/>
                                <h5>Abhik
                                    <p>abhik@gmail.com</p></h5>
                            </td>
                            <td className="people-des">
                                <h5>Web Developer</h5>
                                <p>Web dev</p>
                            </td>
                            <td className="active"><p>Active</p></td>
                            <td className="role">
                                <p>Owner</p>
                            </td>
                            <td className="edit"><a href="#">Edit</a></td>
                        </tr>

                        <tr>
                            <td className="people">
                                <img src="https://picsum.photos/200" alt=""/>
                                <h5>Abhik Jadav
                                    <p>abhik@gmail.com</p></h5>
                            </td>
                            <td className="people-des">
                                <h5>Web Developer</h5>
                                <p>Web dev</p>
                            </td>
                            <td className="active"><p>Active</p></td>
                            <td className="role">
                                <p>Owner</p>
                            </td>
                            <td className="edit"><a href="#">Edit</a></td>
                        </tr>

                        <tr>
                            <td className="people">
                                <img src="https://picsum.photos/200" alt=""/>
                                <h5>Jadav Abhik
                                    <p>abhik@gmail.com</p></h5>
                            </td>
                            <td className="people-des">
                                <h5>Web Developer</h5>
                                <p>Web dev</p>
                            </td>
                            <td className="active"><p>Active</p></td>
                            <td className="role">
                                <p>Owner</p>
                            </td>
                            <td className="edit"><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                            <td className="people">
                                <img src="https://picsum.photos/200" alt=""/>
                                <h5>Jadav Abhik
                                    <p>abhik@gmail.com</p></h5>
                            </td>
                            <td className="people-des">
                                <h5>Web Developer</h5>
                                <p>Web dev</p>
                            </td>
                            <td className="active"><p>Active</p></td>
                            <td className="role">
                                <p>Owner</p>
                            </td>
                            <td className="edit"><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                            <td className="people">
                                <img src="https://picsum.photos/200" alt=""/>
                                <h5>Jadav Abhik
                                    <p>abhik@gmail.com</p></h5>
                            </td>
                            <td className="people-des">
                                <h5>Web Developer</h5>
                                <p>Web dev</p>
                            </td>
                            <td className="active"><p>Active</p></td>
                            <td className="role">
                                <p>Owner</p>
                            </td>
                            <td className="edit"><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                            <td className="people">
                                <img src="https://picsum.photos/200" alt=""/>
                                <h5>Jadav Abhik
                                    <p>abhik@gmail.com</p></h5>
                            </td>
                            <td className="people-des">
                                <h5>Web Developer</h5>
                                <p>Web dev</p>
                            </td>
                            <td className="active"><p>Active</p></td>
                            <td className="role">
                                <p>Owner</p>
                            </td>
                            <td className="edit"><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                            <td className="people">
                                <img src="https://picsum.photos/200" alt=""/>
                                <h5>Jadav Abhik
                                    <p>abhik@gmail.com</p></h5>
                            </td>
                            <td className="people-des">
                                <h5>Web Developer</h5>
                                <p>Web dev</p>
                            </td>
                            <td className="active"><p>Active</p></td>
                            <td className="role">
                                <p>Owner</p>
                            </td>
                            <td className="edit"><a href="#">Edit</a></td>
                        </tr>
                        <tr>
                            <td className="people">
                                <img src="https://picsum.photos/200" alt=""/>
                                <h5>Jadav Abhik
                                    <p>abhik@gmail.com</p></h5>
                            </td>
                            <td className="people-des">
                                <h5>Web Developer</h5>
                                <p>Web dev</p>
                            </td>
                            <td className="active"><p>Active</p></td>
                            <td className="role">
                                <p>Owner</p>
                            </td>
                            <td className="edit"><a href="#">Edit</a></td>
                        </tr><tr>
                            <td className="people">
                                <img src="https://picsum.photos/200" alt=""/>
                                <h5>Jadav Abhik
                                    <p>abhik@gmail.com</p></h5>
                            </td>
                            <td className="people-des">
                                <h5>Web Developer</h5>
                                <p>Web dev</p>
                            </td>
                            <td className="active"><p>Active</p></td>
                            <td className="role">
                                <p>Owner</p>
                            </td>
                            <td className="edit"><a href="#">Edit</a></td>
                        </tr>



                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
};

export default Header;
