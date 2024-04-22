import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import MovieDetailsModal from '../screens/MovieDetailsModal';
import RecScreen from '../screens/RecScreen';
import ReviewScreen from '../screens/ReviewScreen';
import QuizScreen from '../screens/QuizScreen';
import RoutScreen from '../screens/RoutScreen';

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
        <Stack.Screen name="RoutScreen" component={RoutScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

