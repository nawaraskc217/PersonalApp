import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const RoutineDatas = [
    {
        id: '1',
        title: 'Step 1: Establish a Morning Routine',
        text: 'Start your day with intention. Incorporate activities like exercise, meditation, journaling, or reading to set a positive tone for the day.'
    },
    {
        id: '2',
        title: 'Step 2: Prioritize Tasks with a To-Do List',
        text: 'Write down your daily tasks and rank them based on importance. Use methods like the Eisenhower Matrix or the 80/20 rule to focus on high-impact tasks.'
    },
    {
        id: '3',
        title: 'Step 3: Set Fixed Work Blocks',
        text: 'Allocate specific time slots for focused work. Use techniques like time-blocking or the Pomodoro Technique to stay on track and maintain productivity.'
    },
    {
        id: '4',
        title: 'Step 4: Incorporate Breaks and Movement',
        text: 'Taking short breaks between tasks helps improve focus and prevents burnout. Try a 5-minute stretch, a quick walk, or deep breathing exercises.'
    },
    {
        id: '5',
        title: 'Step 5: Reflect and Adjust Your Routine',
        text: 'At the end of the day, review what worked well and what didn’t. Make small improvements to optimize your productivity over time.'
    }
];

export const RoutineTips = [
    {
        id: '1',
        text: '• Avoid checking your phone first thing in the morning to start your day with focus.'
    },
    {
        id: '2',
        text: '• Set a fixed bedtime and wake-up time to regulate your body clock and improve sleep quality.'
    },
    {
        id: '3',
        text: '• End your day with a simple review—note achievements and plan for the next day.'
    }
];


export default function RoutinePage() {
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

             <Image source={require('./images/routin.jpg')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {RoutineTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {RoutineDatas.map((item) => (
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