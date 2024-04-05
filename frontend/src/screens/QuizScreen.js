// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
// import { quizzes } from '../utilities/quiz_data'; // Update with the correct path to your quiz data

// const findQuizForMovie = (movieTitle) => {
//   const normalizedMovieTitle = movieTitle.toLowerCase();
//   return quizzes.find(quiz =>
//     quiz.title.toLowerCase().includes(normalizedMovieTitle)
//   );
// };

// const QuizScreen = ({ route, navigation }) => {
//   const { movieTitle } = route.params;
//   const quiz = findQuizForMovie(movieTitle);

//   if (!quiz) {
//     // Handle the case where a quiz is not found for the movieTitle
//     Alert.alert('Quiz not found', 'There is no quiz available for this movie.');
//     navigation.goBack();
//     return null;
//   }

//   const [selectedChoices, setSelectedChoices] = useState(Array(quiz.questions.length).fill(null));
//   const [score, setScore] = useState(0);

//   const handleChoice = (choice, questionIndex) => {
//     setSelectedChoices(prevChoices => {
//       const newChoices = [...prevChoices];
//       newChoices[questionIndex] = choice;
//       return newChoices;
//     });
//   };

//   const submitQuiz = () => {
//     const newScore = quiz.questions.reduce((score, question, index) => {
//       return score + (selectedChoices[index] === question.correct_answer ? 1 : 0);
//     }, 0);

//     setScore(newScore);
//     Alert.alert("Quiz Completed", `Your score is: ${newScore}/${quiz.questions.length}`);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <Text style={styles.title}>{quiz.title}</Text>
//       {quiz.questions.map((question, index) => (
//         <View key={index} style={styles.questionContainer}>
//           <Text style={styles.question}>{question.question}</Text>
//           {question.choices.map((choice) => (
//             <TouchableOpacity
//               key={choice}
//               style={[
//                 styles.choice,
//                 selectedChoices[index] === choice && styles.selectedChoice,
//               ]}
//               onPress={() => handleChoice(choice, index)}
//             >
//               <Text style={styles.choiceText}>{choice}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}
//       <TouchableOpacity style={styles.submitButton} onPress={submitQuiz}>
//         <Text style={styles.submitButtonText}>Submit Quiz</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   questionContainer: {
//     marginBottom: 20,
//   },
//   question: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   choice: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 5,
//     marginVertical: 5,
//   },
//   selectedChoice: {
//     backgroundColor: 'lightblue',
//   },
//   choiceText: {
//     fontSize: 16,
//   },
//   submitButton: {
//     backgroundColor: '#3498db',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   submitButtonText: {
//     fontSize: 18,
//     color: 'white',
//   },
//   // Add other styles as needed
// });

// export default QuizScreen;

// // QuizScreen.js
// import React, { useState } from 'react';
// import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { quizzes } from '../utilities/quiz_data'; // Adjust the import path to your quiz_data file
// import { markQuizAsPassed } from '../utilities/quiz_storage'; // Assuming you've created QuizStorage.js as described

// import React, { useState } from 'react';
// import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { quizzes as nestedQuizzes } from '../utilities/quiz_data';
// import { markQuizAsPassed } from '../utilities/quiz_storage';

// const QuizScreen = ({ route, navigation }) => {
//   const { movieTitle, movieId } = route.params;
  
//   // Flatten the quizzes data structure
//   const quizzes = nestedQuizzes.flatMap(item => item.quizzes).flat();

//   // Find the quiz by movieId
//   const quiz = quizzes.find(quiz => quiz.title === movieTitle);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedChoices, setSelectedChoices] = useState({});

//   if (!quiz) {
//     return <Text>No quiz found for this movieTitle.</Text>;
//   }

//   const handleChoice = (choice, questionIndex) => {
//     setSelectedChoices(prevChoices => ({ ...prevChoices, [questionIndex]: choice }));
//     // If not on the last question, go to the next question
//     if (questionIndex < quiz.questions.length - 1) {
//       setCurrentQuestionIndex(questionIndex + 1);
//     }
//   };

//   const submitQuiz = async () => {
//     let newScore = 0;
//     quiz.questions.forEach((question, index) => {
//       if (selectedChoices[index] === question.correct_answer) {
//         newScore += 1;
//       }
//     });

//     if (newScore >= 4) {
//       await markQuizAsPassed(movieTitle); // Assuming you're marking by movieId now
//       navigation.navigate('ReviewScreen', { movieTitle });
//     } else {
//       Alert.alert("Quiz Result", "You need at least 4/5 to pass. Please try again!", [{ text: "OK" }]);
//     }
//   };

//   if (!quiz) {
//     return <Text>No quiz found for this movieTitle.</Text>;
//   }

