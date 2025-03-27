import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const ProcrastinationDatas = [
    {
        id: '1',
        title: 'Step 1: Identify the Root Cause',
        text: 'Understand why you are procrastinating. Is it due to fear of failure, lack of motivation, or feeling overwhelmed? Identifying the cause helps you find the right solution.'
    },
    {
        id: '2',
        title: 'Step 2: Break Tasks into Smaller Steps',
        text: 'Large tasks can feel overwhelming. Break them down into smaller, manageable steps to make progress easier and less intimidating.'
    },
    {
        id: '3',
        title: 'Step 3: Set Clear Deadlines',
        text: 'Self-imposed deadlines create urgency and accountability. Use a planner or digital calendar to track deadlines and stay on schedule.'
    },
    {
        id: '4',
        title: 'Step 4: Use the Two-Minute Rule',
        text: 'If a task takes less than two minutes, do it immediately. This prevents small tasks from piling up and becoming overwhelming.'
    },
    {
        id: '5',
        title: 'Step 5: Remove Distractions',
        text: 'Identify common distractions and create a focused work environment. Turn off notifications, use website blockers, and set designated work hours.'
    },
    {
        id: '6',
        title: 'Step 6: Reward Yourself',
        text: 'Give yourself small rewards after completing tasks. This reinforces positive behavior and makes productivity more enjoyable.'
    }
];

export const ProcrastinationTips = [
    {
        id: '1',
        text: '• Start with the easiest task to gain momentum and motivation.'
    },
    {
        id: '2',
        text: '• Use the Pomodoro Technique: Work for 25 minutes, then take a 5-minute break.'
    },
    {
        id: '3',
        text: '• Hold yourself accountable by sharing your goals with a friend or mentor.'
    }
];


export default function ProcrastinationPage() {
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

            <Image source={require('./images/pro.jpg')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {ProcrastinationTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {ProcrastinationDatas.map((item) => (
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