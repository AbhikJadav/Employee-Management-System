

const defaultState={
    payload:{
        loading:false,
        error:null,
        user:null,
        redirect:null,
        // login:false
    }
}

const auth_reducer = (state=defaultState, action) => {
    switch(action.type)
    {
        case "Signup_Started":
        case "Login_Started":
        case "Signout_Started":
        case "Forgot_Password_Started":

            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                }
            }
        case "Signup_Success":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    // login: action.payload.login,
                    userid:action.payload.uid,
                    redirect: "/",
                }
            }
        case "Login_Success":

            localStorage.setItem("auth",action.payload.userid);
            // console.log("email",action.payload.email);
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    // login: action.payload.login,
                    userid:action.payload.userid,
                    // table:action.payload.table,
                    // redirect: "/",
                }
            }
        case "Signout_Success":
            localStorage.removeItem("auth");

            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    // login: action.payload.login,
                    userid:action.payload.userid,
                    redirect: "/",
                }
            }
        case "Forgot_Password_Success":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    // login: action.payload.login,
                    userid:action.payload.userid,
                    // redirect: window.location.href='https://accounts.google.com/signin/v2/identifier?hl=en-GB&continue=https%3A%2F%2Fmail.google.com&service=mail&ec=GAlAFw&flowName=GlifWebSignIn&flowEntry=AddSession',
                    redirect:"/"
                }
            }
        case "Signup_Failure":
        case "Login_Failure":
        case "Signout_Failure":
        case "Forgot_Password_Failure":

            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    error:action.payload.error
                }
            }
        case "Redirect":
            return {
                ...state,
                payload: {
                    ...state.payload,
                    loading:action.payload.loading,
                    redirect:action.payload.path,
                }
            }

        default:
            return state;
    }
};

export default auth_reducer;
