import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Collection from './Collection';

const Stack = createNativeStackNavigator();

export default function StartingEntry() {
  return (
    <Stack.Navigator initialRouteName="Collection">
      <Stack.Screen 
        name="Collection" 
        component={Collection} 
        options={{ headerShown: true }} 
      />
    </Stack.Navigator>
  );
}
