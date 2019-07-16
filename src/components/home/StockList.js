import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator
} from "react-native";

import Item from './Item'

const StockList = (props) => (
    <FlatList
        data={ props.symbols}
        renderItem={({ item }) => ( <Item item={item}/>) }
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