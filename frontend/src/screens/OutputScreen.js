import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { movies } from '../utilities/data';

// Placeholder data arrays

const OutputScreen = ({ navigation }) => {


  useEffect(() => {
    // TODO: Implement data fetching logic if needed
  }, []);

  // You can implement similar data fetching and handling as in HomeScreen if needed

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: movies.poster_path }} // replace with your actual property name for backdrop image
        style={styles.backdrop}
      >
        {/* Movie Recommendation */}
        <View style={styles.itemContainer}>
          <Icon name="film-outline" size={24} color="#ad9974" />
          <View>
            <Text style={styles.titleText}>{movies.title}</Text>
            <Text style={styles.subtitleText}>{`Realeased on • ${movies.release_date}`}</Text>
          </View>
        </View>

        {/* Music Recommendation */}
        <View style={styles.itemContainer}>
          <Icon name="musical-notes-outline" size={24} color="#ad9974" />
          <View>
            <Text style={styles.titleText}>{song.title}</Text>
            <Text style={styles.subtitleText}>{`${song.artist} • ${song.year}`}</Text>
          </View>
        </View>
      </ImageBackground>

      {/* Bottom navigation or additional controls */}
      {/* Here you could implement navigation or other controls */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backdrop: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  titleText: {
    color: '#ad9974',
    marginLeft: 10,
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitleText: {
    color: '#ad9974',
    marginLeft: 10,
    fontSize: 14,
  },
});

export default OutputScreen;
