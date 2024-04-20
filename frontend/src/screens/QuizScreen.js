import React, { useState, useEffect } from 'react';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Modal
} from 'react-native';
import { quizzes as nestedQuizzes } from '../utilities/quiz_data';
import { markQuizAsPassed } from '../utilities/quiz_storage';

const QuizScreen = ({ route, navigation }) => {
  const { movieTitle } = route.params;

  const quizzes = nestedQuizzes.flatMap(item => item.quizzes).flat();

  const quiz = quizzes.find(quiz => quiz.title === movieTitle);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setIsModalVisible(true);
  }, []);

  if (!quiz) {
    return <Text>No quiz found for this movieTitle.</Text>;
  }

  const handleChoice = (choice) => {
    setSelectedChoices({ ...selectedChoices, [currentQuestionIndex]: choice });
    setIsModalVisible(false); 
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setTimeout(() => { 
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsModalVisible(true); 
      }, 300); 
    } else {
      submitQuiz();
    }
  };

  const submitQuiz = async () => {
    let newScore = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedChoices[index] === question.correct_answer) {
        newScore += 1;
      }
    });

    if (newScore >= quiz.questions.length * 0.8) { 
      await markQuizAsPassed(movieTitle);
      navigation.navigate('ReviewScreen', { movieTitle });
    } else {
      Alert.alert("Quiz Result", "You need at least 80% to pass. Please try again!", [{
        text: "OK", onPress: () => navigation.goBack() 
      }]);
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          Alert.alert("Quiz has been closed.");
          setIsModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{quiz.questions[currentQuestionIndex].question}</Text>
            {quiz.questions[currentQuestionIndex].choices.map((choice, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.choice,
                  selectedChoices[currentQuestionIndex] === choice && styles.selectedChoice,
                ]}
                onPress={() => handleChoice(choice)}
              >
                <Text style={styles.choiceText}>{choice}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#390f1b',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    color: '#390f1b',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#661128',
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#390f1b",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    color: '#390f1b',
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ad9974',
  },
  choice: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#390f1b',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#390f1b',
    width: 250, 
    color: ''
  },
  selectedChoice: {
    backgroundColor: '#c0e0ff',
  },
  choiceText: {
    fontSize: 16,
    color: '#ad9974',
    textAlign: 'center', 
  },
});

export default QuizScreen;


