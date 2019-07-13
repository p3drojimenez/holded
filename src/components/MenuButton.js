import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { Icon } from 'native-base'

const MenuButton = (props) => (
    <TouchableOpacity onPress={ () => this.props.navigation.openDrawer() }>
        <Icon name='menu' />
    </TouchableOpacity>
    )
export default MenuButton;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});