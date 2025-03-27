import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const ConfidenceAndSelfEsteemData = [
  {
      id: '1',
      title: 'Step 1: Identify Your Strengths',
      text: 'Start by identifying your unique strengths, skills, and qualities. Reflect on past achievements to remind yourself of what you’re capable of.'
  },
  {
      id: '2',
      title: 'Step 2: Set Achievable Goals',
      text: 'Setting and achieving small, realistic goals can help build confidence over time. Celebrate each success, no matter how small, as it adds to your sense of self-worth.'
  },
  {
      id: '3',
      title: 'Step 3: Practice Positive Self-Talk',
      text: 'Replace negative self-talk with positive affirmations. Instead of focusing on flaws or failures, remind yourself of your strengths and potential.'
  },
  {
      id: '4',
      title: 'Step 4: Embrace Your Imperfections',
      text: 'Recognize that nobody is perfect. Embrace your flaws and view them as opportunities for growth. Confidence comes from accepting yourself as you are.'
  },
  {
      id: '5',
      title: 'Step 5: Surround Yourself with Supportive People',
      text: 'Surround yourself with individuals who lift you up and encourage you. Positive relationships help boost your confidence and reinforce your sense of self-worth.'
  }
];

export const ConfidenceAndSelfEsteemTips = [
  {
      id: '1',
      text: '• Practice daily affirmations to build a positive mindset and reinforce self-belief.'
  },
  {
      id: '2',
      text: '• Take care of your physical well-being through exercise and healthy habits to feel better about yourself.'
  },
  {
      id: '3',
      text: '• Step out of your comfort zone regularly to challenge yourself and gain confidence from new experiences.'
  }
];


export default function ConfidencePage() {
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
              {ConfidenceAndSelfEsteemTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {ConfidenceAndSelfEsteemData.map((item) => (
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