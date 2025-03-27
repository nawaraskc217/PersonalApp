import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const WorkplaceMentalHealthDatas = [
    {
        id: '1',
        title: 'Step 1: Set Clear Boundaries Between Work and Personal Life',
        text: 'Create boundaries to separate your work life from personal time. Establish clear "work hours" and avoid working outside of these times to prevent burnout.'
    },
    {
        id: '2',
        title: 'Step 2: Communicate Your Needs Effectively',
        text: 'If you’re feeling overwhelmed or stressed, communicate your needs to your supervisor or HR. Expressing concerns early can help manage workplace stress.'
    },
    {
        id: '3',
        title: 'Step 3: Take Regular Breaks',
        text: 'Breaks are crucial for maintaining mental health at work. Take short breaks throughout the day to refresh your mind and avoid burnout.'
    },
    {
        id: '4',
        title: 'Step 4: Seek Support from Colleagues and Managers',
        text: 'A supportive work environment can significantly reduce stress. Reach out to colleagues or managers when you need assistance or emotional support.'
    },
    {
        id: '5',
        title: 'Step 5: Practice Stress-Relieving Techniques',
        text: 'Incorporate mindfulness, deep breathing, or short walks into your daily routine at work to relieve stress and maintain focus.'
    }
];

export const WorkplaceMentalHealthTips = [
    {
        id: '1',
        text: '• Practice time management skills to avoid feeling overwhelmed by tasks.'
    },
    {
        id: '2',
        text: '• Cultivate a healthy work culture by supporting coworkers and encouraging open communication.'
    },
    {
        id: '3',
        text: '• Take time off when needed to recharge and prevent burnout.'
    }
];


export default function WorkplaceMentalHealthPage() {
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
              {WorkplaceMentalHealthTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {WorkplaceMentalHealthDatas.map((item) => (
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