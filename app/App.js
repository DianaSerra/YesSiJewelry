/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {StyleProvider} from 'native-base';
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor.js';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AddPieceScreen from './screens/AddPieceScreen.js';
import Home from './screens/Home.js';
import configureStore from './store/configureStore.js';
const store = configureStore();
const Stack = createStackNavigator();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StyleProvider style={getTheme(commonColor)}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" headerMode="none">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AddPiece" component={AddPieceScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </StyleProvider>
      </Provider>
    );
  }
}
