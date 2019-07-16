import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList} from 'react-native';
import { Container, Header, Item, Input, Icon, Content, } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MenuButton from '../components/MenuButton'
import { connect } from 'react-redux'

import StockList from '../components/shared/StockList'

function mapStateToProps(state)
{
  console.log(state)
  return{
    count: state.stock.count,
    data: state.stock.data,
    dataFilter: state.stock.dataFilter,
    symbols: state.stock.symbols,
    isConected: state.status.isConected
  }
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  static navigationOptions = {
    header: null
}
  async isConected(){

      try{
        const isConectedCall = await fetch('https://api.binance.com/api/v1/ping')
        return true
      }catch{
        return false
      }
  }

  async checkConnection(){
    this.props.dispatch({
      type: 'SET_CONECTION_STATUS',
      payload:{
        isConected: await this.isConected()
      }
    })
  }

  async getData()
  {
    const dataCall = await fetch('https://api.binance.com/api/v1/ticker/24hr')  
    this.props.dispatch({
        type: 'STORE_DATA',
        payload:{
          data: await dataCall.json()
        }
      })
  }

    async componentDidMount(){
      await this.checkConnection()
      this.getData()
    
    }

  searchCurrency(search){
    this.props.dispatch({
      type: 'SEARCH_CURRENCY',
      payload:{
        search
      }
    })
  }
  render() {
    return (
        <Container>
          <Header searchBar rounded  style={ styles.head }>
              <MenuButton onPress={ () => this.props.navigation.openDrawer() }/>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search" onChangeText={ (search) => this.searchCurrency(search)}/>
              </Item>            
          </Header>
          <Content>
            <View style={ styles.container} >
              { !this.props.isConected && <Text>You are not connected</Text> }
              <StockList symbols={this.props.dataFilter} />
            </View>
          </Content>
      </Container>
     
    );
  }

  
}
const styles = StyleSheet.create({
  head:{
    alignItems:'center',
  }
})
export default connect(mapStateToProps)(Home)