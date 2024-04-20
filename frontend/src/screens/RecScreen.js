import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, StyleSheet, Platform, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SafeAreaView } from 'react-native-safe-area-context';
import FloatingNavigation from '../components/Button';


const RecScreen = () => {
  const [selectedGenre, setSelectedGenre] = useState();
  const [song, setSong] = useState('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#661128' }}>
      <View style={styles.container}>
        <Text style={styles.label}>Enter A Song...</Text>
        <TextInput
          value={song}
          onChangeText={setSong}
          style={styles.input}
          placeholder="Search Spotify..."
          placeholderTextColor="#ad9974"
        />

        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Receive A Movie</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FloatingNavigation
        onPress={() => { navigation.navigate('HomeScreen') }}
        // navigateHome={() => navigation.navigate('HomeScreen')}
        // navigateRecScreen={() => navigation.navigate('RecScreen')}
      />
    </SafeAreaView>
  );

  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#661128',
  },
  icon: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 50 : 30,
    left: 20,
  },
  settingsIcon: {
    left: undefined,
    right: 20,
  },
  label: {
    color: '#ad9974',
    fontSize: 42,
    marginBottom: 65,
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
    alignItems: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#390f1b',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    width: '60%',
    borderColor: '#ad9974',
  },
  buttonText: {
    color: '#ad9974',
    fontSize: 16,
  },
  picker: {
    color: '#ad9974',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    borderColor: '#ad9974',
    width: '100%',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 50 : 30,
    paddingHorizontal: 20,
  },
});

export default RecScreen;


