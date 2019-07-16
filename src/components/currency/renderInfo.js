import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";

function cal(values){
    const open = values[1]
    const close = values[4]
    const porcent = (open - close) / close * 100
    return porcent
}
function RenderInfo(props){
    const num = Number(cal(props.values)).toFixed(3)
    return(
    <View style={styles.container}>
        <Text style={ [num < 0 ? {color: 'red'} : { color: 'green'}]}>{ num } %</Text>
    </View>
    )}

export default RenderInfo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
    }
});