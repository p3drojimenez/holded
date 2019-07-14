import React from "react";
import { 
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from "react-native";
import { Icon } from 'native-base'

const MenuButton = (props) => (
    <TouchableOpacity onPress={ props.onPress } style={styles.container}>
        <Icon name='menu' style={ styles.button }/>
    </TouchableOpacity>
    )
export default MenuButton;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:10,
    },
    button:{
        color:'#B5B6B7'
    }
});