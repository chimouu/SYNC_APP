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
// import React from 'react';
// import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
// import StarRating from 'react-native-star-rating';
// import { movies } from '../utilities/data'; // Make sure this path is correct
// import { checkQuizPassed } from '../utilities/quiz_storage'; // Path to your QuizStorage utility

// const MovieDetailScreen = ({ route, navigation }) => {
//   const { movieId } = route.params;
//   const movieDetails = movies.find(movie => movie.id === movieId);

//   if (!movieDetails) {
//     return <Text>Loading...</Text>; // Consider enhancing the loading state presentation
//   }

//   const handleWriteReviewPress = async () => {
//     const movieTitle = movieDetails.title; // Assuming the title is the key for checking quiz status
//     const hasPassedQuiz = await checkQuizPassed(movieTitle);
    
//     if (hasPassedQuiz) {
//       navigation.navigate('ReviewScreen', { movieId: movieDetails.id });
//     } else {
//       navigation.navigate('QuizScreen', { movieTitle: movieTitle, movieId: movieDetails.id });
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` }}
//         style={styles.backdrop}
//       />

//       <Text style={styles.title}>{movieDetails.title}</Text>

//       <Text style={styles.overview}>{movieDetails.overview}</Text>

//       <StarRating
//         disabled={true}
//         maxStars={5}
//         rating={movieDetails.vote_average / 2}
//         fullStarColor={'gold'}
//         emptyStarColor={'grey'}
//         starSize={30}
//       />

//       <TouchableOpacity
//         style={styles.reviewButton}
//         onPress={handleWriteReviewPress}
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
//     height: 300,
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
//     backgroundColor: '#0652DD',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   reviewButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
//   // Other styles...
// });

// export default MovieDetailScreen;
// import React from 'react';
// import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import StarRating from 'react-native-star-rating';
// import { movies } from '../utilities/data'; // Make sure this path is correct
// import { checkQuizPassed } from '../utilities/quiz_storage'; // Path to your QuizStorage utility

// const MovieDetailScreen = ({ route, navigation }) => {
//   const { movieId } = route.params;
//   const movieDetails = movies.find(movie => movie.id === movieId);

//   if (!movieDetails) {
//     return <View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>;
//   }

//   const handleWriteReviewPress = async () => {
//     const movieTitle = movieDetails.title;
//     const hasPassedQuiz = await checkQuizPassed(movieTitle);

//     if (hasPassedQuiz) {
//       navigation.navigate('ReviewScreen', { movieId: movieDetails.id });
//     } else {
//       navigation.navigate('QuizScreen', { movieTitle: movieTitle, movieId: movieDetails.id });
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Image
//         source={{ uri: `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` }}
//         style={styles.backdrop}
//       />

//       <View style={styles.contentContainer}>
//         <Text style={styles.title}>{movieDetails.title}</Text>
//         <Text style={styles.overview}>{movieDetails.overview}</Text>

//         <StarRating
//           disabled={true}
//           maxStars={5}
//           rating={movieDetails.vote_average / 2}
//           fullStarColor={'#f1c40f'}
//           emptyStarColor={'#34495e'}
//           starSize={30}
//           containerStyle={styles.starContainer}
//         />

//         <TouchableOpacity
//           style={styles.reviewButton}
//           onPress={handleWriteReviewPress}
//         >
//           <Text style={styles.reviewButtonText}>Write a Review</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1e272e',
//   },
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#1e272e',
//   },
//   backdrop: {
//     width: '100%',
//     height: 250,
//     resizeMode: 'cover',
//     marginBottom: 10,
//   },
//   contentContainer: {
//     padding: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#f5f6fa',
//     marginBottom: 8,
//   },
//   overview: {
//     fontSize: 18,
//     color: '#f5f6fa',
//     marginBottom: 10,
//   },
//   reviewButton: {
//     backgroundColor: '#e1b12c',
//     borderRadius: 50,
//     padding: 12,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 5,
//   },
//   reviewButtonText: {
//     color: '#2f3640',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   starContainer: {
//     justifyContent: 'flex-start',
//     marginBottom: 10,
//   },
//   // Other styles...
// });

// export default MovieDetailScreen;

// import React, { useState, useEffect } from 'react';
// import {
//   ScrollView,
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   TouchableOpacity,
//   ActivityIndicator,
//   Modal
// } from 'react-native';
// import StarRating from 'react-native-star-rating';
// import { movies } from '../utilities/data'; // Correct the path as necessary
// import { checkQuizPassed } from '../utilities/quiz_storage'; // Correct the path as necessary

// const MovieDetailScreen = ({ route, navigation }) => {
//   const { movieId } = route.params;
//   const [modalVisible, setModalVisible] = useState(false);
//   const movieDetails = movies.find(movie => movie.id === movieId);

//   useEffect(() => {
//     // Automatically open the modal when the screen is focused
//     setModalVisible(true);
//   }, [movieId]);

//   if (!movieDetails) {
//     return <View style={styles.loadingContainer}><ActivityIndicator size="large" color="#0000ff" /></View>;
//   }

//   const handleWriteReviewPress = async () => {
//     const movieTitle = movieDetails.title;
//     const hasPassedQuiz = await checkQuizPassed(movieTitle);

//     if (hasPassedQuiz) {
//       navigation.navigate('ReviewScreen', { movieId: movieDetails.id });
//     } else {
//       navigation.navigate('QuizScreen', { movieTitle: movieTitle, movieId: movieDetails.id });
//     }
//   };

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={modalVisible}
//       onRequestClose={() => {
//         setModalVisible(!modalVisible);
//       }}
//     >
//       <View style={styles.modalOverlay}>
//         <View style={styles.modalContent}>
//           <TouchableOpacity
//             style={styles.closeButton}
//             onPress={() => {
//               setModalVisible(!modalVisible);
//               navigation.goBack();
//             }}
//           >
//             <Text style={styles.closeButtonText}>×</Text>
//           </TouchableOpacity>
//           <ScrollView>
//             <Image
//               source={{ uri: `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}` }}
//               style={styles.backdrop}
//             />
//             <Text style={styles.title}>{movieDetails.title}</Text>
//             <Text style={styles.overview}>{movieDetails.overview}</Text>
//             <StarRating
//               disabled={true}
//               maxStars={5}
//               rating={movieDetails.vote_average / 2}
//               fullStarColor={'#f1c40f'}
//               emptyStarColor={'#34495e'}
//               starSize={30}
//             />
//             <TouchableOpacity
//               style={styles.reviewButton}
//               onPress={handleWriteReviewPress}
//             >
//               <Text style={styles.reviewButtonText}>Write a Review</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   loadingContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#1e272e',
//   },
//   modalOverlay: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0,0,0,0.5)',
//   },
//   modalContent: {
//     backgroundColor: '#fff',
//     borderRadius: 20,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     width: '90%',
//     maxHeight: '80%',
//   },
//   backdrop: {
//     width: '100%',
//     height: 250,
//     resizeMode: 'cover',
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: 'bold',
//     color: '#f5f6fa',
//     marginBottom: 8,
//   },
//   overview: {
//     fontSize: 18,
//     color: '#f5f6fa',
//     marginBottom: 10,
//   },
//   reviewButton: {
//     backgroundColor: '#e1b12c',
//     borderRadius: 20,
//     padding: 10,
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   reviewButtonText: {
//     color: '#2f3640',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   closeButton: {
//     alignSelf: 'flex-end',
//     padding: 10,
//     backgroundColor: '#e1b12c',
//     borderRadius: 20,
//     marginTop: -10,
//     marginRight: -10,
//   },
//   closeButtonText: {
//     color: '#2f3640',
//     fontWeight: 'bold',
//     fontSize: 24,
//   },
// });

// export default MovieDetailScreen;

// MovieDetailsModal.js
// import React from 'react';
// import { Modal, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import { m_data } from '../utilities/movie_data';


// const MovieDetailsModal = ({ visible, movie, onClose }) => {
//   if (!movie) return null;
//   if(!m_data) return null;

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <ScrollView>
//             <Image
//               source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
//               style={styles.poster}
//             />
//             <Text style={styles.title}>{movie.title}</Text>
//             {/* Placeholder for additional details like cast, synopsis */}
//             <Text style={styles.synopsis}>{movie.overview || "No synopsis available."}</Text>
//             {/* <Text style={styles.cast}>{m_data.cast || "No cast available."}</Text> */}
//             <Text style={styles.cast}>{m_data[movie.title]?.cast.join(', ') || "No cast available."}</Text>


//             {/* Implementing review section and write review feature will go here */}

//             <TouchableOpacity onPress={onClose} style={styles.button}>
//               <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 25,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     width: '90%',
//     maxHeight: '80%',
//   },
//   poster: {
//     width: 300,
//     height: 450,
//     marginBottom: 15,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 22,
//     marginBottom: 15,
//   },
//   synopsis: {
//     fontSize: 16,
//     marginBottom: 15,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     backgroundColor: "#2196F3",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   }
// });

// export default MovieDetailsModal;
// import React from 'react';
// import {
//   Modal,
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   ViewPropTypes,
// } from 'react-native';

// // Assuming m_data is imported as before
// import { m_data } from '../utilities/movie_data';

// const MovieDetailsModal = ({ visible, movie, onClose }) => {
//   if (!movie) return null;
//   if (!m_data) return null;

//   // Placeholder function for Add Review
//   const handleAddReview = () => {
//     // Placeholder for add review action
//   };

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <ScrollView>
//             <Image
//               source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
//               style={styles.poster}
//             />
//             <Text style={styles.title}>{movie.title}</Text>
//             <Text style={styles.sectionTitle}>Overview</Text>
//             <Text style={styles.synopsis}>{movie.overview || "No synopsis available."}</Text>
//             <View style={styles.separator} />
//             <Text style={styles.sectionTitle}>Where to Watch</Text>
//             {/* Placeholder icons for streaming services */}
//             <View style={styles.iconContainer}>
//               {/* Icons would go here */}
//               <Text>Icons Placeholder</Text>
//             </View>
//             <View style={styles.separator} />
//             <Text style={styles.sectionTitle}>Rating</Text>
//             {/* Visual representation of vote_average and vote_count could go here */}
//             <Text style={styles.ratingText}>{`Average Rating: ${movie.vote_average} (${movie.vote_count} votes)`}</Text>
//             <TouchableOpacity style={styles.button} onPress={handleAddReview}>
//               <Text style={styles.buttonText}>Add Review</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//               <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//   // Other styles as before
//   sectionTitle: {
//     fontWeight: 'bold',
//     fontSize: 18,
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   separator: {
//     borderBottomColor: '#cccccc',
//     borderBottomWidth: 1,
//     marginVertical: 20,
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginBottom: 20,
//   },
//   ratingText: {
//     fontSize: 16,
//     marginBottom: 20,
//   },
//   closeButton: {
//     backgroundColor: "#2196F3",
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     marginBottom: 20, // Added spacing at the bottom for scrollability
//   },
//   // Ensure styles.button is styled for the Add Review button
// });

// export default MovieDetailsModal;



// import React from 'react';
// import {
//   Modal,
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions
// } from 'react-native';
// import { m_data } from '../utilities/movie_data';
// import { PanGestureHandler } from 'react-native-gesture-handler';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   useAnimatedGestureHandler,
//   withSpring,
// } from 'react-native-reanimated';


// const MovieDetailsModal = ({ visible, movie, onClose }) => {
//   if (!movie) return null;

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <View style={styles.centeredView}>
//         <View style={styles.modalView}>
//           <ScrollView>
//             <Image
//               source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
//               style={styles.poster}
//             />
//             <Text style={styles.title}>{movie.title}</Text>
//             <Text style={styles.sectionTitle}>Overview</Text>
//             <Text style={styles.synopsis}>{movie.overview || "No synopsis available."}</Text>
//             <View style={styles.separator} />
//             {/* <Text style={styles.whereToWatchTitle}>Where to Watch</Text> */}
//             <View style={styles.whereToWatchContainer}>
//             <Text style={styles.whereToWatchTitle}>Where to Watch</Text>
//             <View style={styles.placeholderIcon}>
//                 <Text style={styles.iconText}>X</Text>
//               </View>
//               <View style={styles.placeholderIcon}>
//                 <Text style={styles.iconText}>X</Text>
//               </View>
//               <View style={styles.placeholderIcon}>
//                 <Text style={styles.iconText}>X</Text>
//               </View>
//               <View style={styles.placeholderIcon}>
//                 <Text style={styles.iconText}>X</Text>
//               </View>
//             </View>
//             {/* <View style={styles.iconContainer}>
//               <View style={styles.placeholderIcon}>
//                 <Text style={styles.iconText}>X</Text>
//               </View>
//               <View style={styles.placeholderIcon}>
//                 <Text style={styles.iconText}>X</Text>
//               </View>
//               <View style={styles.placeholderIcon}>
//                 <Text style={styles.iconText}>X</Text>
//               </View>
//               <View style={styles.placeholderIcon}>
//                 <Text style={styles.iconText}>X</Text>
//               </View>
//             </View> */}
//             <View style={styles.separator} />
//             <Text style={styles.sectionTitle}>Ratings</Text>
//             <Text style={styles.rating}>Rating: {movie.vote_average} ({movie.vote_count} votes)</Text>
//             <TouchableOpacity style={styles.reviewButton} onPress={() => { /* Implement Add Review Action */ }}>
//               <Text style={styles.buttonText}>Add Review</Text>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={onClose} style={styles.button}>
//               <Text style={styles.buttonText}>Close</Text>
//             </TouchableOpacity>
//           </ScrollView>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// const styles = StyleSheet.create({
//     centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 25,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     width: '90%',
//     maxHeight: '80%',
//   },
//   poster: {
//     width: 300,
//     height: 450,
//     marginBottom: 15,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 22,
//     marginBottom: 15,
//   },
//   synopsis: {
//     fontSize: 14,
//     marginBottom: 1,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     backgroundColor: "#2196F3",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   // Other styles remain unchanged
// //   iconContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'flex-start',
// //     flexWrap: 'wrap',
// //     width: '100%',
// //     marginBottom: 0,
// //   },
// // Container for both the title and icons
// whereToWatchContainer: {
//     flexDirection: 'row', // Align items in a row
//     alignItems: 'center', // Center items vertically
//     flexWrap: 'wrap', // Allow items to wrap to the next line if not enough space
//   },
//   // Adjust the title style to fit in the same row
//   whereToWatchTitle: {
//     fontWeight: 'bold',
//     marginRight: 100, // Add some margin to the right of the title for spacing
//   },  
//   placeholderIcon: {
//     width: 15
//     , // Adjust size as needed
//     height: 15, // Adjust size as needed
//     borderWidth: 1,
//     borderColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0', // Light grey background
//     marginHorizontal: 3
//   },
//   iconText: {
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   separator: {
//     alignSelf: 'stretch',
//     borderBottomColor: '#cccccc', // Make sure this color is visible against the background
//     borderBottomWidth: 1,
//     marginVertical: 20,
//   },
//   sectionTitle: {
//     fontWeight: 'bold', // Makes text bold
//     fontSize: 18, // Adjust the size as needed; this example sets it to 20
//     alignSelf: 'flex-start',
//     marginBottom: 10,
//   },  
    
//   // Add or adjust other styles as needed
// });

// export default MovieDetailsModal;
// import React from 'react';
// import {
//   Modal,
//   View,
//   Text,
//   Image,
//   ScrollView,
//   TouchableOpacity,
//   StyleSheet,
//   Dimensions
// } from 'react-native';
// import { m_data } from '../utilities/movie_data';
// import { PanGestureHandler } from 'react-native-gesture-handler';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import Animated, {
//   useSharedValue,
//   useAnimatedStyle,
//   useAnimatedGestureHandler,
//   withSpring,
// } from 'react-native-reanimated';

// const MovieDetailsModal = ({ visible, movie, onClose }) => {
//   if (!movie) return null;

//   // Translation value for the gesture
//   const translateY = useSharedValue(0);

//   // Gesture handler for the swipe-down gesture
//   const gestureHandler = useAnimatedGestureHandler({
//     onActive: (event, ctx) => {
//       if (event.translationY > 0) { // Ensures only downward movement is considered
//         translateY.value = event.translationY;
//       }
//     },
//     onEnd: (_) => {
//       if (translateY.value > 100) { // Threshold for closing modal
//         onClose();
//       } else {
//         translateY.value = withSpring(0); // Animates back to original position
//       }
//     },
//   });

//   // Animated style to move the modal content
//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [{ translateY: translateY.value }],
//     };
//   });

//   return (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//     <GestureHandlerRootView style={{ flex: 1 }}> {/* Use GestureHandlerRootView here */}
//       <View style={styles.centeredView}>
//         <PanGestureHandler onGestureEvent={gestureHandler}>
//           <Animated.View style={[styles.modalView, animatedStyle]}>
//             <ScrollView>
//               <Image
//                 source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
//                 style={styles.poster}
//               />
//               <Text style={styles.title}>{movie.title}</Text>
//               <Text style={styles.sectionTitle}>Overview</Text>
//               <Text style={styles.synopsis}>{movie.overview || "No synopsis available."}</Text>
//               <View style={styles.separator} />
//               <View style={styles.whereToWatchContainer}>
//                 <Text style={styles.whereToWatchTitle}>Where to Watch</Text>
//                 {/* Icon placeholders */}
//                 <View style={styles.placeholderIcon}><Text style={styles.iconText}>X</Text></View>
//                 {/* Additional icons */}
//               </View>
//               <View style={styles.separator} />
//               <Text style={styles.sectionTitle}>Ratings</Text>
//               <Text style={styles.rating}>Rating: {movie.vote_average} ({movie.vote_count} votes)</Text>
//               <TouchableOpacity style={styles.reviewButton} onPress={() => { /* Implement Add Review Action */ }}>
//                 <Text style={styles.buttonText}>Add Review</Text>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={onClose} style={styles.button}>
//                 <Text style={styles.buttonText}>Close</Text>
//               </TouchableOpacity>
//             </ScrollView>
//           </Animated.View>
//         </PanGestureHandler>
//       </View>
//       </GestureHandlerRootView> {/* Closing GestureHandlerRootView */}
//     </Modal>
//   );
// };

// // Styles remain unchanged from your provided code
// const styles = StyleSheet.create({
//     centeredView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 22
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: "white",
//     borderRadius: 20,
//     padding: 25,
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 2
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 4,
//     elevation: 5,
//     width: '90%',
//     maxHeight: '80%',
//   },
//   poster: {
//     width: 300,
//     height: 450,
//     marginBottom: 15,
//   },
//   title: {
//     fontWeight: 'bold',
//     fontSize: 22,
//     marginBottom: 15,
//   },
//   synopsis: {
//     fontSize: 14,
//     marginBottom: 1,
//   },
//   button: {
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//     backgroundColor: "#2196F3",
//   },
//   buttonText: {
//     color: "white",
//     fontWeight: "bold",
//     textAlign: "center"
//   },
//   // Other styles remain unchanged
// //   iconContainer: {
// //     flexDirection: 'row',
// //     justifyContent: 'flex-start',
// //     flexWrap: 'wrap',
// //     width: '100%',
// //     marginBottom: 0,
// //   },
// // Container for both the title and icons
// whereToWatchContainer: {
//     flexDirection: 'row', // Align items in a row
//     alignItems: 'center', // Center items vertically
//     flexWrap: 'wrap', // Allow items to wrap to the next line if not enough space
//   },
//   // Adjust the title style to fit in the same row
//   whereToWatchTitle: {
//     fontWeight: 'bold',
//     marginRight: 100, // Add some margin to the right of the title for spacing
//   },  
//   placeholderIcon: {
//     width: 15
//     , // Adjust size as needed
//     height: 15, // Adjust size as needed
//     borderWidth: 1,
//     borderColor: 'black',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f0f0f0', // Light grey background
//     marginHorizontal: 3
//   },
//   iconText: {
//     color: 'black',
//     fontWeight: 'bold',
//   },
//   separator: {
//     alignSelf: 'stretch',
//     borderBottomColor: '#cccccc', // Make sure this color is visible against the background
//     borderBottomWidth: 1,
//     marginVertical: 20,
//   },
//   sectionTitle: {
//     fontWeight: 'bold', // Makes text bold
//     fontSize: 18, // Adjust the size as needed; this example sets it to 20
//     alignSelf: 'flex-start',
//     marginBottom: 10,
//   },  
    
//   // Add or adjust other styles as needed
// });

// export default MovieDetailsModal;

import React from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import QuizScreen from './QuizScreen'; // Adjust the path as needed
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

const mockReviewData = {
  '1': 3,
  '2': 2,
  '3': 5,
  '4': 2,
  '5': 2,
};

// MiniBarGraph Component
const MiniBarGraph = ({ reviews }) => {
  const maxCount = Math.max(...Object.values(reviews)); // Find the max count for scaling

  return (
    <View style={{ flexDirection: 'column', marginVertical: 10 }}>
      {Object.entries(reviews).map(([star, count]) => (
        <View key={star} style={styles.barGraphRow}>
          <Text style={styles.barGraphLabel}>{star}☆:</Text>
          <View style={[styles.barGraphBar, { width: `${(count / maxCount) * 100 * 0.75}%` }]} />
        </View>
      ))}
    </View>
  );
};

// MovieDetailsModal Component
const MovieDetailsModal = ({ visible, movie, onClose }) => {
  const navigation = useNavigation(); // Access navigation object using useNavigation hook

  if (!movie) return null;

  const handleNavigateToQuiz = () => {
    navigation.navigate('QuizScreen', { movieTitle: movie.title, movieId: movie.id });
    onClose();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ScrollView>
            <Image
              source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }}
              style={styles.poster}
            />
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.sectionTitle}>Overview</Text>
            <Text style={styles.synopsis}>{movie.overview || "No synopsis available."}</Text>
            <View style={styles.separator} />
            
            {/* Where to Watch Section */}
            <View style={styles.whereToWatchContainer}>
              <Text style={styles.whereToWatchTitle}>Where to Watch</Text>
              {/* Placeholder Icons */}
              <View style={styles.placeholderIcon}><Text style={styles.iconText}>X</Text></View>
              <View style={styles.placeholderIcon}><Text style={styles.iconText}>X</Text></View>
              <View style={styles.placeholderIcon}><Text style={styles.iconText}>X</Text></View>
              <View style={styles.placeholderIcon}><Text style={styles.iconText}>X</Text></View>
            </View>
            <View style={styles.separator} />

            {/* Ratings Section */}
            <Text style={styles.sectionTitle}>Ratings</Text>
            <MiniBarGraph reviews={mockReviewData} />

            {/* Buttons */}
            <TouchableOpacity onPress={handleNavigateToQuiz} style={styles.button}>
              <Text style={styles.buttonText}>Review</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={onClose} style={styles.button}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

// Styles
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
    maxHeight: '80%',
  },
  poster: {
    width: 300,
    height: 450,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    alignContent: 'center',
  },
  synopsis: {
    fontSize: 14,
    marginBottom: 1,
  },
  separator: {
    alignSelf: 'stretch',
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  whereToWatchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  whereToWatchTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  placeholderIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 5,
  },
  iconText: {
    color: 'black',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#2196F3",
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  barGraphRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
  },
  barGraphContainer: {
    flexDirection: 'column',
    width: '100%', // Ensure this container has a defined width
    marginVertical: 10,
  },
  barGraphRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  barGraphLabel: {
    width: 30,
    fontSize: 12,
    marginRight: 5,
  },
  barGraphBar: {
    height: 10,
    backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  
  sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 1,
        marginBottom: 5,
      },
});

export default MovieDetailsModal;
