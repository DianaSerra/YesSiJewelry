import React, {Component} from 'react';
import JewelryDisplay from '../components/JewelryDisplay.js';
import {ActivityIndicator, View} from 'react-native';

class ShowAllScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {pieces} = this.props;
    return (
      <View style={{flex: 1}}>
        <JewelryDisplay dataSource={pieces} />
      </View>
    );
  }
}
export default ShowAllScreen;
