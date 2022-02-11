const defaultvalue={
    payload:{
        loading:false,
        error:null,
        user:null,
    }
}
const admin_reducer = (state=defaultvalue,action) => {
    switch (action.type)
    {
        case "Post_Started":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                }
            }
        case "Post_Success":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    user:action.payload.data,
                }
            }
        case "Post_Failure":
            return{
                ...state,
                payload: {
                    ...state.payload,
                    loading: action.payload.loading,
                    error: action.payload.error,
                }
            }
        default:
            return state;

    }
};

export default admin_reducer;
