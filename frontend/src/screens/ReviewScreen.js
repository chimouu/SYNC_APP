// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const RecScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Review Screen Placeholder</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default RecScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Rating } from 'react-native-ratings';
// // Import AsyncStorage or your preferred storage solution
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { movies } from '../utilities/data'; // Make sure this path is correct


// const ReviewScreen = ({ route, navigation }) => {
//   const { movieTitle, movieId } = route.params; // You would pass the movieId as well
//   const [dateWatched, setDateWatched] = useState(new Date());
//   const [rating, setRating] = useState(3);
//   const [reviewText, setReviewText] = useState('');
//   const [tags, setTags] = useState({
//     firstWatch: false,
//     noSpoilers: false,
//     anyoneCanReply: false,
//   });

//   const toggleTag = (tag) => {
//     setTags({ ...tags, [tag]: !tags[tag] });
//   };

//   const saveReview = async () => {
//     const reviewData = {
//       movieTitle,
//       movieId,
//       dateWatched,
//       rating,
//       reviewText,
//       tags,
//     };

//     try {
//       const existingReviews = JSON.parse(await AsyncStorage.getItem('reviews')) || {};
//       const movieReviews = existingReviews[movieId] || [];
//       movieReviews.push(reviewData);
//       existingReviews[movieId] = movieReviews;

//       await AsyncStorage.setItem('reviews', JSON.stringify(existingReviews));
//       Alert.alert('Success', 'Your review has been saved.');
//       navigation.goBack();
//     } catch (error) {
//       console.error('Failed to save the review:', error);
//       Alert.alert('Error', 'There was a problem saving your review.');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => navigation.goBack()}>
//           <Text style={styles.headerButton}>Cancel</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={saveReview}>
//           <Text style={styles.headerButton}>Save</Text>
//         </TouchableOpacity>
//       </View>
      
//       <View style={styles.movieInfo}>
//         {/* Placeholder for movie cover image */}
//         <Image
//           source={{ uri: `https://image.tmdb.org/t/p/original${movies.poster_path}` }} // Replace with actual image path
//           style={styles.coverImage}
//         />
//         <Text style={styles.movieTitle}>{movieTitle}</Text>
//       </View>
      
//       <DateTimePicker
//         value={dateWatched}
//         mode="date"
//         display="default"
//         onChange={(event, selectedDate) => setDateWatched(selectedDate || dateWatched)}
//         style={styles.datePicker}
//       />
      
//       <Rating
//         startingValue={rating}
//         onFinishRating={(newRating) => setRating(newRating)}
//         style={styles.rating}
//       />
      
//       <TextInput
//         style={styles.reviewInput}
//         value={reviewText}
//         onChangeText={setReviewText}
//         placeholder="Add review..."
//         multiline
//       />
      
