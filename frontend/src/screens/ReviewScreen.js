import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Rating } from 'react-native-ratings';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { movies } from '../utilities/data'; 

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
        { text: 'OK', onPress: () => navigation.navigate('Home') }, 
      ]);
    } catch (error) {
      console.error('Failed to save the review:', error);
      Alert.alert('Error', 'There was a problem saving your review.');
    }
  };

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
    backgroundColor: '#661128',
  },
  movieInfo: {
    alignItems: 'center',
    marginTop: 20,
    color: '#ad9974'
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
    color: '#ad9974'
  },
  datePicker: {
    width: '100%',
    marginTop: -50,
  },
  rating: {
    paddingVertical: 40,
    backgroundColor: 'transparent'
  },
  reviewInput: {
    minHeight: 100,
    padding: 10,
    marginHorizontal: 20,
    marginTop: -19,
    borderWidth: 1,
    borderColor: '#ad9974',
    borderRadius: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    backgroundColor: '#390f1b',
    color: '#ad9974'
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
    borderColor: '#ad9974',
    borderRadius: 10,
    backgroundColor: '#390f1b',
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
    color: '#ad9974'
  },
  submitButton: {
    backgroundColor: '#390f1b',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    marginBottom: 20,
    borderColor: '#ad9974',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    color: '#ad9974',
  },
  movieTitleContainer: {
    fontSize: 14,
    flex: 1,
    justifyContent: 'center',
    color: '#ad9974',
    borderColor: '#ad9974',
  },
  movieReleaseDate: {
    fontSize: 14,
    color: '#ad9974',
  },
});

export default ReviewScreen;

