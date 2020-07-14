import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Colors} from '../styles/Colors';

//Calculates the size of the logo
//use instead of 'contain' to avoid the awkward amount of padding it creates on the left
function renderLogo(headerHeight) {
  const imageRatio = 261 / 100;
  const imageWidth = imageRatio * (headerHeight - 14);
  const imageHeight = headerHeight;
  return (
    <Image
      style={{
        flex: 1,
        width: imageWidth,
        height: imageHeight,
      }}
      source={require('../assets/images/YSJ_Logo.png')}
    />
  );
}
export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(0);

  //get height of menu bar to use in logo size calculations
  const onPageLayout = function(event) {
    const {height} = event.nativeEvent.layout;
    setHeaderHeight(height);
  };
  return (
    <View style={styles.header} onLayout={onPageLayout}>
      <View style={styles.logoImageContainer}>{renderLogo(headerHeight)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.lightGreen,
    flex: 0.5,
  },
  logoImageContainer: {
    flex: 1,
    paddingVertical: 7,
    paddingLeft: 18,
  },
});
