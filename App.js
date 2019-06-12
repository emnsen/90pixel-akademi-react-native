import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

import ActivityIndicatorExample from './src/ActivityIndicatorExample';
import AlertExample from './src/AlertExample';
import Animations from './src/Animations';
import AppStateExample from './src/AppStateExample';
import CameraRollExample from './src/CameraRollExample';
import Home from './src/Home';
import ImageExample from './src/ImageExample';
import ModalExample from './src/ModalExample';
import PickerExample from './src/PickerExample';
import ShareExample from './src/ShareExample';
import TextExample from './src/TextExample';
import TextInputExample from './src/TextInputExample';
import ViewExample from './src/ViewExample';
import WebViewExample from './src/WebViewExample';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Stack key="root">
          <Scene key="home" component={Home} initial />
          <Scene key="activityIndicatorExample" component={ActivityIndicatorExample} />
          <Scene key="alertExample" component={AlertExample} />
          <Scene key="animations" component={Animations} />
          <Scene key="appStateExample" component={AppStateExample} />
          <Scene key="cameraRollExample" component={CameraRollExample} />
          <Scene key="imageExample" component={ImageExample} />
          <Scene key="modalExample" component={ModalExample} />
          <Scene key="pickerExample" component={PickerExample} />
          <Scene key="shareExample" component={ShareExample} />
          <Scene key="textExample" component={TextExample} />
          <Scene key="textInputExample" component={TextInputExample} />
          <Scene key="viewExample" component={ViewExample} />
          <Scene key="webViewExample" component={WebViewExample} />
        </Stack>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
