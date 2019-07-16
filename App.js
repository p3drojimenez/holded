import React, {Component} from 'react';
import { View } from 'react-native'
import Navigator from './src/navigator'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';

import {store, persistor} from './src/store';

class App extends React.Component {

  render() {
    return ( 
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator /> 
        </PersistGate>
      </Provider>)
    }
  }

  export default App