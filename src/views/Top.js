import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Header, Right, Left, Body, Title, Content, } from 'native-base';
import MenuButton from '../components/MenuButton'
import StockList from '../components/home/StockList'
import { connect } from 'react-redux'

function mapStateToProps(state)
{
  return {
    data: state.stock.data
  }
}
class Top extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount()
  {
      this.props.dispatch({
        type: 'GET_TOP'
      })
  }
  render() {
    return (
      <Container>
        <Header searchBar rounded  style={ styles.head }>
          <Left>
            <MenuButton onPress={ () => this.props.navigation.openDrawer() }/>
            </Left>
            <Body>
              <Title>TOP</Title>
            </Body> 
            <Right />     
        </Header>
        <Content>
          <StockList symbols={this.props.data}/>
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