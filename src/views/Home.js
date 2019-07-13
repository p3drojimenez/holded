import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Container, Header, Item, Input, Icon, Left, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MenuButton from '../components/MenuButton'
import { connect } from 'react-redux'

function mapStateToProps(state)
{
  console.log(state)
  return{
    count: state.stock.count,
  }
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    
  suma = () =>{
    console.log(this.props.count )
    this.props.dispatch({
        type:'SUMA',
        payload:{
          count: this.props.count + 1
        }
      })
  }

  
  render() {
    return (
        <Container>
        <Header searchBar rounded>
            <MenuButton onPress={ () => this.props.navigation.openDrawer() }/>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>
        <View style={ styles.container} >
        <Text> { this.props.count } </Text>
        <TouchableOpacity onPress={ () => this.suma() }>
            <Text>SUMA</Text>
        </TouchableOpacity>
      </View>
      </Container>
     
    );
  }

  
}
const styles = StyleSheet.create({
    container:{ backgroundColor: 'red'}
})
export default connect(mapStateToProps)(Home)