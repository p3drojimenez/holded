import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MenuButton from '../components/MenuButton'

export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    headerTitle: <Text>User</Text>,
    headerLeft: <MenuButton />
  };

  render() {
    return (
      <View>
        <Text> UserList </Text>
      </View>
    );
  }
}
