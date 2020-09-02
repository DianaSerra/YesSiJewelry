import React, {Component} from 'react';
import Header from '../components/Header.js';
import {View, Text} from 'react-native';
class AddPieceForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <Header navigation={this.props.navigation} onAddPieceForm={true} />
        <Text>AddPieceForm</Text>
      </View>
    );
  }
}
export default AddPieceForm;
