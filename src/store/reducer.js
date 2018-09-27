
const initialState = { //default
    age: 21,
     history: []
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    switch(action.type){
        case 'AGE_UP': 
            //newState.age += action.val;
            return {
                ...state, //this is the copy
                 age: state.age + action.val,
                 history: state.history.concat({id:Math.random(), age:state.age + action.val})
            }
            break;
        
        case 'AGE_DOWN': 
        return {
            ...state, //this is the copy
             age: state.age + action.val,
             history: state.history.concat({id:Math.random(), age:state.age - action.val})
        }
        break;

        case 'AGE_DELETE': 
        return {
            /*...state, //this is the copy*/
             history:state.history.filter(id => id.id !== action.key)
        }
        break;

        default:
            return state;
    }


    return newState;

};
  
export default reducer;