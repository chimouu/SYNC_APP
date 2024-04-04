// import React, { useEffect, useState } from 'react';
// import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

// const MovieDetailScreen = ({ route, navigation }) => {
//   const { movieId } = route.params;
//   const [movieDetails, setMovieDetails] = useState(null);
//   const [reviews, setReviews] = useState([]);

//   useEffect(() => {
//     // Fetch movie details and reviews from your backend using the movieId
//     // For example:
//     // fetchMovieDetails(movieId).then(data => setMovieDetails(data));
//     // fetchMovieReviews(movieId).then(data => setReviews(data));
//   }, [movieId]);

//   if (!movieDetails) {
//     return (
//       // Loading view or spinner
//       <View style={styles.centered}>
//         <Text>Loading...</Text>
//       </View>
//     );
//   }

//   return (
//     <ScrollView style={styles.container}>
//       <Image source={{ uri: movieDetails.poster_path }} style={styles.movieImage} />
//       <Text style={styles.movieTitle}>{movieDetails.title}</Text>
//       {/* Other movie details */}

//       {/* Scroll down for reviews */}
//       <View style={styles.reviewsContainer}>
//         <Text style={styles.reviewsTitle}>Reviews</Text>
//         {reviews.map((review, index) => (
//           <View key={index} style={styles.reviewCard}>
//             <Text style={styles.reviewText}>{review.content}</Text>
//             {/* Other review details */}
//           </View>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   // Add styles for centered, movieImage, movieTitle, reviewsContainer, reviewsTitle, reviewCard, reviewText
//   // ...
// });

// export default MovieDetailScreen;

// import React from 'react';
// import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import StarRating from 'react-native-star-rating'; // You'll need to install this package
// import { movies } from '../utilities/data'; // Adjust this path to where your mock data is stored


// const MovieDetailScreen = ({ route, navigation }) => {

//   return (
//     <ScrollView style={styles.container}>
//       {/* Poster Image */}
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/w500${movies.poster_path}` }}
//         style={styles.poster}
//       />

//       {/* Movie Title */}
//       <Text style={styles.title}>{movies.title}</Text>

//       {/* Movie Overview */}
//       <Text style={styles.overview}>{movies.overview}</Text>

//       {/* Star Rating */}
//       <StarRating
//         disabled={true}
//         maxStars={5}
//         rating={movies.vote_average}
//         fullStarColor={'gold'}
//         emptyStarColor={'grey'}
//         starSize={30}
//       />

//       {/* Review Button */}
//       <TouchableOpacity
//         style={styles.reviewButton}
//         onPress={() => navigation.navigate('ReviewScreen', { movieId: movies.id })} // Adjust navigation as necessary
//       >
//         <Text style={styles.reviewButtonText}>Write a Review</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   poster: {
//     width: '100%',
//     height: 300, // Adjust based on your design
//     resizeMode: 'cover',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     padding: 10,
//   },
//   overview: {
//     fontSize: 16,
//     color: 'white',
//     padding: 10,
//   },
//   reviewButton: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#0652DD', // Use your app's theme color here
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   reviewButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   // Add other styles as needed
// });

// export default MovieDetailScreen;

// import React from 'react';
// import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import StarRating from 'react-native-star-rating'; // You'll need to install this package
// import { movies } from '../utilities/data'; // Adjust this path to where your mock data is stored
// // import { ViewPropTypes } from 'deprecated-react-native-prop-types';

// const MovieDetailScreen = ({ route }) => {
//   const { movieId } = route.params;
//   const movieDetails = movies.find(movie => movie.id === movieId);

//   if (!movieDetails) {
//     return <Text>Loading...</Text>; // Consider adding a spinner or animation
//   }

//   return (
//     <ScrollView style={styles.container}>
//       {/* Poster Image */}
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` }}
//         style={styles.backdrop}
//       />

//       {/* Movie Title */}
//       <Text style={styles.title}>{movieDetails.title}</Text>

//       {/* Movie Overview */}
//       <Text style={styles.overview}>{movieDetails.overview}</Text>

//       {/* Star Rating */}
//       <StarRating
//         disabled={true}
//         maxStars={5}
//         rating={movieDetails.vote_average / 2} // Adjust rating to be out of 5 if necessary
//         fullStarColor={'gold'}
//         emptyStarColor={'grey'}
//         starSize={30}
//       />

//       {/* Review Button */}
//       <TouchableOpacity
//         style={styles.reviewButton}
//         onPress={() => {/* Navigate to Review Screen */}}
//       >
//         <Text style={styles.reviewButtonText}>Write a Review</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'gray',
//   },
//   backdrop: {
//     width: '100%',
//     height: 300, // Adjust based on your design
//     resizeMode: 'cover',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: 'white',
//     padding: 10,
//   },
//   overview: {
//     fontSize: 16,
//     color: 'white',
//     padding: 10,
//   },
//   reviewButton: {
//     margin: 10,
//     padding: 10,
//     backgroundColor: '#0652DD', // Use your app's theme color here
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   reviewButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   // Add other styles as needed
// });

// export default MovieDetailScreen;
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import StarRating from 'react-native-star-rating';
import { movies } from '../utilities/data'; // Make sure this path is correct
import { checkQuizPassed } from '../utilities/quiz_storage'; // Path to your QuizStorage utility

const MovieDetailScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  const movieDetails = movies.find(movie => movie.id === movieId);

  if (!movieDetails) {
    return <Text>Loading...</Text>; // Consider enhancing the loading state presentation
  }

  const handleWriteReviewPress = async () => {
    const movieTitle = movieDetails.title; // Assuming the title is the key for checking quiz status
    const hasPassedQuiz = await checkQuizPassed(movieTitle);
    
    if (hasPassedQuiz) {
      navigation.navigate('ReviewScreen', { movieId: movieDetails.id });
    } else {
      navigation.navigate('QuizScreen', { movieTitle: movieTitle, movieId: movieDetails.id });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{ uri: `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` }}
        style={styles.backdrop}
      />

      <Text style={styles.title}>{movieDetails.title}</Text>

      <Text style={styles.overview}>{movieDetails.overview}</Text>

      <StarRating
        disabled={true}
        maxStars={5}
        rating={movieDetails.vote_average / 2}
        fullStarColor={'gold'}
        emptyStarColor={'grey'}
        starSize={30}
      />

      <TouchableOpacity
        style={styles.reviewButton}
        onPress={handleWriteReviewPress}
      >
        <Text style={styles.reviewButtonText}>Write a Review</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  backdrop: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    padding: 10,
  },
  overview: {
    fontSize: 16,
    color: 'white',
    padding: 10,
  },
  reviewButton: {
    margin: 10,
    padding: 10,
    backgroundColor: '#0652DD',
    borderRadius: 5,
    alignItems: 'center',
  },
  reviewButtonText: {
    color: 'white',
    fontSize: 18,
  },
  // Other styles...
});

export default MovieDetailScreen;



