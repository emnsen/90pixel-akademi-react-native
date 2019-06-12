import React, { Component } from 'react';
import { Button, CameraRoll, Image, ScrollView, View } from 'react-native';

class CameraRollExample extends Component {
  state = { photos: [] };

  _handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos'
    })
      .then(r => {
        console.log('r', r);
        this.setState({ photos: r.edges });
      })
      .catch(err => {
        console.log('err', err);
        //Error Loading Images
      });
  };

  render() {
    return (
      <View>
        <Button title="Load Images" onPress={this._handleButtonPress} />
        <ScrollView>
          {this.state.photos.map((p, i) => {
            return (
              <Image
                key={i}
                style={{
                  width: 300,
                  height: 100
                }}
                source={{ uri: p.node.image.uri }}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default CameraRollExample;
