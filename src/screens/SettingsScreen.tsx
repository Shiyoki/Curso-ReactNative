import React from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { styles } from '../themes/appTheme';

export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();  // para saber el espacio que ocupa el notch

  return (
    <View 
    style={{ 
      ...styles.globalMargin, 
      marginTop: insets.top + 20
      }}>
        <Text style={styles.title}>Settings</Text>
    </View>
  )
}
