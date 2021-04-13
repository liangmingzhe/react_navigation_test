import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Button} from 'react-native';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{backgroundColor: '#F0f0f0', flex: 1}}>
        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 200}}
          onPress={() => this.props.navigation.goBack()}>
          <Text style={{ fontSize: 20,width: 200, height: 30, lineHeight: 30, textAlign: 'center'}}>返回</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
