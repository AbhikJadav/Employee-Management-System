

const defaultState={
    payload:{
        loading:false,
        error:null,
        user:null,
        redirect:null,
        // url:null,
        empData:null,
        table: [],
        progress:0,
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
        case "Image_Upload_Started":
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
                    // redirect:"/Show_Employee",
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
        case "Image_Upload_Success":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    id:action.payload.data,
                }
            }
       case "Add_Employee_Failure":
       case "Show_Employee_Failure":
       case "Delete_Employee_Failure":
       case "Update_Employee_Failure":
       case "Image_Upload_Failure":

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
        case "Image_UrlData":
            return {
                ...state,
                payload: {
                    ...state.payload,
                    loading:action.payload.loading,
                    url_Data:action.payload.url,

                }
            }
        case "Image_Progress":
            return {
                ...state,
                payload: {
                    ...state.payload,
                    loading:action.payload.loading,
                    progress:action.payload.progress,

                }
            }


        default:
            return state;
    }
};

export default employee_reducer;
