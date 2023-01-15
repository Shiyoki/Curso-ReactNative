import React from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../themes/appTheme'
import { TouchableIcon } from '../components/TouchableIcon';



export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Iconos</Text>
        <TouchableIcon iconName='mic-outline' />
    </View>
  )
}
