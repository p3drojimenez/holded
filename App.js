import React, {Component} from 'react';
import { View } from 'react-native'
import Navigator from './src/navigator'

import { Provider } from 'react-redux';

// Reducers

import StockReducer from './src/reducers/stockReducer'

import { createStore, combineReducers } from 'redux';
let store = createStore(combineReducers({ 
  stock:StockReducer,
}));

export default class App extends React.Component {
  render() {
    return ( 
      <Provider store={store}>
        <Navigator /> 
      </Provider>)
    }
  }