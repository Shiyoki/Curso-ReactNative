import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import {Tab1Screen} from '../screens/Tab1Screen';
import {Tab2Screen} from '../screens/Tab2Screen';
import {Tab3Screen} from '../screens/Tab3Screen';
import {StackNavigation} from './StackNavigation';
import {colors} from '../themes/appTheme';
import {Platform, Text} from 'react-native';
import { TopTabNavigator } from './TopTabNavigator';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />;
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
    sceneAnimationEnabled={true}
    barStyle={{
      backgroundColor: colors.primary
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'bandage-outline';
            break;

          case 'Tab2Screen':
            iconName = 'basketball-outline';
            break;

          case 'StackNavigation':
            iconName = 'book-outline';
            break;
        }
        return <Icon name={iconName} size={20} color={color} />;
      },
    })}>
      <BottomTabAndroid.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabAndroid.Screen
        name="StackNavigation"
        options={{title: 'Stack'}}
        component={StackNavigation}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
  return (
    <BottomTabIOS.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
      }}>
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon: (props) => <Text style={{color: props.color}}>T1</Text>}} component={ Tab1Screen } /> */}
      <BottomTabIOS.Screen
        name="Tab1Screen"
        options={{title: 'Tab1'}}
        component={Tab1Screen}
      />
      <BottomTabIOS.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <BottomTabIOS.Screen
        name="StackNavigation"
        options={{title: 'Stack'}}
        component={StackNavigation}
      />
    </BottomTabIOS.Navigator>
  );
};
