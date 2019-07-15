import { createStackNavigator, 
    createAppContainer, 
    createDrawerNavigator} from 'react-navigation';

import HomeView from './views/Home'
import UserListView from './views/UserList'
import TopView from './views/Top'
import CurrencyView from './views/Currency'

const HomeStackNavigatior = createStackNavigator({
    Home: HomeView,
    Currency: CurrencyView
})

const UserStackNavigatior = createStackNavigator({
    UserList: UserListView,
    Currency: CurrencyView
})

const AppDrawerNavigation = createDrawerNavigator({
    Home: HomeStackNavigatior,
    UserList: UserStackNavigatior,
    Top: TopView 
})

    const AppStackNavigation = createStackNavigator({
        Home:HomeView
    })
    export default createAppContainer(AppDrawerNavigation);