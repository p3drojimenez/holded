import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { API_KEY } from '../../config/api'
import RenderInfo from './renderInfo'
class RealTime extends Component {
  constructor(props) {
   
    super(props);
    this.state = {
        symbol: props.symbol
    };
  }

async setRealtime(symbol)
{
    const URL = 'https://api.binance.com/api/v1/klines?symbol=' +symbol+'&interval=1h&limit=168'
    const realTimeAPICall =  await fetch(URL,
        { method: 'GET',
          withCredentials: true,
          credentials: 'include',
          headers: {
              'X-MBX-APIKEY': API_KEY,
              'Content-Type': 'application/json'
        }})
        const dataRealTime = await realTimeAPICall.json()
       
        this.setState({ hour: dataRealTime[0] })
        this.setState({ day: dataRealTime[23] })
        this.setState({ wk: dataRealTime[167] })
        console.log(this.state)
      
}

componentDidMount()
{
    this.setRealtime(this.state.symbol)
}

  render() {
    return (
      <View>
        <Text style={ styles.title }>Real Time </Text>
          <View style={ styles.row }>
              <Text>1hr</Text>
              { this.state.day ? <RenderInfo values={ this.state.hour } /> : <ActivityIndicator />}
          </View>
          <View style={ styles.row }>
              <Text>24hr</Text>
              { this.state.day ? <RenderInfo values={ this.state.day } /> : <ActivityIndicator />}
          </View>
          <View style={ styles.row }>
              <Text>7 days</Text>
              { this.state.day ? <RenderInfo values={ this.state.day } /> : <ActivityIndicator />}
          </View>
        </View>
    );
  }
}

const styles =  StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 10
    },
    row:{
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 5,
    }
})
export default RealTime