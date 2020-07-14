import React, {Component} from 'react';
import {Text} from 'react-native';
import JewelryCard from './JewelryCard';

class JewelryDisplay extends Component {
  render() {
    return (
      <JewelryCard
        cardLength={250}
        jewelID="001"
        imageURL={require('../assets/images/IMG_9918.jpg')}
      />
    );
  }
}
export default JewelryDisplay;
