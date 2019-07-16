
function userReducer (state = { favList: [], favListFiltered: [] }, action) 
{

    switch(action.type){
        case 'SAVE_FAV':
            const position = state.favList.indexOf(action.payload.item) 
            if(position == -1)
            {
                state.favList.push(action.payload.item)
            }else{
                state.favList.splice(position, 1);
            }
            return {...state, favList: state.favList , favListFiltered: state.favList}
        default:
            return state
    }
}

export default userReducer