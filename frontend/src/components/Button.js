import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const FloatingNavigation = ({ navigateHome, navigateRecScreen }) => {
  return (
    <View style={styles.floatingButtonContainer}>
      <TouchableOpacity
        onPress={navigateHome}
        style={styles.iconButton}
      >
        <Icon name="home-outline" size={24} color="#ad9974" />
      </TouchableOpacity>

      <View style={styles.separator} />

      <TouchableOpacity
        onPress={navigateRecScreen}
        style={styles.iconButton}
      >
        <Icon name="musical-notes" size={24} color="#ad9974" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  floatingButtonContainer: {
    position: 'absolute',
    right: 135,
    bottom: 60,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#390f1b',
    borderRadius: 28,
    padding: 10,
  },
  iconButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  separator: {
    height: 30,
    width: 1,
    backgroundColor: '#ad9974',
    marginHorizontal: 10,
  },
});

export default FloatingNavigation;
