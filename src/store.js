import { createStore, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'

import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// Reducers

import StockReducer from './reducers/stockReducer'
import AppStatusReducer from './reducers/app'
import UserReducer from './reducers/userReducer'

const rootReducer = combineReducers({ 
    stock:StockReducer,
    status: AppStatusReducer,
    user:UserReducer
  })

const persistConfig = {
key: 'root',
storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer)
let persistor = persistStore(store)

export { store, persistor }