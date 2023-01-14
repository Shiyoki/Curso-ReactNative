import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../navigation/StackNavigation';
import { styles } from '../themes/appTheme'

// interface RouterParams {
//     id: number;                      Ref 1
//     nombre: string;
// }

interface Props extends NativeStackScreenProps<RootStackParams,'PersonaScreen'>{};

export const PersonaScreen = ( {route, navigation}:Props ) => {

    console.log(route);
    console.log(navigation);

    // const params = route.params as RouterParams;       Ref 1

    const params = route.params;

    useEffect(() => {
        navigation.setOptions({
            title: params.nombre,
        })
    }, [])

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>{params.nombre}</Text>
    </View>
  )
}
