import React, {Component} from 'react';
import Header from '../components/Header.js';
import {View, Text} from 'react-native';
import {Colors} from '../styles/Colors';
import {Form, Input, Item, Icon, Label, Picker, Button} from 'native-base';
import MultiSelect from 'react-native-multiple-select';

import {addNewPiece} from '../actions/pieces.js';
import {connect} from 'react-redux';

class AddPieceForm extends Component {
  constructor(props) {
    super(props);
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
          var newState = Object.assign({...this.state}, {newPiece: newPiece});
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
  render() {
    const {dispatch} = this.props;
    return (
      <View>
        <Header navigation={this.props.navigation} onAddPieceForm={true} />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>New Piece</Text>
        </View>
        <Form style={{width: 560, alignSelf: 'center', paddingRight: 15}}>
          <Item fixedLabel>
            <Label style={styles.inputLabel}>Description</Label>
            <Input
              multiline
              onChangeText={text => this.setField({description: text})}
            />
          </Item>
          <Item fixedLabel error={!this.state.priceValid}>
            <Label style={styles.inputLabel}>Price ($)</Label>
            <Input
              keyboardType="numeric"
              onChangeText={text => this.setField({price: text})}
            />
            {this.invalidInputIcon(this.state.priceValid)}
          </Item>
          <Item fixedLabel>
            <Label style={styles.multiselectLabel}>Category</Label>
            <View style={styles.multiselectContainer}>
              <MultiSelect
                uniqueKey="id"
                items={this.state.categoryItems}
                onSelectedItemsChange={selectedItems =>
                  this.setField({categories: selectedItems})
                }
                selectedItems={this.state.newPiece.categories}
                selectText="    Pick Category..."
                searchInputPlaceholderText="Search..."
                altFontFamily="Signika-Regular"
                tagRemoveIconColor="#90ADA4"
                tagBorderColor="#90ADA4"
                tagTextColor="#90ADA4"
                selectedItemTextColor="#90ADA4"
                selectedItemIconColor="#90ADA4"
                itemTextColor="#000"
                displayKey="name"
                submitButtonColor="#90ADA4"
                submitButtonText="Submit"
              />
            </View>
          </Item>
          <Item fixedLabel>
            <Label style={{paddingRight: 174, fontFamily: 'Signika-Regular'}}>
              Metal
            </Label>
            <View style={styles.multiselectContainer}>
              <MultiSelect
                uniqueKey="id"
                items={this.state.metalItems}
                onSelectedItemsChange={selectedItems =>
                  this.setField({metals: selectedItems})
                }
                selectedItems={this.state.newPiece.metals}
                selectText="    Pick Metal(s)..."
                searchInputPlaceholderText="Search..."
                altFontFamily="Signika-Regular"
                tagRemoveIconColor="#90ADA4"
                tagBorderColor="#90ADA4"
                tagTextColor="#90ADA4"
                selectedItemTextColor="#90ADA4"
                selectedItemIconColor="#90ADA4"
                itemTextColor="#000"
                displayKey="name"
                submitButtonColor="#90ADA4"
                submitButtonText="Submit"
              />
            </View>
          </Item>
          <Item fixedLabel>
            <Label style={{fontFamily: 'Signika-Regular', paddingRight: 174}}>
              Stone
            </Label>
            <View style={styles.multiselectContainer}>
              <MultiSelect
                uniqueKey="id"
                items={this.state.stoneItems}
                onSelectedItemsChange={selectedItems =>
                  this.setField({stones: selectedItems})
                }
                selectedItems={this.state.newPiece.stones}
                selectText="    Pick Stone(s)..."
                searchInputPlaceholderText="Search..."
                altFontFamily="Signika-Regular"
                tagRemoveIconColor="#90ADA4"
                tagBorderColor="#90ADA4"
                tagTextColor="#90ADA4"
                selectedItemTextColor="#90ADA4"
                selectedItemIconColor="#90ADA4"
                itemTextColor="#000"
                displayKey="name"
                submitButtonColor="#90ADA4"
                submitButtonText="Submit"
              />
            </View>
          </Item>
          <Item fixedLabel error={!this.state.lengthValid}>
            <Label style={styles.inputLabel}>Length (inches)</Label>
            <Input
              keyboardType="numeric"
              onChangeText={text => this.setField({length: text})}
            />
            {this.invalidInputIcon(this.state.lengthValid)}
          </Item>
          <Item fixedLabel error={!this.state.weightValid}>
            <Label style={styles.inputLabel}>Weight (g)</Label>
            <Input
              keyboardType="numeric"
              onChangeText={text => this.setField({weight: text})}
            />
            {this.invalidInputIcon(this.state.weightValid)}
          </Item>
          <Item fixedLabel>
            <Label style={{paddingRight: 65, fontFamily: 'Signika-Regular'}}>
              Appraisal Available
            </Label>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{width: undefined}}
              selectedValue={this.state.newPiece.appraisal}
              onValueChange={itemValue => this.setField({appraisal: itemValue})}
              placeholder="Yes or No">
              <Picker.Item label="Yes" value={true} />
              <Picker.Item label="No" value={false} />
            </Picker>
          </Item>
          <Item fixedLabel>
            <Label style={styles.inputLabel}>Instagram URL</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label style={styles.inputLabel}>FB Marketplace URL</Label>
            <Input />
          </Item>
          <Item fixedLabel>
            <Label style={styles.inputLabel}>Notes</Label>
            <Input />
          </Item>
          <Button
            style={styles.submitButton}
            onPress={() => dispatch(addNewPiece(this.state.newPiece))}>
            <Text style={styles.submitButtonText}>Add Piece</Text>
          </Button>
        </Form>
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
  multiselectLabel: {
    paddingRight: 150,
    fontFamily: 'Signika-Regular',
  },
  multiselectContainer: {
    width: 310,
    paddingTop: 10,
  },
  inputLabel: {
    fontFamily: 'Signika-Regular',
  },
  submitButton: {
    marginTop: 10,
    marginLeft: 15,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 550,
  },
  submitButtonText: {
    color: Colors.white,
    fontFamily: 'Signika-Regular',
    fontSize: 18,
  },
};
export default connect(mapStateToProps)(AddPieceForm);
