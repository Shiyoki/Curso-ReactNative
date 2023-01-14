import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from '../themes/appTheme';

export const Pagina2Screen = () => {
  // se puede usar los props como en las otras pagina
  const navigation = useNavigation(); // hook para usar el navigation

  useEffect(() => {
    navigation.setOptions({
      title: 'Hola Mundo', // se puede cambiar el titulo de la pantalla IOS
      headerBackTitle: 'Atras', // se puede cambiar el titulo del boton de atras IOS
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina2</Text>

      <Button
        title="Ir a pagina 3"
        onPress={() => navigation.navigate('Pagina3Screen')}
      />
    </View>
  );
};
