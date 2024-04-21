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
import MovieDetailsModal from '../screens/MovieDetailsModal';
import RecScreen from '../screens/RecScreen';
import ReviewScreen from '../screens/ReviewScreen';
import QuizScreen from '../screens/QuizScreen';
import OutputScreen from '../screens/OutputScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* Define the screen as a modal or part of the main navigation */}
      <Stack.Screen 
        name="MovieDetailsModal" 
        component={MovieDetailsModal}
        options={{ presentation: 'modal' }} 
      />
        <Stack.Screen name="RecScreen" component={RecScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} options={{ headerShown: false }} />
        <Stack.Screen name="QuizScreen" component={QuizScreen} options={{ headerShown: false }} />
        <Stack.Screen name="OutputScreen" component={OutputScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

