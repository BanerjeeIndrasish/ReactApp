const amountReducer = (state = 0, action)=>{
    switch(action.type){
        case "deposit":
            return state + action.payload;
        case "withdraw":
            return state>0 ? state - action.payload : 0;
        default:
            return state;
    }
}
export default amountReducer;