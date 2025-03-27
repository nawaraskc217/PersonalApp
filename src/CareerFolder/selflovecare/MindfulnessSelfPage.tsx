import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const MindfulnessForSelfAwarenessData = [
  { 
      id: '1', 
      title: 'Step 1: Focus on the Present Moment', 
      text: 'Start by focusing on the present moment. Pay attention to your breath, physical sensations, and the environment around you. Bring your awareness to the "here and now" without judgment.' 
  },
  { 
      id: '2', 
      title: 'Step 2: Practice Non-Judgmental Awareness', 
      text: 'When practicing mindfulness, avoid labeling your thoughts and emotions as good or bad. Simply observe them as they come and go, fostering a sense of acceptance.' 
  },
  { 
      id: '3', 
      title: 'Step 3: Use Mindful Breathing Techniques', 
      text: 'Mindful breathing can help center your attention. Focus on your inhales and exhales, observing the sensation of each breath. This can calm your mind and increase self-awareness.' 
  },
  { 
      id: '4', 
      title: 'Step 4: Develop Body Awareness', 
      text: 'Pay attention to how your body feels in the present moment. Perform a body scan, noticing any areas of tension or discomfort, and focus on releasing them to cultivate mindfulness.' 
  },
  { 
      id: '5', 
      title: 'Step 5: Practice Mindfulness Regularly', 
      text: 'Make mindfulness a part of your daily routine. Even short mindfulness exercises throughout the day can increase your overall self-awareness and help you connect more deeply with your thoughts and emotions.' 
  }
];

export const MindfulnessForSelfAwarenessTips = [
  { 
      id: '1', 
      text: '• Start with just a few minutes of mindfulness practice each day and gradually increase the duration as you feel more comfortable.' 
  },
  { 
      id: '2', 
      text: '• Try using mindfulness apps or guided meditations to help you stay focused and deepen your practice.' 
  },
  { 
      id: '3', 
      text: '• Mindfulness is about being present, not perfect. Be gentle with yourself when your mind wanders and gently bring your focus back to the present.' 
  }
];


export default function MindfulnessSelfPage() {
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
            <Image source={require('./resume.jpg')} style={styles.profileImage} />
            <Text style={styles.title}>How to Build the Resume?</Text>
            <Text style={styles.authors}>Ref. Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {MindfulnessForSelfAwarenessTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {MindfulnessForSelfAwarenessData.map((item) => (
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