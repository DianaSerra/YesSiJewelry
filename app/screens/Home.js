import React, {Component} from 'react';
import {View, SafeAreaView, Text} from 'react-native';
import JewelryDisplay from '../components/JewelryDisplay.js';
import Header from '../components/Header.js';

import {connect} from 'react-redux';
import {fetchAllPieceData} from '../actions/pieces.js';
import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {dispatch} = this.props;
    console.log('componentDidMount');
    dispatch(fetchAllPieceData());
  }
  render() {
    const {isFetching, pieces} = this.props;
    return (
      <View>
        <Header navigation={this.props.navigation} onAddPieceForm={false} />
        <SafeAreaView style={{paddingBottom: 160}}>
          {isFetching ? (
            <View>
              <Text>Loading...</Text>
            </View>
          ) : (
            <JewelryDisplay dataSource={pieces} />
          )}
        </SafeAreaView>
      </View>
    );
  }
}
Home.propTypes = {
  pieces: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};
//describes how to transform the current Redux store state into the
//props you want to pass to a presentational component you are wrapping
function mapStateToProps(state) {
  const {all_pieces} = state;
  const {isFetching, items: pieces} = all_pieces || {
    isFetching: true,
    items: [],
  };

  return {isFetching, pieces};
}

export default connect(mapStateToProps)(Home);
