import React, { Component } from 'react';
import ListComponent from '../components/listComponent';

export default class CafeListScreen extends Component {

  static navigationOptions = {
    title: 'CafeList',
  };

  handleItemClick = (item) => {
    console.log(item);
    const { navigate } = this.props.navigation;
    navigate('Details', { cafe: item })
  }

  render() {
    return (
        <ListComponent greeting='listComponent'
          openCafeDetail={(item) => this.handleItemClick(item)}
        />
    );
  }
}