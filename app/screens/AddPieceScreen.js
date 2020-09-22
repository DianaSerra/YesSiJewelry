import React, {Component} from 'react';
import Header from '../components/Header.js';
import {View, Text, FlatList} from 'react-native';
import {Colors} from '../styles/Colors';
import {Icon} from 'native-base';
import AddPieceForm from '../components/AddPieceForm.js';
import {addNewPiece} from '../actions/pieces.js';
import {connect} from 'react-redux';

class AddPieceScreen extends Component {
  constructor(props) {
    super(props);
    this.setField = this.setField.bind(this);
    this.submitNewPiece = this.submitNewPiece.bind(this);
    this.state = {
      newPiece: {
        description: '',
        price: 0,
        categories: [],
        metals: [],
        stones: [],
        length: 0,
        weight: 0,
        appraisal: false,
        instaURL: '',
        fbURL: '',
        notes: '',
      },
      priceValid: true,
      lengthValid: true,
      weightValid: true,
      submitError: '',
      categoryItems: [
        {id: 'Necklace', name: 'Necklace'},
        {id: 'Chain', name: 'Chain'},
        {id: 'Bracelet', name: 'Bracelet'},
        {id: 'Ring', name: 'Ring'},
        {id: 'Earring', name: 'Earring'},
        {id: 'Pendant', name: 'Pendant'},
      ],
      metalItems: [
        {id: 'Gold', name: 'Gold'},
        {id: 'Silver', name: 'Silver'},
        {id: 'Rose Gold', name: 'Rose Gold'},
      ],
      stoneItems: [
        {id: 'Diamond', name: 'Diamond'},
        {id: 'Emerald', name: 'Emerald'},
        {id: 'Ruby', name: 'Ruby'},
        {id: 'Pearl', name: 'Pearl'},
        {id: 'Cubic Zirconia', name: 'Cubic Zirconia'},
        {id: 'Amethyst', name: 'Amethyst'},
        {id: 'Onyx', name: 'Onyx'},
        {id: 'Sapphire', name: 'Sapphire'},
      ],
    };
  }
  setField(newField) {
    var newPiece = Object.assign({...this.state.newPiece}, newField);
    var i;
    var keys = Object.keys(newField);
    for (i in keys) {
      switch (keys[i]) {
        case 'length':
          var re = new RegExp(/^\d+(\.\d*)?$/);
          newPiece = Object.assign(
            {...this.state.newPiece},
            {length: parseFloat(newField.length)},
          );
          var newState = Object.assign({...this.state}, {newPiece: newPiece});
          newState.lengthValid =
            re.test(newField.length) || newField.length == '';
          this.setState(newState);
          break;
        case 'weight':
          var re = new RegExp(/^\d+(\.\d*)?$/);
          newPiece = Object.assign(
            {...this.state.newPiece},
            {weight: parseFloat(newField.weight)},
          );
          var newState = Object.assign({...this.state}, {newPiece: newPiece});
          newState.weightValid =
            re.test(newField.weight) || newField.weight == '';
          this.setState(newState);
          break;
        case 'price':
          var re = new RegExp(/^\d+(\.\d{1,2})?$/);
          newPiece = Object.assign(
            {...this.state.newPiece},
            {price: parseFloat(newField.price)},
          );
          var newState = Object.assign({...this.state}, {newPiece: newPiece});
          newState.priceValid = re.test(newField.price) || newField.price == '';
          this.setState(newState);
          break;
        default:
          var newState = Object.assign({}, this.state, {newPiece: newPiece});
          this.setState(newState);
          break;
      }
    }
  }
  invalidInputIcon(isValid) {
    if (!isValid) {
      return <Icon name="closecircle" type="AntDesign" />;
    }
  }
  submitNewPiece() {
    if (
      this.state.lengthValid &&
      this.state.priceValid &&
      this.state.weightValid
    ) {
      this.setState(Object.assign({...this.state}, {submitError: ''}));
      this.props.dispatch(addNewPiece(this.state.newPiece));
      this.props.navigation.navigate('Home');
    } else {
      var msg = 'Error: Please fix the following field(s): ';
      if (!this.state.priceValid) {
        msg = msg + '\n- price';
      }
      if (!this.state.lengthValid) {
        msg = msg + '\n- length';
      }
      if (!this.state.weightValid) {
        msg = msg + '\n- weight';
      }
      this.setState(Object.assign({...this.state}, {submitError: msg}));
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Header navigation={this.props.navigation} onAddPieceForm={true} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>New Piece</Text>
        </View>
        <View
          style={{
            alignSelf: 'center',
            paddingBottom: 20,
            height: '85%',
          }}>
          <FlatList
            contentContainerStyle={{flexGrow: 1}}
            nestedScrollEnabled
            data={[{id: 'form'}]}
            renderItem={() => (
              <AddPieceForm
                setField={this.setField}
                priceValid={this.state.priceValid}
                lengthValid={this.state.lengthValid}
                weightValid={this.state.weightValid}
                categoryItems={this.state.categoryItems}
                newPiece={this.state.newPiece}
                metalItems={this.state.metalItems}
                stoneItems={this.state.stoneItems}
                submitNewPiece={this.submitNewPiece}
                submitError={this.state.submitError}
              />
            )}
          />
        </View>
      </View>
    );
  }
}
function mapStateToProps(state) {
  const {new_piece} = state;
  return {isCreating: new_piece.isCreating, submittedPiece: new_piece.newPiece};
}
const styles = {
  titleContainer: {
    paddingVertical: 10,
  },
  titleText: {
    textAlign: 'center',
    fontFamily: 'Signika-SemiBold',
    fontSize: 25,
    color: Colors.pageTitle,
  },
};
export default connect(mapStateToProps)(AddPieceScreen);
