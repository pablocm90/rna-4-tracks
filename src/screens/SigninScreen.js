import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const SignInScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SignInScreen</Text>
      <Button title="Go to SignUp" onPress={() => {
        navigation.navigate('SignUp')
      }} />
      <Button title="Go to main flow" onPress={() => {
        navigation.navigate('mainFlow')
      }} />
    </View>

  )
}

const styles = StyleSheet.create({

})

export default SignInScreen;
