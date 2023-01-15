import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../themes/appTheme'

export const AlbumsScreen = () => {

  const {logout, authState: { isLoggedIn }} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
        <Text style={styles.title}>Albums</Text>

        {
          isLoggedIn && (
            <Button 
            title='Logout'
            onPress={logout}
          />  
          )
        }
       
    </View>
  )
}
