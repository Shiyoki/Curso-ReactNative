import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { StackNavigation } from './StackNavigation';
import { Image, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styles } from '../themes/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const MenuLateral2 = () => {

  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
    drawerContent={ (props) => <MenuInterno {...props} /> }
    screenOptions={{
      drawerType: width >= 768 ? 'permanent' : 'front',
    }}
    >
      <Drawer.Screen name="Tabs" component={Tabs} />
      <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
    </Drawer.Navigator>
  );
}

const MenuInterno = ( props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>

      {/* Parte de avatar */}
      <View style={styles.avatarContainer}>
        <Image 
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png'
          }}
          style={ styles.avatar}
        />
      </View>

      {/* Opciones de menu */}
      
      <View style={styles.menuContainer} >
        <TouchableOpacity 
        style={{
          ...styles.menuButton,
          flexDirection: 'row'
        }}
        onPress={() => props.navigation.navigate('Tabs')}
        >
          <Icon name="compass-outline" size={23} color="black" />
            <Text style={styles.menuTexto}> Navegacion</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={{
          ...styles.menuButton,
          flexDirection: 'row'
        }}
        onPress={() => props.navigation.navigate('SettingScreen')}
        >
          <Icon name="settings-outline" size={23} color="black" />
            <Text style={styles.menuTexto}> Ajustes</Text>
        </TouchableOpacity>

      </View>

    </DrawerContentScrollView>
  )
}
