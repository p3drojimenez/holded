function appReducer( state = { isConected: false } , action)
{
    switch(action.type){
        case 'SET_CONECTION_STATUS':
            return {...state, isConected: action.payload.isConected }
        default:
            return state
    }
}

export default appReducer;