import React, {Component} from 'react';
import {View, FlatList, Text} from 'react-native';
import JewelryCard from './JewelryCard';
import Header from './Header';

/*
 TODO: 
- Dynamically size cards according to screen width
  - Dynamically place cards (ie. if smaller screen, only do one column)
- If odd number of cards, place on the side, not the middle
*/
class JewelryDisplay extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <FlatList
        data={this.props.dataSource}
        renderItem={({item}) => (
          <View style={styles.cardContainer}>
            <JewelryCard
              cardLength={220}
              jewelID={item.id}
              imageURL={item.imageURL}
              description={item.description}
              price={item.price}
            />
          </View>
        )}
        numColumns={2}
      />
    );
  }
}

const styles = {
  //container: {flex: 1},
  //listContainer: {flex: 5.5},
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
};
export default JewelryDisplay;
