// import React, { useState } from 'react';
// import { TextInput, TouchableOpacity, Text, StyleSheet, Platform, View } from 'react-native';
// import { Picker } from '@react-native-picker/picker';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import FloatingNavigation from '../components/Button';


// const RecScreen = () => {
//   const [selectedGenre, setSelectedGenre] = useState();
//   const [song, setSong] = useState('');

//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: '#661128' }}>
//       <View style={styles.container}>
//         <Text style={styles.label}>Enter A Song...</Text>
//         <TextInput
//           value={song}
//           onChangeText={setSong}
//           style={styles.input}
//           placeholder="Search Spotify..."
//           placeholderTextColor="#ad9974"
//         />

//         <View style={styles.buttonWrapper}>
//           <TouchableOpacity style={styles.button}>
//             <Text style={styles.buttonText}>Receive A Movie</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <FloatingNavigation
//         onPress={() => { navigation.navigate('HomeScreen') }}
//         // navigateHome={() => navigation.navigate('HomeScreen')}
//         // navigateRecScreen={() => navigation.navigate('RecScreen')}
//       />
//     </SafeAreaView>
//   );

  
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#661128',
//   },
//   icon: {
//     position: 'absolute',
//     top: Platform.OS === 'ios' ? 50 : 30,
//     left: 20,
//   },
//   settingsIcon: {
//     left: undefined,
//     right: 20,
//   },
//   label: {
//     color: '#ad9974',
//     fontSize: 42,
//     marginBottom: 65,
//     padding: 0,
//   },
//   input: {
//     backgroundColor: '#390f1b',
//     borderRadius: 20,
//     color: '#ad9974',
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     width: '100%',
//     height: 60, 
//   },
//   buttonWrapper: {
//     alignItems: 'center',
//     width: '100%',
//   },
//   button: {
//     backgroundColor: '#390f1b',
//     padding: 15,
//     borderRadius: 20,
//     alignItems: 'center',
//     marginTop: 20,
//     marginBottom: 20,
//     width: '60%',
//     borderColor: '#ad9974',
//   },
//   buttonText: {
//     color: '#ad9974',
//     fontSize: 16,
//   },
//   picker: {
//     color: '#ad9974',
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     borderRadius: 20,
//     borderColor: '#ad9974',
//     width: '100%',
//   },
//   footer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '100%',
//     position: 'absolute',
//     bottom: Platform.OS === 'ios' ? 50 : 30,
//     paddingHorizontal: 20,
//   },
// });

// export default RecScreen;
// import React, { useState } from 'react';
// import { TextInput, TouchableOpacity, Text, StyleSheet, View, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';
// import { useNavigation } from '@react-navigation/native';
// import { music } from '../utilities/spotify_data'; 
// import { commonStyles } from '../components/commonStyles'; // Import common styles

// const RecScreen = () => {
//   const navigation = useNavigation();
//   const [song, setSong] = useState('');
//   const [filteredSongs, setFilteredSongs] = useState([]);
//   const [isFloatingButtonVisible, setIsFloatingButtonVisible] = useState(true);

//   const handleSearch = (text) => {
//     setSong(text);
//     if (text) {
//       const filtered = music.filter(item =>
//         item.song_name.toLowerCase().includes(text.toLowerCase()) ||
//         item.artist.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredSongs(filtered);
//     } else {
//       setFilteredSongs([]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Enter A Song...</Text>
//       <TextInput
//         value={song}
//         onChangeText={handleSearch}
//         style={styles.input}
//         placeholder="Search Music..."
//         placeholderTextColor="#ad9974"
//       />

//       <ScrollView style={styles.buttonWrapper}>
//         {filteredSongs.map((song, index) => (
//           <TouchableOpacity key={index} style={styles.songButton}>
//             <Text style={styles.buttonText}>{song.song_name} - {song.artist}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <Text style={styles.receiver}>Receive A Movie</Text>

//       {isFloatingButtonVisible && (
//         <View style={commonStyles.floatingButtonContainer}>
//           <TouchableOpacity
//             onPress={() => navigation.navigate('Home')}
//             style={commonStyles.iconButton}
//           >
//             <Icon name="home-outline" size={24} color="#ad9974" />
//           </TouchableOpacity>
  
//           <View style={commonStyles.separator} />
  
