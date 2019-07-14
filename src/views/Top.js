import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Item, Input, Icon, Content, } from 'native-base';
import MenuButton from '../components/MenuButton'

import { connect } from 'react-redux'

function mapStateToProps(state)
{
  return state
}
class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
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
        
        </Content>
  </Container>
    );
  }
}

const styles = StyleSheet.create({
  head: {

  }}
)


export default connect(mapStateToProps)(Top)