import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator
} from "react-native";

import Item from './Item'

function renderItem(item) {
    return( <Item {...item}/> )

}

const StockList = (props) => (
    <FlatList
        data={ props.symbols}
        renderItem={({ item }) => renderItem(item) }
        ListEmptyComponent={ <ActivityIndicator /> }
        keyExtractor={(item, index) => index.toString()}
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