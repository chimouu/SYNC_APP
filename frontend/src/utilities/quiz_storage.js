// QuizStorage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkQuizPassed = async (movieTitle) => {
  return await AsyncStorage.getItem(`quizPassedFor:${movieTitle}`);
};

export const markQuizAsPassed = async (movieTitle) => {
  await AsyncStorage.setItem(`quizPassedFor:${movieTitle}`, 'true');
};
