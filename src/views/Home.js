import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Container, Header, Item, Input, Icon, Left, Button } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MenuButton from '../components/MenuButton'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        <Container>
        <Header searchBar rounded>
            <MenuButton />
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>
        <View style={ styles.container} >
        <Text> Home dasdasdasda </Text>
      </View>
      </Container>
     
    );
  }

  
}
const styles = StyleSheet.create({
    container:{ backgroundColor: 'red'}
})
export default Home