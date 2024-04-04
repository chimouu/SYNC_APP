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

import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { quizzes as nestedQuizzes } from '../utilities/quiz_data'; // Adjust the import path to your quiz_data file
import { markQuizAsPassed } from '../utilities/quiz_storage';

const QuizScreen = ({ route, navigation }) => {
  const { movieId } = route.params;
  console.log(route.params);
  
  // Assuming the quizzes are nested in an outer array, each with a quizzes key
  const quizzes = nestedQuizzes.flatMap(item => item.quizzes).flat();
  console.log(quizzes);

  // Finding a quiz by ID, assuming the flattened structure
  const quiz = quizzes.find(quiz => quiz.id === movieId);

  console.log(quiz);

  const [selectedChoices, setSelectedChoices] = useState({});
  
  const handleChoice = (choice, questionIndex) => {
    setSelectedChoices(prevChoices => ({ ...prevChoices, [questionIndex]: choice }));
  };

  const submitQuiz = async () => {
    let newScore = 0;
    quiz.questions.forEach((question, index) => {
      if (selectedChoices[index] === question.correct_answer) {
        newScore += 1;
      }
    });

    if (newScore >= 4) {
      await markQuizAsPassed(movieId); // Assuming you're marking by movieId now
      navigation.navigate('ReviewScreen', { movieId });
    } else {
      Alert.alert("Quiz Result", "You need at least 4/5 to pass. Please try again!", [{ text: "OK" }]);
    }
  };

  if (!quiz) {
    return <Text>No quiz found for this movieId.</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{quiz.title}</Text>
      {quiz.questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{question.question}</Text>
          {question.choices.map(choice => (
            <TouchableOpacity
              key={choice}
              style={[
                styles.choice,
                selectedChoices[index] === choice && styles.selectedChoice,
              ]}
              onPress={() => handleChoice(choice, index)}
            >
              <Text style={styles.choiceText}>{choice}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <TouchableOpacity style={styles.submitButton} onPress={submitQuiz}>
        <Text style={styles.submitButtonText}>Submit Quiz</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Styles remain unchanged


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  choice: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedChoice: {
    backgroundColor: 'lightblue',
  },
  choiceText: {
    fontSize: 16,
  },
  submitButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default QuizScreen;

