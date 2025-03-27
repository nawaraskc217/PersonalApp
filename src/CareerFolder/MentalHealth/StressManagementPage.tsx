import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const StressManagementDatas = [
    {
        id: '1',
        title: 'Step 1: Identify the Sources of Stress',
        text: 'Start by recognizing what causes your stress and anxiety. Keep a journal or use apps to track your triggers and how they affect you.'
    },
    {
        id: '2',
        title: 'Step 2: Practice Deep Breathing Exercises',
        text: 'When you feel anxious, focus on deep, slow breaths. Try techniques like the 4-7-8 method to calm your nervous system.'
    },
    {
        id: '3',
        title: 'Step 3: Regular Exercise and Physical Activity',
        text: 'Exercise is a natural stress reliever. Engage in activities like walking, running, or yoga to release endorphins and reduce stress.'
    },
    {
        id: '4',
        title: 'Step 4: Time Management and Prioritization',
        text: 'Create a schedule and break tasks into smaller, manageable steps. Prioritize what matters most to reduce overwhelm.'
    },
    {
        id: '5',
        title: 'Step 5: Seek Support from Loved Ones or Professionals',
        text: 'Talk to friends, family, or a counselor when you feel overwhelmed. Social support is key to coping with stress effectively.'
    }
];

export const StressManagementTips = [
    {
        id: '1',
        text: '• Practice mindfulness and take breaks throughout the day to recharge.'
    },
    {
        id: '2',
        text: '• Engage in hobbies or creative activities to distract your mind from stress.'
    },
    {
        id: '3',
        text: '• Consider journaling your thoughts and feelings to release emotional tension.'
    }
];



export default function StressManagementPage() {
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

            <Image source={require('./career.png')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {StressManagementTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {StressManagementDatas.map((item) => (
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