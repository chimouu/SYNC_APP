// import React from 'react';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from '../screens/HomeScreen';
// import MovieDetailScreen from '../screens/MovieDetailsScreen';
// import RecScreen from '../screens/RecScreen';
// import ReviewScreen from '../screens/ReviewScreen';
// import QuizScreen from '../screens/QuizScreen';

// const Stack = createNativeStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
//         <Stack.Screen name="MovieDetails" component={MovieDetailScreen} options={{ title: 'Movie Details' }} />
//         <Stack.Screen name="Recommendations" component={RecScreen} options={{ title: 'Recommenations' }} />
//         <Stack.Screen name="Reviews" component={ReviewScreen} options={{ title: 'Reviews' }} />
//         <Stack.Screen name="Quiz" component={QuizScreen} options={{ title: 'Quiz' }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailScreen from '../screens/MovieDetailsScreen';
import RecScreen from '../screens/RecScreen';
import ReviewScreen from '../screens/ReviewScreen';
import QuizScreen from '../screens/QuizScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MovieDetailScreen" component={MovieDetailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="RecScreen" component={RecScreen} options={{ title: 'Recommendations' }} />
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{ title: 'Reviews' }} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} options={{ title: 'Quiz' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

