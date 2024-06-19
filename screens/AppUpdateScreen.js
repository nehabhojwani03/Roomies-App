import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppUpdateScreen = () => {

  return (
    <View style={styles.container}>
      <Text style= {styles.text}>App Update Screen</Text>
    </View>
  );
};

export default AppUpdateScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    fontSize: 26,
    fontWeight: 'bold'

  }
});
