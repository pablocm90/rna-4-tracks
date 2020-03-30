import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';


const TrackListScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button title="Go to Track Detail" onPress={() => {
        navigation.navigate('TrackDetail')
      }} />
      <Button title="Go to login flow" onPress={() => {
        navigation.navigate('loginFlow')
      }} />
    </View>

  )
}

const styles = StyleSheet.create({

})

export default TrackListScreen;
