import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const JournalingForEmotionalClarityData = [
  {
      id: '1',
      title: 'Step 1: Set an Intention for Your Journaling',
      text: 'Before you start journaling, set an intention. Decide what you want to explore, whether it’s clarifying your emotions, reflecting on a situation, or simply processing your day.'
  },
  {
      id: '2',
      title: 'Step 2: Write Freely Without Judgment',
      text: 'Allow yourself to write freely without censoring your thoughts. Let your pen flow without worrying about grammar or structure. This free-writing process can help unlock deeper emotions.'
  },
  {
      id: '3',
      title: 'Step 3: Explore Your Emotions',
      text: 'Dive into your feelings by asking questions like, "Why do I feel this way?" or "What is triggering this emotion?" Journaling can help you make sense of complex emotions and give you clarity.'
  },
  {
      id: '4',
      title: 'Step 4: Reflect on Patterns in Your Writing',
      text: 'As you continue journaling, reflect on any recurring themes or patterns. These could provide insight into your emotional triggers and ongoing challenges.'
  },
  {
      id: '5',
      title: 'Step 5: Practice Gratitude and Positive Reflection',
      text: 'In addition to exploring your emotions, include gratitude journaling. Write about things you’re grateful for to shift your focus towards positive aspects of your life and create emotional balance.'
  }
];

export const JournalingForEmotionalClarityTips = [
  {
      id: '1',
      text: '• Try to journal at the same time each day to make it a consistent habit and help build emotional clarity.'
  },
  {
      id: '2',
      text: '• Be honest with yourself while journaling. The more authentic you are, the more clarity you’ll gain.'
  },
  {
      id: '3',
      text: '• Use prompts like "What am I feeling right now?" or "What do I need to let go of?" to guide your writing and discover deeper emotional insights.'
  }
];


export default function JournalingPage() {
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
              {JournalingForEmotionalClarityTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {JournalingForEmotionalClarityData.map((item) => (
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