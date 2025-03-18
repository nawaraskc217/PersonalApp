import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Collection from './Collection';

import Productivity from './Productivity';
import CareerPage from './CareerPage';
import CareerDetails from '../Career/CareerDetails';
import ResumeDetails from '../Career/ResumeDetails';


const Stack = createNativeStackNavigator();

export default function StartingEntry() {
  return (
    <Stack.Navigator initialRouteName="Collection">
      <Stack.Screen
        name="Collection"
        component={Collection}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="CareerPage" component={CareerPage} />
      <Stack.Screen name="Productivity" component={Productivity} />

      <Stack.Screen name="CareerDetails" component={CareerDetails} />
      <Stack.Screen name="ResumeDetails" component={ResumeDetails} />

    </Stack.Navigator >
  );
}
