
const initialState = { //default
    age:21
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'AGE_UP'){
        newState.age += action.val;
    }
    if(action.type === 'AGE_DOWN'){
        newState.age -= action.val;
    }

    return newState;

};
  
export default reducer;