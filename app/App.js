/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor.js';

import Home from './screens/Home.js';
import configureStore from './store/configureStore.js';

const store = configureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(commonColor)}>
          <Home />
        </StyleProvider>
      </Provider>
    );
  }
}
