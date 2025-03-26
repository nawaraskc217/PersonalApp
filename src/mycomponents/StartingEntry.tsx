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
import StressManagementPage from '../CareerFolder/MentalHealth/StressManagementPage';
import HealthyHabitsPage from '../CareerFolder/MentalHealth/HealthyHabitsPage';
import MentalHealthDietPage from '../CareerFolder/MentalHealth/MentalHealthDietPage';
import WorkplaceMentalHealthPage from '../CareerFolder/MentalHealth/WorkplaceMentalHealthPage';
import SocialAnxietyPage from '../CareerFolder/MentalHealth/SocialAnxietyPage';
import ResiliencePage from '../CareerFolder/MentalHealth/ResiliencePage';
import SleepPage from '../CareerFolder/MentalHealth/SleepPage';
import TherapyPage from '../CareerFolder/MentalHealth/TherapyPage';
import PositiveMindsetPage from '../CareerFolder/MentalHealth/PositiveMindsetPage';
import MindfulnessPage from '../CareerFolder/MentalHealth/MindfulnessPage';
import InstrumentPage from '../CareerFolder/Music/InstrumentPage';
import MusicTheoryPage from '../CareerFolder/Music/MusicTheoryPage';
import SongwritingPage from '../CareerFolder/Music/SongwritingPage';
import MusicProductionPage from '../CareerFolder/Music/MusicProductionPage';
import MusicGenresPage from '../CareerFolder/Music/MusicGenresPage';
import SelfLoveCareCollection from './Categories/SelfLoveCareCollection';
import SelfCompassionPage from '../CareerFolder/selflovecare/SelfCompassionPage';
import HealthyBoundariesPage from '../CareerFolder/selflovecare/HealthyBoundariesPage';
import ConfidencePage from '../CareerFolder/selflovecare/ConfidencePage';
import JournalingPage from '../CareerFolder/selflovecare/JournalingPage';
import InnerPeacePage from '../CareerFolder/selflovecare/InnerPeacePage';
import AffirmationsPage from '../CareerFolder/selflovecare/AffirmationsPage';
import SelfCareTimePage from '../CareerFolder/selflovecare/SelfCareTimePage';
import SelfCareRoutinePage from '../CareerFolder/selflovecare/SelfCareRoutinePage';
import HealingPage from '../CareerFolder/selflovecare/HealingPage';
import MindfulnessSelfPage from '../CareerFolder/selflovecare/MindfulnessSelfPage';



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
      <Stack.Screen name="SelfLoveCareCollection" component={SelfLoveCareCollection} />


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
      <Stack.Screen name="TimeManagementPage" component={TimeManagementPage}
        options={{ title: 'Time Management' }}
      />
      <Stack.Screen name="ProcrastinationPage" component={ProcrastinationPage}
        options={{ title: 'Overcoming Procrastination' }}
      />
      <Stack.Screen name="GoalSettingPage" component={GoalSettingPage}
        options={{ title: 'Setting Goals' }}
      />
      <Stack.Screen name="RoutinePage" component={RoutinePage}
        options={{ title: 'Building a Routine' }}
      />
      <Stack.Screen name="FocusPage" component={FocusPage}
        options={{ title: 'Staying Focused' }}
      />
      <Stack.Screen name="WorkLifeBalancePage" component={WorkLifeBalancePage}
        options={{ title: 'Work-Life Balance' }}
      />


      {/* This is for Finance */}
      <Stack.Screen name="BudgetingPage" component={BudgetingPage} options={{ title: 'Budgeting' }} />
      <Stack.Screen name="InvestingPage" component={InvestingPage} options={{ title: 'Investing' }} />
      <Stack.Screen name="DebtManagementPage" component={DebtManagementPage} options={{ title: 'Debt Management' }} />
      <Stack.Screen name="CreditScorePage" component={CreditScorePage} options={{ title: 'Credit Score' }} />
      <Stack.Screen name="FinancialIndependencePage" component={FinancialIndependencePage} options={{ title: 'Financial Independence' }} />

      {/* For mental health */}
      <Stack.Screen name="StressManagementPage" component={StressManagementPage} options={{ title: 'Stress Management' }}
      />
      <Stack.Screen name="HealthyHabitsPage" component={HealthyHabitsPage} options={{ title: 'Healthy Habits' }}
      />
      <Stack.Screen name="MindfulnessPage" component={MindfulnessPage} options={{ title: 'Mindfulness' }}
      />
      <Stack.Screen name="PositiveMindsetPage" component={PositiveMindsetPage} options={{ title: 'Positive Mindset' }}
      />
      <Stack.Screen name="TherapyPage" component={TherapyPage} options={{ title: 'Therapy' }}
      />
      <Stack.Screen name="SleepPage" component={SleepPage} options={{ title: 'Sleep' }}
      />
      <Stack.Screen name="ResiliencePage" component={ResiliencePage} options={{ title: 'Resilience' }}
      />
      <Stack.Screen name="SocialAnxietyPage" component={SocialAnxietyPage} options={{ title: 'Social Anxiety' }}
      />
      <Stack.Screen name="WorkplaceMentalHealthPage" component={WorkplaceMentalHealthPage} options={{ title: 'Workplace Mental Health' }}
      />
      <Stack.Screen name="MentalHealthDietPage" component={MentalHealthDietPage} options={{ title: 'Mental Health Diet' }}
      />

      {/* for music */}
      <Stack.Screen name="InstrumentPage" component={InstrumentPage} options={{ title: 'Instruments' }}
      />
      <Stack.Screen name="MusicTheoryPage" component={MusicTheoryPage} options={{ title: 'Music Theory' }}
      />
      <Stack.Screen name="SongwritingPage" component={SongwritingPage} options={{ title: 'Songwriting' }}
      />
      <Stack.Screen name="MusicProductionPage" component={MusicProductionPage} options={{ title: 'Music Production' }}
      />
      <Stack.Screen name="MusicGenresPage" component={MusicGenresPage} options={{ title: 'Music Genres' }}
      />


      {/* For self-love/care */}
      <Stack.Screen name="SelfCompassionPage" component={SelfCompassionPage} options={{ title: 'Practicing Self-Compassion' }}
      />
      <Stack.Screen name="HealthyBoundariesPage" component={HealthyBoundariesPage} options={{ title: 'Creating Healthy Boundaries' }}
      />
      <Stack.Screen name="MindfulnessSelfPage" component={MindfulnessSelfPage} options={{ title: 'Mindfulness for Self-Awareness' }}
      />
      <Stack.Screen name="ConfidencePage" component={ConfidencePage} options={{ title: 'Building Confidence & Self-Esteem' }}
      />
      <Stack.Screen name="JournalingPage" component={JournalingPage} options={{ title: 'Journaling for Emotional Clarity' }}
      />
      <Stack.Screen name="InnerPeacePage" component={InnerPeacePage} options={{ title: 'Nurturing Your Inner Peace' }}
      />
      <Stack.Screen name="AffirmationsPage" component={AffirmationsPage} options={{ title: 'Positive Affirmations & Gratitude' }}
      />
      <Stack.Screen name="SelfCareTimePage" component={SelfCareTimePage} options={{ title: 'Taking Time for Yourself' }}
      />
      <Stack.Screen name="SelfCareRoutinePage" component={SelfCareRoutinePage} options={{ title: 'Self-Care Routines for Well-being' }}
      />
      <Stack.Screen name="HealingPage" component={HealingPage} options={{ title: 'Healing from Negative Self-Talk' }}
      />


    </Stack.Navigator >
  );
}
