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


function mapStateToProps(state)
{
    console.log(state)
  return {
    userFavoriteList: state.user.favList,
    favoriteList: state.stock.favoriteList
  }
}

function saveCurrency(props){
   
    const symbol = props.navigation.state.params.currency.symbol
    props.dispatch({
        type:'SAVE_FAV',
        payload:{
            item: symbol
        }
    })
    props.dispatch({
        type: 'GET_FAV',
        payload:{
          list: props.userFavoriteList
        }
      })
}

import RealTime from '../components/currency/RealTime'

function Currency(props){
    return(
    <View style={styles.container}>
        <View  style={ styles.header }>
            <Text style={ styles.title}>{ props.navigation.state.params.currency.symbol }</Text>
                <View style={ styles.heartButton }>
                    <TouchableOpacity onPress={ () => saveCurrency(props)}>
                        <Icon name="heart" size={20} style={ [ props.userFavoriteList.indexOf(props.navigation.state.params.currency.symbol) != -1  ? {color: 'red'} : {color: '#B5B6B7'}]}/>
                    </TouchableOpacity>
                </View>
        </View>
        <View style={ styles.row }>
            <View>
                <Text>Open:</Text>
                <Text>{ props.navigation.state.params.currency.openPrice }</Text>
            </View>
            <View>
                <Text>Last Price:</Text>
                <Text>{ props.navigation.state.params.currency.lastPrice }</Text>
            </View>
           
        </View>
        <View style={ styles.row }>
            <View>
                <Text>Price Change:</Text>
                <Text>{ props.navigation.state.params.currency.priceChange }</Text>
            </View>
            <View>
                <Text>Price Change Percent:</Text>
                <Text>{ props.navigation.state.params.currency.priceChangePercent } %</Text>
            </View>
        </View>
        <View>
           <RealTime symbol={props.navigation.state.params.currency.symbol} />
        </View>
    </View>
    )}
export default connect(mapStateToProps)(Currency);

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
    },
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    heart:{
        color:'red'
    }

});