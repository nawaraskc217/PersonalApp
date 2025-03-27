import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const AffirmationsAndGratitudeData = [
    {
        id: '1',
        title: 'Step 1: Understand the Power of Positive Affirmations',
        text: 'Positive affirmations are statements that help reframe negative thoughts. Recognize the power of words and how they can shape your mindset and reality.'
    },
    {
        id: '2',
        title: 'Step 2: Practice Daily Affirmations',
        text: 'Set aside a few minutes each day to repeat positive affirmations. Start with simple affirmations like "I am worthy" or "I am capable," and gradually personalize them.'
    },
    {
        id: '3',
        title: 'Step 3: Cultivate Gratitude in Daily Life',
        text: 'Take time each day to reflect on the things you are grateful for. Whether big or small, acknowledging gratitude can shift your focus to the positive aspects of life.'
    },
    {
        id: '4',
        title: 'Step 4: Write a Gratitude Journal',
        text: 'Create a habit of journaling the things you are grateful for. This practice can help boost your mood and increase overall happiness by reminding you of the good things in life.'
    },
    {
        id: '5',
        title: 'Step 5: Combine Affirmations and Gratitude',
        text: 'Incorporate both affirmations and gratitude into your daily routine. For example, say an affirmation followed by something you are thankful for, reinforcing a positive mindset.'
    }
];

export const AffirmationsAndGratitudeTips = [
    {
        id: '1',
        text: '• Start your day with affirmations to set a positive tone for the day ahead.'
    },
    {
        id: '2',
        text: '• Focus on gratitude even during difficult moments to shift your perspective and find peace.'
    },
    {
        id: '3',
        text: '• Use affirmations to challenge limiting beliefs and build confidence in yourself.'
    }
];


export default function AffirmationsPage() {
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
              {AffirmationsAndGratitudeTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {AffirmationsAndGratitudeData.map((item) => (
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