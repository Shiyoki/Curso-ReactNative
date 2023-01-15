import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { StackNavigation } from './src/navigation/StackNavigation';
import {MenuLateral} from './src/navigation/MenuLateral';
import {MenuLateral2} from './src/navigation/MenuLateral2';
import {Tabs} from './src/navigation/Tabs';
import {AuthProvider} from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <MenuLateral /> */}
        <MenuLateral2 />
        {/* <Tabs /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
