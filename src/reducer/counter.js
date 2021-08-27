const countReducer = ( state=0, action ) => {
    switch(action.type)
    {
        case "INCREMENT":
            return state + action.payLoad;
        
        case "DECREMENT":
            return state > 0 ? state - 1 : 0;
        default:
            return state;
    }
}

export default countReducer;