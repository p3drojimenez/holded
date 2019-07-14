
function userReducer (state = { favList: [] }, action) 
{

    switch(action.type){
        case 'SAVE_FAV':
            if(state.favList.indexOf(action.payload.item) == -1)
            {
                state.favList.push(action.payload.item)
            }
            return {...state, favList: state.favList }
        default:
            return state
    }
}

export default userReducer