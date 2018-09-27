
const initialState = { //default
    age:21
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP': 
            newState.age += action.val;
            break;
        
        case 'AGE_DOWN': 
            newState.age -= action.val;
            break;

        default:
            return state;
    }


    return newState;

};
  
export default reducer;