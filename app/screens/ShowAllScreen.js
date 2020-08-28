import React, {Component} from 'react';
import JewelryDisplay from '../components/JewelryDisplay.js';

class ShowAllScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {pieces} = this.props;
    return <JewelryDisplay dataSource={pieces} />;
  }
}
export default ShowAllScreen;
