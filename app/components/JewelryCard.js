import React, {Component} from 'react';
import {Text, ImageBackground, Image, View} from 'react-native';
import {Card, CardItem} from 'native-base';
import {Colors} from '../styles/Colors';

function renderIDCircle(
  cardDimension,
  cardX,
  cardY,
  ID,
  bubbleWidth,
  bubbleHeight,
) {
  return (
    <ImageBackground
      style={{
        width: bubbleWidth,
        height: bubbleHeight,
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
  constructor(props) {
    super(props);
    const imageRatio = 226 / 200; //  width/height
    const imageWidth = imageRatio * (this.props.cardLength * (1 / 3));
    const imageHeight = this.props.cardLength * (1 / 3);
    this.state = {
      cardX: 0,
      cardY: 0,
      bubbleWidth: imageWidth,
      bubbleHeight: imageHeight,
    };
  }
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

  updateXY = function(X, Y) {};

  //get height of menu bar to use in logo size calculations
  onPageLayout = event => {
    const {x, y} = event.nativeEvent.layout;
    this.setState({cardX: x, cardY: y});
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          height: 0.75 * this.props.cardLength + this.state.bubbleHeight + 2,
          width: 0.75 * this.props.cardLength + this.state.bubbleWidth + 2, //added the 2 because it still seemed flattened on the right?
        }}>
        <Card
          style={this.cardStyle(this.props.cardLength)}
          onLayout={this.onPageLayout}>
          <CardItem
            style={this.cardItemStyle(this.props.cardLength)}
            button
            cardBody
            onPress={() =>
              alert(
                'Jewel ' +
                  this.props.jewelID +
                  '\nDescription: ' +
                  this.props.description +
                  '\nPrice: $' +
                  this.props.price,
              )
            }>
            <Image
              style={styles.imageStyle}
              source={{uri: this.props.imageURL}}
            />
          </CardItem>
          {renderIDCircle(
            this.props.cardLength,
            this.state.cardX,
            this.state.cardY,
            this.props.jewelID,
            this.state.bubbleWidth,
            this.state.bubbleHeight,
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
    width: 500,
    height: 500,
  },
};
export default JewelryCard;
