import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import {Colors} from '../styles/Colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').height;

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoImageContainer}>
        <Image
          style={{
            flex: 1,
            width: 177.161396484375,
            height: 82.20844628731922,
          }}
          source={require('../assets/images/YSJ_Logo.png')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.lightGreen,
    //flex: 0.5,
    width: 913.4271809702136, //getHeaderDimensions().headerWidth,
    height: 82.20844628731922, //getHeaderDimensions().headerHeight,
  },
  logoImageContainer: {
    flex: 1,
    paddingVertical: 7,
    paddingLeft: 18,
  },
});
