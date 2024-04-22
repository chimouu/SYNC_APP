import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';

const RoutScreen = () => {
  const movies = {
    "adult": false,
    "backdrop_path": "/4Ep2KivIBUZbkS7kHjW7Qywnhhj.jpg",
    "genre_ids": [28],
    "id": 1049948,
    "original_language": "en",
    "original_title": "Vikings: Battle of Heirs",
    "overview": "A young Viking must come to terms with the realization that he may be the King's son, who was switched at birth, but not before others try to take his rightful place.",
    "popularity": 1024.67,
    "poster_path": "/87goLbbqrJqAxqDS5cBsik1zKT.jpg",
    "release_date": "2023-04-28",
    "title": "Vikings: Battle of Heirs",
    "video": false,
    "vote_average": 7.0,
    "vote_count": 3
  };

  const navigation = useNavigation();
  const route = useRoute();
  const { song } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.backdropContainer}>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${movies.poster_path}` }}
          style={styles.backdrop}
        />
        <LinearGradient
          colors={['#00000000', '#ad9974']} 
          start={{ x: 0, y: 0 }} 
          end={{ x: 0, y: 1 }}
          style={styles.gradient}
        />
      </View>
      <ScrollView style={styles.scrollView}>
  <View style={styles.itemContainer}>
    <Icon name="musical-notes" size={24} color="#000000" />
    <View style={styles.textContainer}>
      <Text style={styles.titleText}>{song.song_name}</Text>
      <Text style={styles.subtitleText}>{song.artist}</Text>
    </View>
  </View>

  <View style={styles.itemContainer}>
    <Icon name="film" size={24} color="#000000" />
    <View style={styles.textContainer}>
      <Text style={styles.titleText}>{movies.title}</Text>
      <Text style={styles.subtitleText}>{movies.release_date}</Text>
    </View>
  </View>


  <TouchableOpacity style={styles.itemContainerr} onPress={() => navigation.navigate('Home')}>
    <Icon name="home-outline" size={24} color="#000000" />
  </TouchableOpacity>
  
</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ad9974',
    },
    backdropContainer: {
      height: 480,
      width: '100%',
      position: 'relative',
    },
    backdrop: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    gradient: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    scrollView: {
      flex: 1,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '50%',
      },
      itemContainer: {
        flexDirection: 'row', 
        alignItems: 'center',  
        marginBottom: 35,      
        marginLeft: 25,
        fontSize: 4,
      },
      itemContainerr: {
        alignItems: 'center',  
        marginTop: 100,      
        padding:0,
    },
      textContainer: {
        flexDirection: 'column',  
      },
      titleText: {
        color: '#000000',
        fontSize: 26,
        
      },
      subtitleText: {
        color: '#000000',
        fontSize: 14,
     
      },
      backButtonText: {
        marginLeft: 0,
        color: '#000000',
      
      },
 


  });

export default RoutScreen;

