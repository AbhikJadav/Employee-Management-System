

const defaultState={
    payload:{
        loading:false,
        error:null,
        user:null,
        redirect:null,
        empData:null,
        table: [],

        // login:false
    }
}

const employee_reducer = (state=defaultState, action) => {
    switch(action.type)
    {
        case "Add_Employee_Started":
        case "Show_Employee_Started":
        case "Delete_Employee_Started":
        case "Update_Employee_Started":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                }
            }
        case "Add_Employee_Success":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    userid:action.payload.uid,
                    // redirect: "/",
                    empData: action.payload.username,

                }
            }
        case "Show_Employee_Success":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    table:action.payload.data,
                }
            }
        case "Delete_Employee_Success":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    id:action.payload.data,
                }
            }
        case "Update_Employee_Success":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    id:action.payload.employee_id,
                    empData: action.payload.emp_data,
                }
            }

       case "Add_Employee_Failure":
       case "Show_Employee_Failure":
       case "Delete_Employee_Failure":
       case "Update_Employee_Failure":

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

export default employee_reducer;
