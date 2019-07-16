import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from '../navigator'


const navigatorReducer =  createNavigationReducer(AppNavigator)

export default navigatorReducer