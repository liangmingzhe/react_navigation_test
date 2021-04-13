import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
export default class LoginPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{backgroundColor: '#FF5151', flex: 1}}>
        <View style={styles.abovePart}>
          <TouchableOpacity
            style={styles.navigationButton}
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text style={styles.text}>登录</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Text style={styles.text}>注册</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navigationButton: {
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    marginTop: 200,
    fontSize: 20,
    width: 200,
    height: 30,
    lineHeight: 30,
  },
  abovePart: {
    flex: 1,
    backgroundColor: '#D0D0D0',
  },
  middlePart: {
    flex: 1,
    backgroundColor: '#336655',
  },
  bottomPart: {
    flex: 1,
    backgroundColor: '#ff6655',
  },
});
