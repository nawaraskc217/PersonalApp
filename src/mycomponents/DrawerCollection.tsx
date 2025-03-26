import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ServicesPage from './Pages/ServicesPage';
import HomePage from './Pages/HomePage';
import AboutUsPage from './Pages/AboutUsPage';
import BlogsPage from './Pages/BlogsPage';



const Drawer = createDrawerNavigator();


// These are the Drawer navigation in the main page
export default function DrawerCollection() {
  return (
    <Drawer.Navigator screenOptions={{
      activeTintColor: 'pink',  // Text color when active
      inactiveTintColor: 'green',  // Text color when inactive
      activeBackgroundColor: 'green',  // Background color when active
    }}>

      {/* <Drawer.Screen

      //First Page
        name="HomePage"
        component={HomePage}
        options={{ title: 'Home' }}
      /> */}

      <Drawer.Screen
        name="HomePage"
        component={HomePage}
        options={{
          title: 'Home',
        }}
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


      <Drawer.Screen
        name="Blogs"
        component={BlogsPage}
        options={{ title: 'Blogs/Articles' }}
      />
    </Drawer.Navigator>
  );
}
