import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { StackNavigation } from './src/navigation/StackNavigation';
import { MenuLateral } from './src/navigation/MenuLateral';
import { MenuLateral2 } from './src/navigation/MenuLateral2';
import { Tabs } from './src/navigation/Tabs';

const App = () => {
  return (
    <NavigationContainer>
      {/* <MenuLateral /> */}
      <MenuLateral2 />
      {/* <Tabs /> */}
    </NavigationContainer>
  );
};

export default App;
