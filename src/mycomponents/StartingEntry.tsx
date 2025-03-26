import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerCollection from './DrawerCollection';

import CareerPage from '../CareerFolder/Career/CareerPage';
import ResumePage from "../CareerFolder/Career/ResumePage"

import TimeManagementPage from '../CareerFolder/Productivity/TimeManagementPage';



import FinanceCollection from './Categories/FinanceCollection';
import CareerPageCollection from './Categories/CareerPageCollection';
import ProductivityCollection from './Categories/ProductivityCollection';
import MentalHealthCollection from './Categories/MentalHealthCollection';
import MusicCollection from './Categories/MusicCollection';
import InterviewPage from '../CareerFolder/Career/InterviewPage';
import JobSearchPage from '../CareerFolder/Career/JobSearchPage';
import ProcrastinationPage from '../CareerFolder/Productivity/ProcrastinationPage';
import GoalSettingPage from '../CareerFolder/Productivity/GoalSettingPage';
import RoutinePage from '../CareerFolder/Productivity/RoutinePage';

import WorkLifeBalancePage from '../CareerFolder/Productivity/WorkLifeBalancePage';

import InvestingPage from '../CareerFolder/Finance/InvestingPage';
import CreditScorePage from '../CareerFolder/Finance/CreditScorePage';
import FinancialIndependencePage from '../CareerFolder/Finance/FinancialIndependencePage';
import DebtManagementPage from '../CareerFolder/Finance/DebtManagementPage';
import FocusPage from '../CareerFolder/Productivity/FocusPage';
import BudgetingPage from '../CareerFolder/Finance/BudgetingPage';





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
      <Stack.Screen name="TimeManagementPage" component={TimeManagementPage} />
      <Stack.Screen name="ProcrastinationPage" component={ProcrastinationPage} />
      <Stack.Screen name="GoalSettingPage" component={GoalSettingPage} />
      <Stack.Screen name="RoutinePage" component={RoutinePage} />
      <Stack.Screen name="FocusPage" component={FocusPage} />
      <Stack.Screen name="WorkLifeBalancePage" component={WorkLifeBalancePage} />


      {/* This is for Finance */}
      <Stack.Screen name="BudgetingPage" component={BudgetingPage} />
      <Stack.Screen name="InvestingPage" component={InvestingPage} />
      <Stack.Screen name="DebtManagementPage" component={DebtManagementPage} />
      <Stack.Screen name="CreditScorePage" component={CreditScorePage} />
      <Stack.Screen name="FinancialIndependencePage" component={FinancialIndependencePage} />
 



    </Stack.Navigator >
  );
}
