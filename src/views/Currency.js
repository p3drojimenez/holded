import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ImageBackground
} from "react-native";
import { Icon } from "native-base";
import {connect} from 'react-redux'

function saveCurrency(props){
   
    const symbol = props.navigation.state.params.currency.item.symbol
    props.dispatch({
        type:'SAVE_FAV',
        payload:{
            item: symbol
        }
    })
}

const Currency = (props) => 
    (
    <View style={styles.container}>
        <ImageBackground source={ require('../assets/background.jpg')} style={ styles.header }>
            <Text style={ styles.title}>{ props.navigation.state.params.currency.item.symbol }</Text>
                <View style={ styles.heartButton }>
                    <TouchableOpacity onPress={ () => saveCurrency(props)}>
                        <Icon name="heart" size={20} style={ styles.heart }/>
                    </TouchableOpacity>
                </View>
        </ImageBackground>
        <View style={ styles.row }>
            <View>
                <Text>Open:</Text>
                <Text>{ props.navigation.state.params.currency.item.openPrice }</Text>
            </View>
            <View>
                <Text>Last Price:</Text>
                <Text>{ props.navigation.state.params.currency.item.lastPrice }</Text>
            </View>
           
        </View>
        <View style={ styles.row }>
            <View>
                <Text>priceChange:</Text>
                <Text>{ props.navigation.state.params.currency.item.priceChange }</Text>
            </View>
            <View>
                <Text>priceChangePercent:</Text>
                <Text>{ props.navigation.state.params.currency.item.priceChangePercent }</Text>
            </View>
           
        </View>
    </View>
    )
export default connect()(Currency);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
        paddingTop:10
    },
    header:{
        flexDirection:'row',
        paddingHorizontal:20,
        paddingTop:10,
        alignItems:'center',
        justifyContent:'space-between',
        height:200,
    },
    title:{
        fontSize: 18,
        color:'#FFFFFF',
        fontWeight: 'bold'
    },
    heart:{
        color:'red'
    }

});