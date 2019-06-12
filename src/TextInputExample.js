import React, { Component } from 'react';
import { AppRegistry, TextInput, View } from 'react-native';

class UselessTextInput extends Component {
  render() {
    return <TextInput {...this.props} editable={true} maxLength={40} />;
  }
}

export default class TextInputExample extends Component {
  state = {
    text: 'Useless Multiline Placeholder'
  };

  render() {
    return (
      <View
        style={{
          backgroundColor: this.state.text,
          borderBottomColor: '#000000',
          borderBottomWidth: 1
        }}
      >
        <UselessTextInput
          placeholder="Enter the password"
          keyboardType="phone-pad"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
      </View>
    );
  }
}
