import React from 'react'
import { Text, View } from 'react-native'
import { colors, styles } from '../themes/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';



export const Tab1Screen = () => {
  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>TAB1</Text>
        <Text>
          <Icon name="mic-outline" size={80} color={colors.primary} />;
        </Text>

    </View>
  )
}
