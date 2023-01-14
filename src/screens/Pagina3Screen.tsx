import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../themes/appTheme'

interface Props extends NativeStackScreenProps<any, any> {};

export const Pagina3Screen = ({navigation}:Props) => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Pagina3</Text>

        <Button 
            title="Regresar"
            onPress={ () => navigation.pop()} // regresa a la pantalla anterior
        />

        <Button 
            title="Ir a pagina 1"
            onPress={ () => navigation.popToTop()}  // popToTop() regresa a la primera pantalla
        />
    </View>
    )
}