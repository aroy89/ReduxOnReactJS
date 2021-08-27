const loginReducer = ( state=false, action ) => {
    switch(action.type)
    {
        case "SINGIN":
            return !state;
        default: 
            return state;
    }
}

export default loginReducer;