//           <TouchableOpacity
//             onPress={() => navigation.navigate('RecScreen')}
//             style={commonStyles.iconButton}
//           >
//             <Icon name="musical-notes" size={24} color="#ad9974" />
//           </TouchableOpacity>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#661128',
//   },
//   receiver: {
//     marginBottom: 200,
//     fontSize: 34,
//     color: '#ad9974',
//   },
//   label: {
//     color: '#ad9974',
//     fontSize: 34,
//     marginBottom: 70,
//     marginTop: 200,
//     padding: 0,
//   },
//   input: {
//     backgroundColor: '#390f1b',
//     borderRadius: 20,
//     color: '#ad9974',
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     width: '100%',
//     height: 60,
//   },
//   buttonWrapper: {
//     width: '100%',
//     flex: 1,
//   },
//   songButton: {
//     backgroundColor: '#390f1b',
//     padding: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 5,
//     marginBottom: 5,
//     width: '100%',
//     borderColor: '#ad9974',
//     borderWidth: 1,
//   },
//   buttonText: {
//     color: '#ad9974',
//     fontSize: 14,
//   },
// });

// export default RecScreen;
// import React, { useState } from 'react';
// import { TextInput, TouchableOpacity, Text, StyleSheet, View, ScrollView } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Ensure this package is installed
// import { useNavigation } from '@react-navigation/native';
// import { music } from '../utilities/spotify_data'; // Adjust this path to where your music_data.js is located
// import { commonStyles } from '../components/commonStyles'; // Import common styles


// const RecScreen = () => {
//   const navigation = useNavigation();
//   const [song, setSong] = useState('');
//   const [filteredSongs, setFilteredSongs] = useState([]);

//   const handleSearch = (text) => {
//     setSong(text);
//     if (text) {
//       const filtered = music.filter(item =>
//         item.song_name.toLowerCase().includes(text.toLowerCase()) ||
//         item.artist.toLowerCase().includes(text.toLowerCase())
//       );
//       setFilteredSongs(filtered);
//     } else {
//       setFilteredSongs([]);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Enter A Song...</Text>
//       <TextInput
//         value={song}
//         onChangeText={handleSearch}
//         style={styles.input}
//         placeholder="Search Music..."
//         placeholderTextColor="#ad9974"
//       />
//       <Text style={styles.receiver}>Receive A Movie</Text>

//       <ScrollView style={styles.buttonWrapper}>
//         {filteredSongs.map((song, index) => (
//           <TouchableOpacity key={index} style={styles.songButton}
//             onPress={() => navigation.navigate('OutputScreen', { song: song })}
//           >
//             <Text style={styles.buttonText}>{song.song_name} - {song.artist}</Text>
//           </TouchableOpacity>
//         ))}
//       </ScrollView>

//       <View style={commonStyles.floatingButtonContainer}>
//         <TouchableOpacity
//           onPress={() => { navigation.navigate('Home')}}
//           style={commonStyles.iconButton}
//         >
//           <Icon name="home-outline" size={24} color="#ad9974" />
//         </TouchableOpacity>

//         <View style={commonStyles.separator} />

//         <TouchableOpacity
//           onPress={() => { navigation.navigate('RecScreen') }}
//           style={commonStyles.iconButton}
//         >
//           <Icon name="musical-notes" size={24} color="#ad9974" />
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     backgroundColor: '#661128',
//   },
//   receiver: {
//     marginBottom: 100,
//     fontSize: 34,
//     color: '#ad9974',
//   },
//   label: {
//     color: '#ad9974',
//     fontSize: 34,
//     marginBottom: 70,
//     marginTop: 200,
//     padding: 0,
//   },
//   input: {
//     backgroundColor: '#390f1b',
//     borderRadius: 20,
//     color: '#ad9974',
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     width: '100%',
//     height: 60,
//   },
//   buttonWrapper: {
//     width: '100%',
//     flex: 1,
//   },
//   songButton: {
//     backgroundColor: '#390f1b',
//     padding: 10,
//     borderRadius: 10,
//     alignItems: 'center',
//     marginTop: 5,
//     marginBottom: 5,
//     width: '100%',
//     borderColor: '#ad9974',
//     borderWidth: 1,
//   },
//   buttonText: {
//     color: '#ad9974',
//     fontSize: 14,
//   },
// });

// export default RecScreen;



import React, { useState } from 'react';
import { TextInput, TouchableOpacity, Text, StyleSheet, View, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Ensure this package is installed
import { useNavigation } from '@react-navigation/native';
import { music } from '../utilities/spotify_data'; // Adjust this path to where your music_data.js is located
import { commonStyles } from '../components/commonStyles'; // Import common styles

const RecScreen = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSongs, setFilteredSongs] = useState(music);

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
            onPress={() => navigation.navigate('OutputScreen', { song: song })}
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




