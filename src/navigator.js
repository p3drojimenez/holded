import { createStackNavigator, 
    createAppContainer, 
    createDrawerNavigator} from 'react-navigation';

import HomeView from './views/Home'
import UserListView from './views/UserList'
import TopView from './views/Top'


const UserStackNavigation = createStackNavigator({
    User: UserListView,
})
const AppDrawerNavigation = createDrawerNavigator({
    Home: HomeView,
    UserList: UserStackNavigation,
    Top: TopView 
})

    const AppStackNavigation = createStackNavigator({
        Home:HomeView
    })
    export default createAppContainer(AppDrawerNavigation);