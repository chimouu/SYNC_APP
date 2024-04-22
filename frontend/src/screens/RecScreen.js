import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 
import { useNavigation } from '@react-navigation/native';
import { music } from '../utilities/spotify_data'; 
import { commonStyles } from '../components/commonStyles'; 

const RecScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSongs, setFilteredSongs] = useState([]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = music.filter(item =>
        item.song_name.toLowerCase().includes(query.toLowerCase()) ||
        item.artist.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSongs(filtered);
    } else {
      setFilteredSongs([]);
    }
  };
  const handlePress = (song) => {
    setTimeout(() => {
      navigation.navigate('RoutScreen', { song });
    }, 1500); // 1000 milliseconds delay
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter A Song...</Text>
      <TextInput
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.input}
        placeholder="Search Spotify..."
        placeholderTextColor="#ad9974"
      />

      <ScrollView style={styles.buttonWrapper}>
        {filteredSongs.map((song, index) => (
          <TouchableOpacity key={index} style={styles.songButton}
            onPress={() => handlePress(song)}
          >
            <Text style={styles.buttonText}>{song.song_name} - {song.artist}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={commonStyles.floatingButtonContainer}>
        <TouchableOpacity
          onPress={() => { navigation.navigate('Home')}}
          style={commonStyles.iconButton}
        >
          <Icon name="home-outline" size={24} color="#ad9974" />
        </TouchableOpacity>

        <View style={commonStyles.separator} />

        <TouchableOpacity
          onPress={() => { navigation.navigate('RecScreen') }}
          style={commonStyles.iconButton}
        >
          <Icon name="musical-notes" size={24} color="#ad9974" />
        </TouchableOpacity>
      </View>
      <Text style={styles.receiver}>Receive A Movie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#661128',
  },
  receiver: {
    fontSize: 34,
    color: '#ad9974',
    marginBottom: 250,

  },
  label: {
    color: '#ad9974',
    fontSize: 34,
    marginBottom: 70,
    marginTop: 200,
    padding: 0,
  },
  input: {
    backgroundColor: '#390f1b',
    borderRadius: 20,
    color: '#ad9974',
    paddingHorizontal: 15,
    marginBottom: 20,
    width: '100%',
    height: 60,
  },
  buttonWrapper: {
    width: '100%',
    flex: 1,
  },
  songButton: {
    backgroundColor: '#390f1b',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    width: '100%',
    borderColor: '#ad9974',
    borderWidth: 1,
  },
  buttonText: {
    color: '#ad9974',
    fontSize: 14,
  },
});

export default RecScreen;




