function isInArray(array, search)
{
    return array.symbol.toUpperCase().startsWith(search.toUpperCase())
}

function compare(a,b){
    return b.priceChange - a.priceChange
}

function stockReducer (state = {count: 0}, action) 
{

    switch(action.type){
        case 'STORE_DATA':
            const data = action.payload.data
            return {...state, data: data.sort(compare), dataFilter: data }
        case 'GET_FAV':
            const favoriteList =  state.data.filter( (data) => {
                return action.payload.list.indexOf(data.symbol) != -1
            })
            
            return {...state, favoriteList, favoriteListFiltered: favoriteList }
        case 'SEARCH_CURRENCY':
            const dataFiltered = state.data.filter( (data) => {
                return data.symbol.toUpperCase().startsWith(action.payload.search.toUpperCase())
            })
            
            return {...state, dataFilter: dataFiltered}
        case 'GET_TOP': 
            console.log("LLAMADA")
            return state
        case 'SEARCH_CURRENCY_USER':
            const favoriteListFiltered = state.favoriteList.filter( (data) => {
                
                return isInArray(data, action.payload.search )
            })

            return {...state, favoriteListFiltered: favoriteListFiltered}
        default:
            return state
    }
}

export default stockReducer