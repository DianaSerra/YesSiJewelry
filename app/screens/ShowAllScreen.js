import React, {Component} from 'react';
import {Text} from 'react-native';
import JewelryDisplay from '../components/JewelryDisplay.js';
class ShowAllScreen extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {id: '001', src: require('../assets/images/IMG_9918.jpg')},
        {id: '002', src: require('../assets/images/IMG_9918.jpg')},
        {id: '003', src: require('../assets/images/IMG_9918.jpg')},
        {id: '004', src: require('../assets/images/IMG_9918.jpg')},
        {id: '005', src: require('../assets/images/IMG_9918.jpg')},
        {id: '006', src: require('../assets/images/IMG_9918.jpg')},
        {id: '007', src: require('../assets/images/IMG_9918.jpg')},
        {id: '008', src: require('../assets/images/IMG_9918.jpg')},
        {id: '009', src: require('../assets/images/IMG_9918.jpg')},
      ],
    };
  }
  render() {
    return <JewelryDisplay dataSource={this.state.items} />;
  }
}
export default ShowAllScreen;
