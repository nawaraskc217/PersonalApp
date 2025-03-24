import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ServicesPage from './Pages/ServicesPage';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';



const Drawer = createDrawerNavigator();


// These are the Drawer navigation in the main page
export default function DrawerCollection() {
  return (
    <Drawer.Navigator>

      <Drawer.Screen

      //First Page
        name="HomePage"
        component={HomePage}
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
