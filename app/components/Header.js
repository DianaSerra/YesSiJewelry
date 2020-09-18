import React, {Component} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Button, Text} from 'native-base';
import {Colors} from '../styles/Colors';

//hardcoded values for the specific tablet this app will be used on
const headerHeight = 82.20844628731922;
const logoWidth = 187.7;

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <View style={styles.header}>
            <View style={styles.logoImageContainer}>
              <Image
                style={styles.logo}
                source={require('../assets/images/YSJ_Logo.png')}
              />
            </View>
            <View style={styles.addButtonContainer}>
              <View style={styles.addButtonWrapper}>
                {this.props.onAddPieceForm ? (
                  <Button
                    primary
                    style={styles.addButton}
                    title="add piece"
                    onPress={() => this.props.navigation.goBack()}>
                    <Text style={styles.buttonTextActive}>+</Text>
                  </Button>
                ) : (
                  <Button
                    bordered
                    primary
                    style={styles.addButton}
                    title="add piece"
                    onPress={() => this.props.navigation.navigate('AddPiece')}>
                    <Text style={styles.buttonText}>+</Text>
                  </Button>
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: Colors.lightGreen,
    width: '100%',
    height: headerHeight,
    flexDirection: 'row',
    paddingLeft: 0,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'center',
  },
  logoImageContainer: {
    flex: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: logoWidth,
    height: headerHeight - 10,
    marginLeft: 15,
  },
  addButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  addButtonWrapper: {
    height: headerHeight - 30,
    width: headerHeight - 30,
    marginRight: 15,
  },
  addButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.darkGreen,
    fontSize: 25,
  },
  buttonTextActive: {
    color: Colors.lightGreen,
    fontSize: 25,
  },
});

export default Header;
