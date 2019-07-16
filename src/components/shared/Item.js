import React from "react";
import { 
    View,
    Text,
    StyleSheet,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "native-base";
import { withNavigation } from 'react-navigation';
import Price from './price'


const Item = (props) => (
   <TouchableOpacity style={styles.container} onPress={ () => props.navigation.navigate('Currency', { currency: props} ) }>
       <View style={ styles.row }>
           <Text style={ styles.symbol }>{ props.symbol } </Text>
           <Text style={ styles.lastPrice }>{ Number(props.lastPrice).toFixed(2) } $</Text>
       </View>
       <View style={ styles.row }>
           <Text>Open: { props.openPrice }</Text>
           <Text>Price: <Price price={ props.priceChangePercent}/></Text>
       </View>
   </TouchableOpacity>
    )
export default withNavigation(Item);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EDEDED',
        paddingHorizontal: 10,
        paddingVertical:10,
        height: 60,
        borderBottomWidth:1,
        borderBottomColor:'#B5B6B7'
    },
    row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },  
    lastPrice:{
        fontSize: 18,
        fontWeight:'bold'
    },
    symbol:{
        color:'#282C34',
        fontSize: 18,
        fontWeight:'bold'
    }


});