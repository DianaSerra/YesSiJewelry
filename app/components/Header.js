import {React, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Colors} from '../styles/Colors';

const onPageLayout = function(event) {
  const {height} = event.nativeEvent.layout;
  console.log('ON LAYOUT');
  return height;
};
function renderLogo(headerHeight) {
  const imageRatio = 261 / 100;
  const imageWidth = imageRatio * headerHeight;
  const imageHeight = headerHeight;

  return (
    <Image
      style={{
        flex: 1,
        resizeMode: 'contain',
        width: imageWidth,
        height: imageHeight,
      }}
      source={require('../assets/images/YSJ_Logo.png')}
    />
  );
}

export default function Header() {
  const [headerHeight, setHeaderHeight] = useState(0);
  return (
    <View
      style={styles.header}
      onPageLayout={e => setHeaderHeight(onPageLayout(e))}>
      <View style={styles.logoImageContainer}>{renderLogo(headerHeight)}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.lightGreen,
    flex: 0.5,
    //paddingLeft: 0, //NOT THIS
    //marginLeft: 0, //NOT THIS
  },
  /*
  logoImage: {
    flex: 1,
    resizeMode: 'contain',
    //paddingLeft: 0, //NOT THIS
  },*/
  logoImageContainer: {
    flex: 1,
    padding: 7,
    //marginLeft: 0, //NOT THIS
  },
});
