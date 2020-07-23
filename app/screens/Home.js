import React, {Component} from 'react';
import {View, SafeAreaView, StatusBar, Text} from 'react-native';
import ShowAllScreen from './ShowAllScreen.js';

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
    const piecesLength = pieces.length > 0;
    console.log('HOME : ' + piecesLength);
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <SafeAreaView style={{flex: 1}}>
          {isFetching ? (
            <Text>Loading...</Text>
          ) : (
            <ShowAllScreen pieces={pieces} />
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
