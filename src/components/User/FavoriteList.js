import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator
} from "react-native";


const StockList = (props) => (
    <FlatList
        data={ props.symbols}
        renderItem={({ item }) => ( <Text></Text>/>) }
        ListEmptyComponent={ <ActivityIndicator /> }
    />
    )
export default StockList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});