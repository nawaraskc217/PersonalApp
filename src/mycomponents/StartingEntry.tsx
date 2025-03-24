import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Collection from './DrawerCollection';

import CareerPageCollection from './CareerPageCollection';
import CareerPage from '../CareerFolder/Career/CareerPage';
import ResumePage from "../CareerFolder/Career/ResumePage"
import ProductivityPage from '../CareerFolder/Productivity/ProductivityPage';
import DrawerCollection from './DrawerCollection';



const Stack = createNativeStackNavigator();

export default function StartingEntry() {
  return (
    <Stack.Navigator initialRouteName="DrawerCollection">

      {/* This DrawerCollection is is Drawer navigation and it consist of Home, aboutus,service Page */}
      <Stack.Screen
        name="DrawerCollection"
        component={DrawerCollection}
        options={{ headerShown: false }} />


      <Stack.Screen name="CareerPageCollection" component={CareerPageCollection} />


      {/* StartingEntry-> DrawerCollection-> HomePage OR ->ServicesPage->  CareerPageCollection->CareerPage */}
      <Stack.Screen name="CareerPage" component={CareerPage} />


      <Stack.Screen name="ResumePage" component={ResumePage} />
      <Stack.Screen name="ProductivityPage" component={ProductivityPage} />

    </Stack.Navigator >
  );
}
