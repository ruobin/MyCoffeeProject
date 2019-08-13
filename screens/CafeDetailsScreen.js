import React, { Component } from 'react';
import { Text, Image, View, Button } from 'react-native';
import ToastExample from '../ToastExample';

export default class CafeDetailsScreen extends Component {

  static navigationOptions = {
    title: 'CafeDetails',
  };

  componentDidMount() {
    ToastExample.show('Details Screen Mounted!', ToastExample.SHORT);
  }

  backToListScreen = () => {
    const { navigate } = this.props.navigation;
    navigate('Home');
  }

  render() {
    const { navigation } = this.props;
    const cafe = navigation.getParam('cafe');
    console.log(cafe.name);

    return (
      <View>
        <Text>{cafe.name}</Text>
        <Text>TEL: {cafe.display_phone}</Text>
        <Text>rating: {cafe.rating}</Text>
        <Image
          style={{ width: 150, height: 150, resizeMode: 'cover' }}
          source={{ uri: cafe.image_url }}
        />
        <Button
          title="Return to CafeList"
          onPress={() => this.backToListScreen()}
        />
      </View>
    );
  }
}