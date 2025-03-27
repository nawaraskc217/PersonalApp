import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const ResilienceDatas = [
    {
        id: '1',
        title: 'Step 1: Embrace Challenges as Opportunities',
        text: 'Resilience is about viewing challenges as opportunities for growth. When faced with adversity, see it as a chance to learn and become stronger.'
    },
    {
        id: '2',
        title: 'Step 2: Build a Strong Support System',
        text: 'Having a reliable network of friends, family, or colleagues is essential for emotional resilience. Surround yourself with positive and supportive people.'
    },
    {
        id: '3',
        title: 'Step 3: Practice Self-Compassion',
        text: 'Be kind to yourself during tough times. Instead of criticizing yourself, acknowledge your feelings and treat yourself with care.'
    },
    {
        id: '4',
        title: 'Step 4: Focus on What You Can Control',
        text: 'Resilience involves accepting what is outside your control and focusing on the things you can influence. This mindset helps reduce stress and build emotional strength.'
    },
    {
        id: '5',
        title: 'Step 5: Develop Healthy Coping Mechanisms',
        text: 'Use techniques like mindfulness, meditation, exercise, or journaling to manage your emotions and navigate difficult situations more effectively.'
    }
];

export const ResilienceTips = [
    {
        id: '1',
        text: '• Learn from setbacks by reflecting on what went well and what can be improved next time.'
    },
    {
        id: '2',
        text: '• Stay optimistic and remind yourself that challenging times are temporary and will pass.'
    },
    {
        id: '3',
        text: '• Develop problem-solving skills to manage stress and improve your ability to bounce back from challenges.'
    }
];



export default function ResiliencePage() {
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
              {ResilienceTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {ResilienceDatas.map((item) => (
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