//   return (
//     <ScrollView
//       contentContainerStyle={styles.scrollViewContent} // Adjusted to contentContainerStyle
//       style={styles.container} // If you have styles specific to the ScrollView itself, not its content
//     >
//       <Text style={styles.title}>{quiz.title}</Text>
//       {quiz.questions.map((question, index) => (
//         <View key={index} style={styles.questionContainer}>
//           <Text style={styles.question}>{question.question}</Text>
//           {question.choices.map(choice => (
//             <TouchableOpacity
//               key={choice}
//               style={[
//                 styles.choice,
//                 selectedChoices[index] === choice && styles.selectedChoice,
//               ]}
//               onPress={() => handleChoice(choice, index)}
//             >
//               <Text style={styles.choiceText}>{choice}</Text>
//             </TouchableOpacity>
//           ))}
//         </View>
//       ))}
//       <TouchableOpacity style={styles.submitButton} onPress={submitQuiz}>
//         <Text style={styles.submitButtonText}>Submit Quiz</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   scrollViewContent: {
//     padding: 20,
//     justifyContent: 'space-between', // This is now for the content container
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   questionCard: {
//     margin: 10,
//     padding: 20,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.22,
//     shadowRadius: 2.22,
//     elevation: 3,
//   },
//   question: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 20,
//   },
//   choice: {
//     marginTop: 10,
//     padding: 10,
//     backgroundColor: '#f0f0f0',
//     borderRadius: 5,
//   },
//   selectedChoice: {
//     backgroundColor: '#c0e0ff', // Adjust as per your app theme
//   },
//   choiceText: {
//     fontSize: 16,
//   },
//   submitButton: {
//     margin: 10,
//     backgroundColor: '#3498db',
//     padding: 15,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   submitButtonText: {
//     color: 'white',
//     fontSize: 18,
//   },
// });


// export default QuizScreen;

// import React, { useState } from 'react';
// import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { quizzes as nestedQuizzes } from '../utilities/quiz_data';
// import { markQuizAsPassed } from '../utilities/quiz_storage';

// const QuizScreen = ({ route, navigation }) => {
//   const { movieTitle } = route.params;

//   // Flatten the quizzes data structure
//   const quizzes = nestedQuizzes.flatMap(item => item.quizzes).flat();

//   // Find the quiz by movieId
//   const quiz = quizzes.find(quiz => quiz.title === movieTitle);

//   const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//   const [selectedChoices, setSelectedChoices] = useState({});

//   if (!quiz) {
//     return <Text>No quiz found for this movieTitle.</Text>;
//   }

//   const handleChoice = (choice) => {
//     setSelectedChoices({ ...selectedChoices, [currentQuestionIndex]: choice });
//     if (currentQuestionIndex < quiz.questions.length - 1) {
//       setCurrentQuestionIndex(currentQuestionIndex + 1);
//     } else {
//       submitQuiz();
//     }
//   };

//   const submitQuiz = async () => {
//     let newScore = 0;
//     quiz.questions.forEach((question, index) => {
//       if (selectedChoices[index] === question.correct_answer) {
//         newScore += 1;
//       }
//     });

//     if (newScore >= 4) {
//       await markQuizAsPassed(movieTitle); // Assuming you're marking by movieTitle now
//       navigation.navigate('ReviewScreen', { movieTitle });
//     } else {
//       Alert.alert("Quiz Result", "You need at least 4/5 to pass. Please try again!", [{ text: "OK", onPress: () => navigation.navigate('HomeScreen') }]);
//     }
//   };

//   const currentQuestion = quiz.questions[currentQuestionIndex];

//   return (
//     <ScrollView contentContainerStyle={styles.scrollViewContent} style={styles.container}>
//       <View key={currentQuestionIndex} style={styles.questionContainer}>
//         <Text style={styles.question}>{currentQuestion.question}</Text>
//         {currentQuestion.choices.map((choice, index) => (
//           <TouchableOpacity
//             key={index}
//             style={[
//               styles.choice,
//               selectedChoices[currentQuestionIndex] === choice && styles.selectedChoice,
//             ]}
//             onPress={() => handleChoice(choice)}
//           >
//             <Text style={styles.choiceText}>{choice}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   // Add your styles here
// });

// export default QuizScreen;

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

  // Flatten the quizzes data structure
  const quizzes = nestedQuizzes.flatMap(item => item.quizzes).flat();

  // Find the quiz by movieId
  const quiz = quizzes.find(quiz => quiz.title === movieTitle);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedChoices, setSelectedChoices] = useState({});
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    // Automatically open the modal for the first question when the component mounts
    setIsModalVisible(true);
  }, []);

  if (!quiz) {
    return <Text>No quiz found for this movieTitle.</Text>;
  }

  const handleChoice = (choice) => {
    setSelectedChoices({ ...selectedChoices, [currentQuestionIndex]: choice });
    setIsModalVisible(false); // Hide the modal after a choice is made

    if (currentQuestionIndex < quiz.questions.length - 1) {
      setTimeout(() => { // Add a slight delay before showing the next question
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setIsModalVisible(true); // Show the modal for the next question
      }, 300); // Delay can be adjusted
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

    if (newScore >= quiz.questions.length * 0.8) { // 80% score to pass
      await markQuizAsPassed(movieTitle);
      navigation.navigate('ReviewScreen', { movieTitle });
    } else {
      Alert.alert("Quiz Result", "You need at least 80% to pass. Please try again!", [{
        text: "OK", onPress: () => navigation.goBack() // Assuming goBack goes to the home screen
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
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 18,
    fontWeight: 'bold',
  },
  choice: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    width: 250, // Set a fixed width for choice buttons
  },
  selectedChoice: {
    backgroundColor: '#c0e0ff',
  },
  choiceText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center', // Ensure text is centered within the choice button
  },
});

export default QuizScreen;


