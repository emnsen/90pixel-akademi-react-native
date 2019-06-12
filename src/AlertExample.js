import React, { Component } from 'react';
import { Alert, Button, Text, View } from 'react-native';

export default class AlertExample extends Component {
  alert = () => {
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      { cancelable: false }
    );
  };

  render() {
    return (
      <View>
        <Button onPress={this.alert} title="Click" color="#841584" />
      </View>
    );
  }
}
