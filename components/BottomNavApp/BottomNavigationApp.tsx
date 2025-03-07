import { StyleSheet, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../components/BottomNavApp/HomeScreen';
import AboutScreen from '../components/BottomNavApp/AboutScreen';
import CourseList from '../components/BottomNavApp/CourseList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import  { AboutStack } from '../components/NavigationApp/NavigationApp';

const Tab = createBottomTabNavigator();

export default function BottomNavigationApp() {
  return (
    <Tab.Navigator
                screenOptions={{
                    tabBarLabelPosition: 'below-icon',
                    tabBarShowLabel: true,
                    tabBarActiveBackgroundColor: 'grey',
                    tabBarActiveTintColor: 'purple',
                    tabBarInactiveTintColor: 'yellow',
                    tabBarInactiveBackgroundColor: 'green',
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => {
                            return <Ionicons name="home" size={20} />; // Fixed the missing closing parenthesis
                        },

                    }}
                />

                {/* ///npm install react-native-vector-icons */}
                        {/* Here is connected bottomnavigation with stack projectReact\components\NavigationApp\AboutUs */}
                <Tab.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                        tabBarLabel: 'About Us',
                        tabBarIcon: () => {
                            return <Ionicons name="book" size={20} />; // Fixed the missing closing parenthesis
                        },
                        tabBarBadge: 3
                    }}


                />
                <Tab.Screen
                    name="Courses"
                    component={CourseList}
                    options={{
                        tabBarLabel: 'Courses',

                    }}
                />


                <Tab.Screen
                    name="AboutStack"
                    component={AboutStack}
                    options={{
                        tabBarLabel: 'AboutStack',
                        headerShown: false

                    }}
                />
            </Tab.Navigator>
  )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
    },
    highlight: {
        fontWeight: '700',
    },
});
