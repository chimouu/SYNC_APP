import React, { useState, useEffect } from 'react';
import FloatingNavigation from '../components/Button';

import {
  View,
  Text,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  Animated, 
} from 'react-native';
import { movies } from '../utilities/data';
import MovieDetailsModal from './MovieDetailsModal';
import Icon from 'react-native-vector-icons/Ionicons'; 
import RecScreen from './RecScreen';


const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isFloatingButtonVisible, setIsFloatingButtonVisible] = useState(true);
  const scrollY = new Animated.Value(0); 

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    {
      listener: event => {
        const currentOffset = event.nativeEvent.contentOffset.y;
        setIsFloatingButtonVisible(currentOffset < 50); 
      },
      useNativeDriver: false,
    }
  );

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMovies(movies);
    } else {
      const queryLower = searchQuery.toLowerCase();
      const filtered = movies.filter((movie) =>
        movie.title.toLowerCase().includes(queryLower)
      );
      setFilteredMovies(filtered);
    }
  }, [searchQuery]);

  const renderMovieItem = ({ item }) => (
    <TouchableOpacity
      style={styles.movieCard}
      onPress={() => {
        setSelectedMovie(item);
        setModalVisible(true);
      }}
    >
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        style={styles.poster}
      />
    </TouchableOpacity>
  );

  const MovieCarousel = ({ title, data }) => (
    <View style={styles.carouselContainer}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderMovieItem}
      />
    </View>
  )
 
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#661128' }}>
      
      <Animated.ScrollView
        style={styles.container}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={styles.searchInput}>
          <TextInput
            placeholderTextColor={'#ad9974'}
            placeholder="Search movies..."
            style={styles.searchText}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        {searchQuery ? (
          <MovieCarousel title="Search Results" data={filteredMovies} />
        ) : (
          <>
            <MovieCarousel title="We Think You Might Like..." data={movies.slice(0, 10)} />
            <MovieCarousel title="Recently Added" data={movies.slice(10, 20)} />
            <MovieCarousel title="Popular This Week" data={movies.slice(20, 30)} />
            <MovieCarousel title="Award Winning Movies" data={movies.slice(31, 40)} />
          </>
        )}
      </Animated.ScrollView>
      
      {isFloatingButtonVisible && (
        <View style={styles.floatingButtonContainer}>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Home')}}
            style={styles.iconButton}
          >
            <Icon name="home-outline" size={24} color="#ad9974" />
          </TouchableOpacity>
  
          <View style={styles.separator} />
  
          <TouchableOpacity
            onPress={() => { navigation.navigate('RecScreen') }}
            style={styles.iconButton}
          >
            <Icon name="musical-notes" size={24} color="#ad9974" />
          </TouchableOpacity>
        </View>
      )}
  
      <MovieDetailsModal
        visible={modalVisible}
        movie={selectedMovie}
        onClose={() => setModalVisible(false)}
      />
    </SafeAreaView>
  )
};
      
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#661128',
    resizeMode: 'stretch',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ad9974',
    color: '#ad9974'
  },
  searchText: {
    color: '#ad9974'
  },
  smokeText: {
    color: '#ad9974'
  },
  searchInput: {
    flex: 1,
    marginRight: 50,
    marginLeft: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ad9974',
    borderRadius: 5,
    padding: 10,
    color: '#ad9974',
    backgroundColor: '#390f1b'
  },
  carouselContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    color: '#ad9974'
  },
  movieCard: {
    marginLeft: 10,
    marginRight: 10,
    width: 120,
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 10,
  },
  floatingButton: {
    position: 'absolute',
    right: 125,
    bottom: 50,
    width: 120,
    height: 70,
    backgroundColor: 'transparent',
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'transparent',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  floatingButtonText: {
    color: 'transparent',
    fontSize: 24,
  },
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

export default HomeScreen;
