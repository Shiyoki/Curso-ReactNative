import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../themes/appTheme';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  console.log(navigation);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1</Text>

      <Button
        title="Ir a pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text
      style={{
        marginVertical: 20,
        fontSize: 20,
        color: 'black',
        textAlign: 'center'
      }}
      >Navegar con argumentos</Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#5856D6',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Pedro',
            })
          }>
          <Icon name="body-outline" size={50} color="white" />
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#FF9427',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Maria',
            })
          }>
          <Icon name='woman-outline' size={50} color="white" />
          <Text style={styles.botonGrandeTexto}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
