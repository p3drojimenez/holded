function stockReducer (state = {count: 0}, action) 
{

    switch(action.type){
        case 'SUMA':
            let count = action.payload.count
            return {...state, count}
        default:
            return state
    }
}

export default stockReducer