//       {/* Tag buttons for toggling state */}
//       <View style={styles.tagContainer}>
//         <TouchableOpacity onPress={() => toggleTag('firstWatch')} style={tags.firstWatch ? styles.tagSelected : styles.tag}>
//           <Text>First-time watch</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => toggleTag('noSpoilers')} style={tags.noSpoilers ? styles.tagSelected : styles.tag}>
//           <Text>No spoilers</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => toggleTag('anyoneCanReply')} style={tags.anyoneCanReply ? styles.tagSelected : styles.tag}>
//           <Text>Anyone can reply</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   header: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingTop: 50, // Adjust to fit iPhone 14 Pro notch
//     paddingBottom: 20,
//     paddingHorizontal: 15,
//     backgroundColor: '#ECECEC',
//   },
//   headerButton: {
//     fontSize: 18,
//     color: '#007AFF', // iOS blue color for buttons
//   },
//   headerTitle: {
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   movieInfo: {
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   coverImage: {
//     width: 100,
//     height: 150,
//     resizeMode: 'contain',
//   },
//   movieTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   datePicker: {
//     width: '100%',
//     marginTop: 10,
//   },
//   rating: {
//     paddingVertical: 20,
//   },
//   reviewInput: {
//     height: 100,
//     padding: 10,
//     marginHorizontal: 20,
//     marginTop: 10,
//     marginBottom: 20,
//     borderWidth: 1,
//     borderColor: '#CED0D4',
//     borderRadius: 10,
//     fontSize: 16,
//     textAlignVertical: 'top', // Align text to the top on Android
//     backgroundColor: '#F2F2F7', // Light grey background for input
//   },
//   tagContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   tag: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#CED0D4',
//     borderRadius: 20,
//   },
//   tagSelected: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     borderRadius: 20,
//     backgroundColor: '#D1D9FF', // Light blue background to indicate selection
//   },
// });

// export default ReviewScreen;

// import React, { useState } from 'react';
// import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import { Rating } from 'react-native-ratings';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { movies } from '../utilities/data'; // Make sure this path is correct

// const ReviewScreen = ({ route, navigation }) => {
//   // const { movieTitle, movieId } = route.params;
//   const [dateWatched, setDateWatched] = useState(new Date());
//   const [rating, setRating] = useState(3);
//   const [reviewText, setReviewText] = useState('');
//   const [tags, setTags] = useState({
//     firstWatch: false,
//     noSpoilers: false,
//     anyoneCanReply: false,
//   });
//   const { movie } = route.params; // Assuming you're passing the entire movie object as a parameter
//   const moviePosterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

//   const toggleTag = (tag) => {
//     setTags({ ...tags, [tag]: !tags[tag] });
//   };

//   const saveReview = async () => {
//     const reviewData = {
//       movieTitle,
//       movieId,
//       dateWatched,
//       rating,
//       reviewText,
//       tags,
//     };

//     try {
//       const existingReviews = JSON.parse(await AsyncStorage.getItem('reviews')) || {};
//       const movieReviews = existingReviews[movieId] || [];
//       movieReviews.push(reviewData);
//       existingReviews[movieId] = movieReviews;

//       await AsyncStorage.setItem('reviews', JSON.stringify(existingReviews));
//       Alert.alert('Success', 'Your review has been saved.', [
//         { text: 'OK', onPress: () => navigation.navigate('HomeScreen') }
//       ]);
//     } catch (error) {
//       console.error('Failed to save the review:', error);
//       Alert.alert('Error', 'There was a problem saving your review.');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.movieInfo}>
//         <Image
//           source={{ uri: moviePosterURL }}
//           style={styles.coverImage}
//           onError={(error) => console.error('Failed to load image:', error)}
//         />
//         <Text style={styles.movieTitle}>{movie.title}</Text>
//       </View>
      
//       <DateTimePicker
//         value={dateWatched}
//         mode="date"
//         display="default"
//         onChange={(event, selectedDate) => setDateWatched(selectedDate || dateWatched)}
//         style={styles.datePicker}
//       />
      
//       <Rating
//         startingValue={rating}
//         onFinishRating={(newRating) => setRating(newRating)}
//         style={styles.rating}
//       />
      
//       <TextInput
//         style={styles.reviewInput}
//         value={reviewText}
//         onChangeText={setReviewText}
//         placeholder="Add review..."
//         multiline
//       />
      
//       <View style={styles.tagContainer}>
//         {/* Tag buttons for toggling state */}
//         <TouchableOpacity onPress={() => toggleTag('firstWatch')} style={tags.firstWatch ? styles.tagSelected : styles.tag}>
//           <Text>First-time watch</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => toggleTag('noSpoilers')} style={tags.noSpoilers ? styles.tagSelected : styles.tag}>
//           <Text>No spoilers</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => toggleTag('anyoneCanReply')} style={tags.anyoneCanReply ? styles.tagSelected : styles.tag}>
//           <Text>Anyone can reply</Text>
//         </TouchableOpacity>
//       </View>
      
//       <TouchableOpacity onPress={saveReview} style={styles.submitButton}>
//         <Text style={styles.submitButtonText}>Submit Review</Text>
//       </TouchableOpacity>      
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: 50, // Adjust the padding to account for the iPhone 14 Pro notch
//   },
//   movieInfo: {
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   coverImage: {
//     width: 100,
//     height: 150,
//     resizeMode: 'contain',
//   },
//   movieTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   datePicker: {
//     width: '100%',
//     marginTop: 10,
//   },
//   rating: {
//     paddingVertical: 20,
//   },
//   reviewInput: {
//     height: 100,
//     padding: 10,
//     marginHorizontal: 20,
//     marginTop: 10,
//     borderWidth: 1,
//     borderColor: '#CED0D4',
//     borderRadius: 10,
//     fontSize: 16,
//     textAlignVertical: 'top',
//     backgroundColor: '#F2F2F7',
//   },
//   tagContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 20,
//   },
//   tag: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#CED0D4',
//     borderRadius: 20,
//   },
//   tagSelected: {
//     padding: 10,
//     borderWidth: 1,
//     borderColor: '#007AFF',
//     borderRadius: 20,
//     backgroundColor: '#D1D9FF',
//   },
//   submitButton: {
//     backgroundColor: '#007AFF',
//     borderRadius: 20,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     alignSelf: 'center',
//     marginBottom: 20,
//   },
//   submitButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });

// export default ReviewScreen;

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Rating } from 'react-native-ratings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { movies } from '../utilities/data'; // Update the path to your movies data file

const ReviewScreen = ({ route, navigation }) => {
  const { movieTitle } = route.params;
  const movie = movies.find((m) => m.title === movieTitle);
  const moviePosterURL = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const [dateWatched, setDateWatched] = useState(new Date());
  const [rating, setRating] = useState(3);
  const [reviewText, setReviewText] = useState('');
  const [tags, setTags] = useState({
    firstWatch: false,
    noSpoilers: false,
    anyoneCanReply: false,
  });

  const toggleTag = (tag) => {
    setTags({ ...tags, [tag]: !tags[tag] });
  };

  const saveReview = async () => {
    const reviewData = {
      movieTitle: movie.title,
      dateWatched,
      rating,
      reviewText,
      tags,
    };

    try {
      const existingReviews = JSON.parse(await AsyncStorage.getItem('reviews')) || {};
      const movieReviews = existingReviews[movieTitle] || [];
      movieReviews.push(reviewData);
      existingReviews[movieTitle] = movieReviews;

      await AsyncStorage.setItem('reviews', JSON.stringify(existingReviews));
      Alert.alert('Success', 'Your review has been saved.', [
        { text: 'OK', onPress: () => navigation.navigate('Home') }, // Assuming 'HomeScreen' is the correct route name
      ]);
    } catch (error) {
      console.error('Failed to save the review:', error);
      Alert.alert('Error', 'There was a problem saving your review.');
    }
  };

  // If the movie is not found in the dataset, return null to prevent the component from rendering
  if (!movie) {
    Alert.alert('Error', 'Movie not found.', [{ text: 'OK', onPress: () => navigation.goBack() }]);
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.movieHeader}>
        <Image
          source={{ uri: moviePosterURL }}
          style={styles.coverImage}
          onError={(error) => console.error('Failed to load image:', error)}
        />
        {/* <Text style={styles.movieTitle}>{movie.title}</Text> */}
        {/* <Text style={styles.movieTitle}>{movie.release_date}</Text> */}
      <View style = {styles.movieTitleContainer}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text style={styles.movieReleaseDate}>{movie.release_date}</Text>
      </View>
      </View>

      <DateTimePicker
        value={dateWatched}
        mode="date"
        display="default"
        onChange={(event, selectedDate) => setDateWatched(selectedDate || dateWatched)}
        style={styles.datePicker}
      />

      <Rating
        startingValue={rating}
        onFinishRating={(newRating) => setRating(newRating)}
        style={styles.rating}
      />

      <TextInput
        style={styles.reviewInput}
        value={reviewText}
        onChangeText={setReviewText}
        placeholder="Add review..."
        multiline
      />

      <View style={styles.tagContainer}>
        <TouchableOpacity onPress={() => toggleTag('firstWatch')} style={tags.firstWatch ? styles.tagSelected : styles.tag}>
          <Text style={styles.tagText}>First-time watch</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleTag('noSpoilers')} style={tags.noSpoilers ? styles.tagSelected : styles.tag}>
          <Text style={styles.tagText}>No spoilers</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleTag('anyoneCanReply')} style={tags.anyoneCanReply ? styles.tagSelected : styles.tag}>
          <Text style={styles.tagText}>Anyone can reply</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={saveReview} style={styles.submitButton}>
        <Text style={styles.submitButtonText}>Submit Review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  movieHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  movieInfo: {
    alignItems: 'center',
    marginTop: 20,
  },
  coverImage: {
    width: 125,
    height: 125,
    marginRight: 20,
    resizeMode: 'contain',
    marginVertical: 90,
  },
  movieTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  datePicker: {
    width: '100%',
    marginTop: -50,
  },
  rating: {
    paddingVertical: 40,
  },
  reviewInput: {
    minHeight: 100,
    padding: 10,
    marginHorizontal: 20,
    marginTop: -19,
    borderWidth: 1,
    borderColor: '#CED0D4',
    borderRadius: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    backgroundColor: '#F2F2F7',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 35,
  },
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#CED0D4',
    borderRadius: 10,
    backgroundColor: '#F2F2F7',
  },
  tagSelected: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 20,
    backgroundColor: '#D1D9FF',
  },
  tagText: {
    textAlign: 'center',
  },
  submitButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    marginBottom: 20,
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
  movieTitleContainer: {
    fontSize: 14,
    flex: 1,
    justifyContent: 'center',
  },
  movieReleaseDate: {
    fontSize: 14,
    color: 'grey',
  },
});

export default ReviewScreen;

