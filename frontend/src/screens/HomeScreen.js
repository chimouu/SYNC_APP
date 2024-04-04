// import React from 'react';
// import { View, Text, TextInput, ScrollView, Image, StyleSheet } from 'react-native';

// const HomeScreen = () => {
//   return (
//     <View style={styles.container}>
//       {/* Header Section */}
//       <View style={styles.header}>
//         <TextInput
//           placeholder="Search for a movie..."
//           style={styles.searchInput}
//         />
//         {/* Icon buttons go here */}
//       </View>

//       {/* Recommendations Section */}
//       <Text style={styles.sectionTitle}>We Think You Might Like</Text>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.horizontalScroll}
//       >
//         {/* Map through your movies data to render MovieCards */}
//       </ScrollView>

//       {/* New This Week Section */}
//       <Text style={styles.sectionTitle}>New This Week</Text>
//       <ScrollView
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         style={styles.horizontalScroll}
//       >
//         {/* Map through new movies data to render MovieCards */}
//       </ScrollView>
//     </View>
//   );
// };

// // Example movie card component
// const MovieCard = ({ movie }) => (
//   <View style={styles.movieCard}>
//     <Image source={{ uri: movie.imageUrl }} style={styles.movieImage} />
//     <Text style={styles.movieTitle}>{movie.title}</Text>
//     <Text style={styles.movieDirector}>{movie.director}</Text>
//   </View>
// );

// // Add styles for layout, fonts, and colors here
// const styles = StyleSheet.create({
//   // define your styles for container, header, searchInput, sectionTitle, horizontalScroll, movieCard, movieImage, movieTitle, and movieDirector
// });

// export default HomeScreen;

