/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import Login from './Pages/LoginPage';
import HomeScreen from './Pages/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {
  StyleSheet,
  useColorScheme,
  View,
  Button,
  Text,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';

const PushStack = createStackNavigator();
const ModelStack = createStackNavigator();
const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    //导航容器
    <NavigationContainer>
      {/*导航 设置根视图  如果headerMode为none 隐藏导航栏 */}
      <PushStack.Navigator initialRouteName="Login" mode="modal" headerMode="none">

        <PushStack.Screen
          name="Login"
          component={Login}
          options={() => ({
            headerTitle: <Text>登录</Text>,
            headerStyle: {backgroundColor: '#FFFFFF'},
            // headerShown: false, //隐藏导航栏
          })}
        />
        <PushStack.Screen
          name="Home"
          component={HomeScreen}
          options={() => ({
            headerTitle: <Text>1</Text>,
            headerRight: imageButton, //导航右侧按键
            headerShown: false, //隐藏导航栏
            cardOverlayEnabled: true,
            gestureEnabled: false, //禁止手势
            headerBackTitleVisible: false, //是否显示导航返回的文字
            //headerBackImage:()=><Image source={require('./images/alert_icon_enter.png')} />, 返回按键的图形
            // cardStyleInterpolator: ({current: {progress}}) => ({
            //   cardStyle: {
            //     opacity: progress.interpolate({
            //       inputRange: [0, 0.5, 0.9, 1],
            //       outputRange: [0, 0.25, 0.7, 1],
            //     }),
            //   },
            //   overlayStyle: {
            //     opacity: progress.interpolate({
            //       inputRange: [0, 1],
            //       outputRange: [0, 0.5],
            //       extrapolate: 'clamp',
            //     }),
            //   },
            // }),
          })}
        />
      </PushStack.Navigator>
    </NavigationContainer>
  );

  //登录 - 右侧导航
  function imageButton() {
    return (
      <TouchableOpacity style={{marginEnd: 5}} onPress={alertClickedCount}>
        <Image source={require('./images/alert_icon_enter.png')} />
      </TouchableOpacity>
    );
  }

  function alertClickedCount(props) {
    props.count1 = 0;
    props.count1 += 1;
    Alert.alert('点击次数', props.count1);
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
