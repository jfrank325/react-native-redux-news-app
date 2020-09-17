import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AppNavigator from './src/navigation/AppNavigator';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const loadFonts = () => {
  return Font.loadAsync({
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
  });
};

export default function App() {
  const [font, setFont] = useState(false);

  if (!font) {
    return <AppLoading startAsync={loadFonts} onFinish={() => setFont(true)} />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({});
