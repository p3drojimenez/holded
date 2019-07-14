import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Content, } from 'native-base';
import MenuButton from '../components/MenuButton'
import StockList from '../components/home/StockList'

import { connect } from 'react-redux'


function mapStateToProps(state)
{
  return {
    userFavoriteList: state.user.favList,
    favoriteList: state.stock.favoriteList
  }
}
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  componentDidMount(){

    this.props.dispatch({
      type: 'GET_FAV',
      payload:{
        list: this.props.userFavoriteList
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
          <StockList symbols={this.props.favoriteList}/>
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


export default connect(mapStateToProps)(UserList)