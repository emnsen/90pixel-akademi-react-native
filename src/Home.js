import React, { Component } from 'react';
import { Button, Dimensions, FlatList, StatusBar, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

const examples = [
  'activityIndicatorExample',
  'alertExample',
  'animations',
  'appStateExample',
  'cameraRollExample',
  'imageExample',
  'modalExample',
  'pickerExample',
  'shareExample',
  'textExample',
  'textInputExample',
  'viewExample',
  'webViewExample'
];

const { width, height } = Dimensions.get('window');

export default class Home extends Component {
  render() {
    console.log(`width: ${width}, height: ${height}`);

    navigator.geolocation.getCurrentPosition;

    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="red" barStyle="light-content" />
        <FlatList
          data={examples}
          keyExtractor={item => item}
          renderItem={({ item }) => <Button onPress={() => Actions.push(item, { title: item })} title={item} />}
        />
      </View>
    );
  }
}
