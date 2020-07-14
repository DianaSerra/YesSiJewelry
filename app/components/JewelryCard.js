import React, {Component} from 'react';
import {Text, ImageBackground, Image, View} from 'react-native';
import {Card, CardItem} from 'native-base';
import {Colors} from '../styles/Colors';

function renderIDCircle(cardDimension, cardX, cardY, ID, imageURL) {
  const imageRatio = 226 / 200; //  width/height
  const imageWidth = imageRatio * (cardDimension * (1 / 3));
  const imageHeight = cardDimension * (1 / 3);
  return (
    <ImageBackground
      style={{
        width: imageWidth,
        height: imageHeight,
        position: 'absolute',
        top: cardY + 0.75 * cardDimension,
        left: cardX + 0.75 * cardDimension,
        justifyContent: 'center',
      }}
      source={require('../assets/images/ID_Ellipse.png')}>
      <Text
        style={{
          alignSelf: 'center',
          fontFamily: 'ZillaSlab-Regular',
          fontSize: 30,
          color: Colors.white,
        }}>
        {ID}
      </Text>
    </ImageBackground>
  );
}
class JewelryCard extends Component {
  cardStyle = function(cardDimension) {
    return {
      borderRadius: 36,
      height: cardDimension,
      width: cardDimension,
    };
  };
  cardItemStyle = function(cardDimension) {
    return {
      borderRadius: 36,
      height: cardDimension,
      width: cardDimension,
      overflow: 'hidden',
    };
  };

  state = {
    cardX: 0,
    cardY: 0,
  };

  updateXY = function(X, Y) {};

  //get height of menu bar to use in logo size calculations
  onPageLayout = event => {
    const {x, y} = event.nativeEvent.layout;
    this.setState({cardX: x, cardY: y});
  };
  render() {
    return (
      <View style={{height: (5 / 4) * this.props.cardLength}}>
        <Card
          style={this.cardStyle(this.props.cardLength)}
          onLayout={this.onPageLayout}>
          <CardItem
            style={this.cardItemStyle(this.props.cardLength)}
            button
            cardBody
            onPress={() => alert('You Clicked on Jewel ' + this.props.jewelID)}>
            <Image style={styles.imageStyle} source={this.props.imageURL} />
          </CardItem>
          {renderIDCircle(
            this.props.cardLength,
            this.state.cardX,
            this.state.cardY,
            this.props.jewelID,
          )}
        </Card>
      </View>
    );
  }
}
const styles = {
  imageStyle: {
    borderRadius: 36,
    flex: 1,
    resizeMode: 'center',
  },
};
export default JewelryCard;
