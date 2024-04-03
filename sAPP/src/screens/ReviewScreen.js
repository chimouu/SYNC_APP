import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const RecScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Review Screen Placeholder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default RecScreen;
