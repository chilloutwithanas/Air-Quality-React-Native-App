import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/Home.screen';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: Encountered two children with the same key']);

const App = () => {
  return <HomeScreen />;
};

export default App;
