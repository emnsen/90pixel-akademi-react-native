import React, { Component } from 'react';
import { Picker, View } from 'react-native';

export default class PickerExample extends Component {
  state = {
    language: 'js'
  };

  render() {
    return (
      <View>
        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({ language: itemValue })}
        >
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    );
  }
}
