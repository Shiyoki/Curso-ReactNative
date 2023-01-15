import React, {useContext} from 'react';
import {Button, Text, View} from 'react-native';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../themes/appTheme';

export const ContactsScreen = () => {
  const {signIn, authState} = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contacts</Text>

      {!authState.isLoggedIn && <Button title="Sing In" onPress={signIn} /> }
      
    </View>
  );
};
