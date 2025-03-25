import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerCollection from './DrawerCollection';

import CareerPage from '../CareerFolder/Career/CareerPage';
import ResumePage from "../CareerFolder/Career/ResumePage"
import ProductivityPage from '../CareerFolder/Productivity/ProductivityPage';
import FinancePage1 from '../CareerFolder/Finance/FinancePage1';



import FinanceCollection from './Categories/FinanceCollection';
import CareerPageCollection from './Categories/CareerPageCollection';
import ProductivityCollection from './Categories/ProductivityCollection';
import MentalHealthCollection from './Categories/MentalHealthCollection';
import MusicCollection from './Categories/MusicCollection';
import InterviewPage from '../CareerFolder/Career/InterviewPage';
import JobSearchPage from '../CareerFolder/Career/JobSearchPage';



const Stack = createNativeStackNavigator();

export default function StartingEntry() {
  return (
    <Stack.Navigator initialRouteName="DrawerCollection">

      {/* This DrawerCollection is is Drawer navigation and it consist of Home, aboutus,service Page */}
      <Stack.Screen
        name="DrawerCollection"
        component={DrawerCollection}
        options={{ headerShown: false }} />


      {/* //Categories of Solutions */}
      <Stack.Screen name="CareerPageCollection" component={CareerPageCollection} />
      <Stack.Screen name="ProductivityCollection" component={ProductivityCollection} />
      <Stack.Screen name="FinanceCollection" component={FinanceCollection} />
      <Stack.Screen name="MentalHealthCollection" component={MentalHealthCollection} />
      <Stack.Screen name="MusicCollection" component={MusicCollection} />



      {/* StartingEntry-> DrawerCollection-> HomePage OR ->ServicesPage->  CareerPageCollection->CareerPage */}


      {/* This is for Career */}
      <Stack.Screen name="CareerPage" component={CareerPage} options={{ title: "Career Opportunities" }} />
      <Stack.Screen name="ResumePage" component={ResumePage}
        options={{ title: "Build Your Resume" }}
      />
      <Stack.Screen name="InterviewPage" component={InterviewPage}
        options={{ title: "Interview Preparation" }}
      />
      <Stack.Screen name="JobSearchPage" component={JobSearchPage}
        options={{ title: "Find Your Dream Job" }}
      />


      {/* This is for Productivity */}
      <Stack.Screen name="ProductivityPage" component={ProductivityPage} />


      {/* This is for Finance */}
      <Stack.Screen name="FinancePage1" component={FinancePage1} />



    </Stack.Navigator >
  );
}
