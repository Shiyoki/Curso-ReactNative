import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';
import { colors, styles } from '../themes/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';


export const SettingsScreen = () => {

  const insets = useSafeAreaInsets();  // para saber el espacio que ocupa el notch

  const { authState } = useContext(AuthContext);


  return (
    <View 
    style={{ 
      ...styles.globalMargin, 
      marginTop: insets.top + 20
      }}>
        <Text style={styles.title}>Settings</Text>

        <Text>
          {JSON.stringify(authState, null, 4)}
        </Text>

        {
          authState.favoriteIcon && (
            <Icon name={ authState.favoriteIcon} size={150} color={colors.primary} />
          )
        }

    </View>
  )
}