// import React from 'react';
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { movies } from '../utilities/data'; // Ensure this path matches where your mock data is stored

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* You can wrap each FlatList in a View with a Text label if you have multiple lists/categories */}
//       <Text style={styles.sectionTitle}>Recommended Movies</Text>
//       <FlatList
//         data={movies}
//         keyExtractor={(item) => item.id}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         renderItem={({ item }) => (
//           <TouchableOpacity 
//             style={styles.movieCard}
//             onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
//           >
//             <Image source={{ uri: item.poster_path }} style={styles.poster} />
//             <Text style={styles.title}>{item.title}</Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginLeft: 10,
//     marginBottom: 10,
//   },
//   movieCard: {
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   poster: {
//     width: 120, // Adjust width and height as needed
//     height: 180,
//     borderRadius: 10, // Optional: if you want rounded corners
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 5,
//   },
//   // Add more styles as needed
// });

// export default HomeScreen;

// import React from 'react';
// import { View, Text, FlatList, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { movies } from '../utilities/data'; // Adjust if your data structure is different

// const HomeScreen = ({ navigation }) => {
//   // Assuming movies is an array of 30 items, split it into three categories
//   const recommended = movies.slice(0, 10);
//   const newReleases = movies.slice(10, 20);
//   const popular = movies.slice(20);

//   // Render function for the movie items
//   const renderMovieItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.movieCard}
//       onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
//     >
//       <Image source={{ uri: item.poster_path }} style={styles.poster} />
//       <Text style={styles.title}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   // Carousel component
//   const MovieCarousel = ({ title, data }) => (
//     <View style={styles.carouselContainer}>
//       <Text style={styles.sectionTitle}>{title}</Text>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         renderItem={renderMovieItem}
//       />
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Search Bar */}
//       <View style={styles.searchContainer}>
//         <TextInput
//           placeholder="Search movies..."
//           style={styles.searchInput}
//         />
//         <TouchableOpacity style={styles.searchButton}>
//           {/* Icon or text for the button */}
//           <Text>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Movie Carousels */}
//       <MovieCarousel title="Recommended for You" data={recommended} />
//       <MovieCarousel title="New Releases" data={newReleases} />
//       <MovieCarousel title="Popular This Week" data={popular} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 20,
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   searchInput: {
//     flex: 1,
//     marginRight: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//   },
//   searchButton: {
//     // Styles for your search button
//   },
//   carouselContainer: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginLeft: 10,
//     marginBottom: 10,
//   },
//   movieCard: {
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   poster: {
//     width: 120,
//     height: 180,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 5,
//   },
//   // Add more styles as needed
// });

// export default HomeScreen;

// import React from 'react';
// import {
//   View,
//   Text,
//   FlatList,
//   Image,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
//   SafeAreaView,
//   StyleSheet,
//   useState, 
//   useEffect,
// } from 'react-native';
// import { movies } from '../utilities/data'; // Adjust this path to where your mock data is stored


// const HomeScreen = ({ navigation }) => {
//   // Example slicing for demonstration purposes
//   const recommended = movies.slice(0, 10);
//   const newReleases = movies.slice(10, 20);
//   const popular = movies.slice(20, 30);

//   const renderMovieItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.movieCard}
//       onPress={() => navigation.navigate('MovieDetails', { movieId: item.id })}
//     >
//       <Image 
//         source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
//         style={styles.poster} 
//       />
//       {/* <Text style={styles.title}>{item.title}</Text> */}
//     </TouchableOpacity>
//   );
//   const MovieCarousel = ({ title, data }) => (
//     <View style={styles.carouselContainer}>
//       <Text style={styles.sectionTitle}>{title}</Text>
//       <FlatList
//         data={data}
//         keyExtractor={(item) => item.id}
//         horizontal={true}
//         showsHorizontalScrollIndicator={false}
//         renderItem={renderMovieItem}
//       />
//     </View>
//   );

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView style={styles.container}>
//         <View style={styles.searchContainer}>
//           <TextInput
//             placeholder="Search movies..."
//             style={styles.searchInput}
//           />
//           <TouchableOpacity style={styles.searchButton}>
//             <Text>Search</Text>
//           </TouchableOpacity>
//         </View>

//         <MovieCarousel title="Recommended for You" data={recommended} />
//         <MovieCarousel title="New Releases" data={newReleases} />
//         <MovieCarousel title="Popular This Week" data={popular} />
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     // Container might not need any specific styles unless you want to set background colors or margins
//   },
//   searchContainer: {
//     flexDirection: 'row',
//     padding: 10,
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     backgroundColor: '#fff', // Or any color that matches your design
//   },
//   searchInput: {
//     flex: 1,
//     marginRight: 10,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 5,
//     padding: 10,
//   },
//   searchButton: {
//     // Style your search button here
//     padding: 10,
//   },
//   carouselContainer: {
//     marginBottom: 20,
//   },
//   sectionTitle: {
//     fontSize: 19,
//     fontWeight: 'bold',
//     marginLeft: 10,
//     marginBottom: 10,
//   },
//   movieCard: {
//     marginLeft: 10,
//     marginRight: 10,
//     width: 120, // Ensure your cards are of the correct width to display the posters
//   },
//   poster: {
//     width: 120,
//     height: 180,
//     borderRadius: 10, // Rounded corners for the posters
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 5,
//   },
// });

// export default HomeScreen;


import React, { useState, useEffect } from 'react';
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
} from 'react-native';
import { movies } from '../utilities/data'; // Adjust this path to where your mock data is stored

const HomeScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredMovies(movies); // Reset to original list if search is cleared
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
      onPress={() => navigation.navigate('MovieDetailScreen', { movieId: item.id })}
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
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderMovieItem}
      />
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Search movies..."
            style={styles.searchInput}
            value={searchQuery}
            onChangeText={setSearchQuery} // Update the state as user types
          />
          <TouchableOpacity style={styles.searchButton}>
            <Text>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Dynamically showing filtered movies based on search */}
        {searchQuery ? (
          <MovieCarousel title="Search Results" data={filteredMovies} />
        ) : (
          <>
            <MovieCarousel title="We Think You Might Like..." data={movies.slice(0, 10)} />
            <MovieCarousel title="New Releases" data={movies.slice(10, 20)} />
            <MovieCarousel title="Popular This Week" data={movies.slice(20, 30)} />
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // Your container styles here
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff', // Or any color that matches your design
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  searchButton: {
    // Your search button styles here
    padding: 10,
  },
  carouselContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
  },
  movieCard: {
    marginLeft: 10,
    marginRight: 10,
    width: 120, // Ensure your cards are of the correct width to display the posters
  },
  poster: {
    width: 120,
    height: 180,
    borderRadius: 10, // Rounded corners for the posters
  },
});

export default HomeScreen;
