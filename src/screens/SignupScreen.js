import React, { useState } from 'react';
import { View, StyleSheet} from 'react-native';
import {Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';


const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer>
        <Input
          placeholder="example@gtfo.com"
          label="E-mail"
          value={email}
          onChangeText={newEmail => setEmail(newEmail)}
          autoCapitalize="none"
          autoCorrect={false}
          />
      </Spacer>
      <Spacer>
        <Input
          placeholder="Complicatedpassword"
          label="password"
          value={password}
          onChangeText={newPassword => setPassword(newPassword)}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry
        />
      </Spacer>
      <Spacer>
        <Button
          title="Sign Up"
        />
      </Spacer>
    </View>

  )
}

SignUpScreen.navigationOptions =  {
    headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
})

export default SignUpScreen;
