import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

const price = (props) => (
        <Text style={ [ (props.price < 0) ? { color: 'red'} : {color: 'green'} ]  }>{ Number(props.price).toFixed(2) } %</Text>
    )
export default price;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});