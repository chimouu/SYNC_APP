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
import QuizScreen from './QuizScreen'; 
import { useNavigation } from '@react-navigation/native'; 
const mockReviewData = {
  '1': 3,
  '2': 2,
  '3': 5,
  '4': 2,
  '5': 2,
};

const MiniBarGraph = ({ reviews }) => {
  const maxCount = Math.max(...Object.values(reviews)); 

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

const MovieDetailsModal = ({ visible, movie, onClose }) => {
  const navigation = useNavigation(); 

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

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#390f1b',
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
    color: '#ad9974',
  },
  synopsis: {
    fontSize: 14,
    marginBottom: 1,
    color: '#ad9974',
  },
  separator: {
    alignSelf: 'stretch',
    borderBottomColor: '#ad9974',
    borderBottomWidth: 1,
    marginVertical: 20,
  },
  whereToWatchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    color: '#ad9974',
  },
  whereToWatchTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#ad9974',
  },
  placeholderIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ad9974',
    margin: 5,
  },
  iconText: {
    color: '#000000',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "#ad9974",
    marginTop: 10,
    color: '#390f1b',
  },
  buttonText: {
    color: '#390f1b',
    fontWeight: "bold",
    textAlign: "center",
  },
  barGraphRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 3,
    color: '#ad9974'
  },
  barGraphContainer: {
    flexDirection: 'column',
    width: '100%', 
    marginVertical: 10,
    color: '#ad9974',
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
    color: '#ad9974'
  },
  barGraphBar: {
    height: 10,
    backgroundColor: '#ad9974',
    borderRadius: 5,
    color: '#ad9974',
  },
  
  sectionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 1,
        marginBottom: 5,
        color: '#ad9974',
      },
});

export default MovieDetailsModal;
