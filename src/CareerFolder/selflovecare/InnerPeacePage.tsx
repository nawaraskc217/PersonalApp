import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const NurturingYourInnerPeaceData = [
  {
      id: '1',
      title: 'Step 1: Create a Peaceful Environment',
      text: 'Begin by decluttering your space and surrounding yourself with calming elements such as soft lighting, plants, and soothing music. A peaceful environment can help create a sense of calm and tranquility.'
  },
  {
      id: '2',
      title: 'Step 2: Practice Mindfulness and Meditation',
      text: 'Engage in mindfulness practices or meditation to center your mind and quiet the noise. Regular meditation helps cultivate inner peace and reduce stress.'
  },
  {
      id: '3',
      title: 'Step 3: Focus on Breathing Techniques',
      text: 'Deep breathing exercises can help you stay grounded and calm. Practice techniques like diaphragmatic breathing to activate your parasympathetic nervous system and reduce tension.'
  },
  {
      id: '4',
      title: 'Step 4: Let Go of Negative Emotions',
      text: 'Learn to release negative emotions such as anger, frustration, or resentment. Acknowledge them, but don’t let them control you. This will help maintain inner peace and emotional balance.'
  },
  {
      id: '5',
      title: 'Step 5: Prioritize Self-Care',
      text: 'Take time for self-care practices like relaxing baths, reading, or enjoying hobbies. Engaging in activities that nurture your well-being supports your inner peace and overall happiness.'
  }
];

export const NurturingYourInnerPeaceTips = [
  {
      id: '1',
      text: '• Set aside time each day for self-reflection or quiet time to recharge your inner peace.'
  },
  {
      id: '2',
      text: '• Practice gratitude to help focus on the positive aspects of your life and cultivate a peaceful mindset.'
  },
  {
      id: '3',
      text: '• Incorporate calming activities, such as journaling or painting, to release stress and promote tranquility.'
  }
];


export default function InnerPeacePage() {
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
              {NurturingYourInnerPeaceTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {NurturingYourInnerPeaceData.map((item) => (
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