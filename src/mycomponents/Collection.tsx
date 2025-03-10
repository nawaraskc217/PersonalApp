import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ServicesPage from './ServicesPage';
import AboutUsPage from './AboutUsPage';
import HomePage from './HomePage';


const Drawer = createDrawerNavigator();

export default function Collection() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen 
        name="HomePage" 
        component={HomePage} 
        // component={SolutionsPage} 
        options={{ title: 'Home Page' }} 
      />
      <Drawer.Screen 
        name="ServicesPage" 
        component={ServicesPage} 
        options={{ title: 'Services' }} 
      />
      <Drawer.Screen 
        name="AboutUsPage" 
        component={AboutUsPage} 
        options={{ title: 'About Us' }} 
      />
    </Drawer.Navigator>
  );
}
