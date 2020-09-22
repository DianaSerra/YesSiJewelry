import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Input, Item, Icon, Label, Picker, Button} from 'native-base';
import MultiSelect from 'react-native-multiple-select';
import {Colors} from '../styles/Colors';

class AddPieceForm extends Component {
  constructor(props) {
    super(props);
  }
  invalidInputIcon(isValid) {
    if (!isValid) {
      return <Icon name="closecircle" type="AntDesign" />;
    }
  }
  renderSubmitError() {
    console.log(this.props.submitError);
    return (
      <Text
        style={{
          fontFamily: 'Signika-Regular',
          color: '#FF0000',
          textAlign: 'center',
          marginVertical: 5,
        }}>
        {this.props.submitError}
      </Text>
    );
  }
  render() {
    const {
      setField,
      priceValid,
      lengthValid,
      weightValid,
      categoryItems,
      newPiece,
      metalItems,
      stoneItems,
      submitNewPiece,
    } = this.props;
    return (
      <View>
        <Item fixedLabel>
          <Label style={styles.inputLabel}>Description</Label>
          <Input
            multiline
            onChangeText={text => setField({description: text})}
          />
        </Item>
        <Item fixedLabel error={!priceValid}>
          <Label style={styles.inputLabel}>Price ($)</Label>
          <Input
            keyboardType="numeric"
            onChangeText={text => setField({price: text})}
          />
          {this.invalidInputIcon(priceValid)}
        </Item>
        <Item fixedLabel>
          <Label style={styles.multiselectLabel}>Category</Label>
          <View style={styles.multiselectContainer}>
            <MultiSelect
              flatListProps={{nestedScrollEnabled: true}}
              uniqueKey="id"
              items={categoryItems}
              onSelectedItemsChange={selectedItems =>
                setField({categories: selectedItems})
              }
              selectedItems={newPiece.categories}
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
          <Label
            style={{
              paddingRight: 174,
              fontFamily: 'Signika-Regular',
            }}>
            Metal
          </Label>
          <View style={styles.multiselectContainer}>
            <MultiSelect
              flatListProps={{nestedScrollEnabled: true}}
              uniqueKey="id"
              items={metalItems}
              onSelectedItemsChange={selectedItems =>
                setField({metals: selectedItems})
              }
              selectedItems={newPiece.metals}
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
          <Label
            style={{
              fontFamily: 'Signika-Regular',
              paddingRight: 174,
            }}>
            Stone
          </Label>
          <View style={styles.multiselectContainer}>
            <MultiSelect
              flatListProps={{nestedScrollEnabled: true}}
              uniqueKey="id"
              items={stoneItems}
              onSelectedItemsChange={selectedItems =>
                setField({stones: selectedItems})
              }
              selectedItems={newPiece.stones}
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
        <Item fixedLabel error={!lengthValid}>
          <Label style={styles.inputLabel}>Length (inches)</Label>
          <Input
            keyboardType="numeric"
            onChangeText={text => setField({length: text})}
          />
          {this.invalidInputIcon(lengthValid)}
        </Item>
        <Item fixedLabel error={!weightValid}>
          <Label style={styles.inputLabel}>Weight (g)</Label>
          <Input
            keyboardType="numeric"
            onChangeText={text => setField({weight: text})}
          />
          {this.invalidInputIcon(weightValid)}
        </Item>
        <Item fixedLabel>
          <Label style={{paddingRight: 65, fontFamily: 'Signika-Regular'}}>
            Appraisal Available
          </Label>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{width: undefined}}
            selectedValue={newPiece.appraisal}
            onValueChange={itemValue => setField({appraisal: itemValue})}
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
        {priceValid && lengthValid && weightValid
          ? null
          : this.renderSubmitError()}
        <Button style={styles.submitButton} onPress={() => submitNewPiece()}>
          <Text style={styles.submitButtonText}>Add Piece</Text>
        </Button>
      </View>
    );
  }
}
const styles = {
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
    marginBottom: 20,
  },
  submitButtonText: {
    color: Colors.white,
    fontFamily: 'Signika-Regular',
    fontSize: 18,
  },
};

export default AddPieceForm;
