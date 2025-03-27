import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

// import image1 from '../Career//' 
export const ProductivityDatas = [
    {
        id: '1',
        title: 'Step 1: Prioritize Your Tasks',
        text: 'Start by listing all your tasks and categorizing them based on urgency and importance. Use methods like the Eisenhower Matrix to determine which tasks need immediate attention and which can be scheduled for later.'
    },
    {
        id: '2',
        title: 'Step 2: Set Clear Goals',
        text: 'Define specific, measurable, and achievable goals for your day, week, and month. Having a clear target will help you stay focused and avoid distractions.'
    },
    {
        id: '3',
        title: 'Step 3: Develop a Routine',
        text: 'Create a structured daily routine that maximizes your most productive hours. Plan your high-focus tasks for when you have the most energy and schedule breaks to prevent burnout.'
    },
    {
        id: '4',
        title: 'Step 4: Minimize Distractions',
        text: 'Identify common distractions in your environment and find ways to eliminate them. Use tools like website blockers, noise-canceling headphones, or a dedicated workspace to stay focused.'
    },
    {
        id: '5',
        title: 'Step 5: Reflect and Improve',
        text: 'At the end of the day or week, review your progress. Identify what worked well and what needs improvement. Adjust your strategy to improve your efficiency over time.'
    }
];

export const ProductivityTips = [
    {
        id: '1',
        text: '• Use the Pomodoro Technique: Work for 25 minutes, then take a 5-minute break to maintain focus.'
    },
    {
        id: '2',
        text: '• Limit multitasking: Focus on one task at a time to improve efficiency and reduce mistakes.'
    },
    {
        id: '3',
        text: '• Set a "No Distraction" period each day to focus on your most important tasks without interruptions.'
    }
];


export default function TimeManagementPage() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} // Fixes bottom gap
        >
          {/* About Me Section */}
          <View style={styles.aboutContainer}>

            <Image source={require('./images/time.jpg')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {ProductivityTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {ProductivityDatas.map((item) => (
            <View key={item.id} style={styles.stepContainer}>
                         <Text style={styles.stepTitle}>{item.title}</Text>
                         <Text style={styles.stepText}>{item.text}</Text>
                       </View>
                     ))}
                   </ScrollView>
                 </View>
               </SafeAreaView>
             );
           }
           
           
           const styles = StyleSheet.create({
             safeContainer: {
               flex: 1,
               backgroundColor: '#f7f7f7', // Light gray background
             },
             container: {
               flex: 1,
               paddingHorizontal: 20,
               paddingVertical: 30,
               backgroundColor: '#ffffff',
             },
             aboutContainer: {
               marginBottom: 30,
               alignItems: 'center',
               backgroundColor: '#ffffff', // White background for the section
               paddingVertical: 20,
               borderRadius: 15,
               elevation: 5, // Shadow for elevation effect
               shadowColor: '#000', 
               shadowOpacity: 0.1,
               shadowOffset: { width: 0, height: 5 },
               shadowRadius: 10,
             },
             profileImage: {
               width: '100%',
               height: 250,
               borderRadius: 15,
               marginBottom: 20,
               resizeMode: 'cover',
               borderWidth: 2,
               borderColor: '#dcdcdc', // Soft border around image
             },
             title: {
               fontSize: 22,
               fontWeight: 'bold',
               color: '#333333', // Dark text color
               marginBottom: 10,
               textAlign: 'center',
             },
             authors: {
               fontSize: 16,
               color: '#777777', // Lighter gray text color
               marginBottom: 12,
               textAlign: 'center',
             },
             sectionTitle: {
               fontSize: 18,
               fontWeight: 'bold',
               marginBottom: 10,
               color: '#b86314', // Use a warm color for emphasis
             },
             bulletContainer: {
               alignSelf: 'flex-start',
               marginBottom: 20,
               backgroundColor: '#ffe5b4', // Light golden background
               padding: 12,
               borderRadius: 8,
               width: '100%',
             },
             bulletPoint: {
               fontSize: 16,
               color: '#555555', // Darker gray text
               marginBottom: 6,
               fontWeight: '600',
             },
             stepContainer: {
               marginBottom: 24,
               paddingHorizontal: 20,
               paddingVertical: 16,
               backgroundColor: '#ffffff',
               borderRadius: 12,
               elevation: 3, // Subtle shadow for card effect
               shadowColor: '#000',
               shadowOpacity: 0.1,
               shadowOffset: { width: 0, height: 4 },
               shadowRadius: 8,
             },
             stepTitle: {
               fontSize: 18,
               fontWeight: 'bold',
               color: '#333333',
               marginBottom: 8,
             },
             stepText: {
               fontSize: 16,
               textAlign: 'justify',
               color: '#666666',
               lineHeight: 24,
             },
           });