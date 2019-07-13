import React, { Component } from 'react';
import { View, Text } from 'react-native';

import MenuButton from '../components/MenuButton'
import { connect } from 'react-redux'

function mapStateToProps(state)
{
  console.log(state)
  return{
    count: state.stock.count,
  }
}
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  static navigationOptions = {
    headerTitle: <Text>User</Text>,
    headerLeft: <MenuButton onPress={ () => this.props.navigation.openDrawer() }/>
  };

  componentDidMount = () => {
    console.log(this.props)
  };
  
  render() {
    return (
      <View>
        <Text> Suma: { this.props.count  } </Text>
      </View>
    );
  }
}

export default connect(mapStateToProps)(UserList)