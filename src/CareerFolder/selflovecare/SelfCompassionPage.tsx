import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
export const SelfCompassionData = [
    {
        id: '1',
        title: 'Step 1: Acknowledge Your Emotions',
        text: 'Start by acknowledging your emotions without judgment. Recognize when you are experiencing pain or difficulty, and accept it as part of being human.'
    },
    {
        id: '2',
        title: 'Step 2: Practice Kindness Towards Yourself',
        text: 'Treat yourself with the same kindness and understanding that you would offer a close friend. Be gentle with yourself when facing challenges or mistakes.'
    },
    {
        id: '3',
        title: 'Step 3: Avoid Self-Criticism',
        text: 'Replace harsh self-criticism with more compassionate thoughts. Focus on learning from situations rather than blaming yourself.'
    },
    {
        id: '4',
        title: 'Step 4: Embrace Imperfection',
        text: 'Understand that nobody is perfect. Embrace your imperfections and allow yourself to grow from them rather than feeling shame or inadequacy.'
    },
    {
        id: '5',
        title: 'Step 5: Engage in Self-Care Practices',
        text: 'Prioritize your well-being by engaging in activities that nourish your body, mind, and soul, such as relaxation, mindfulness, and creative expression.'
    }
];

export const SelfCompassionTips = [
    {
        id: '1',
        text: '• Practice speaking kindly to yourself, especially when facing challenges or mistakes.'
    },
    {
        id: '2',
        text: '• Write a letter to yourself as if you were comforting a friend, offering words of encouragement and understanding.'
    },
    {
        id: '3',
        text: '• Create a self-compassion ritual, such as meditation, deep breathing, or positive affirmations, to reinforce self-kindness.'
    }
];



export default function SelfCompassionPage() {
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
              {SelfCompassionTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {SelfCompassionData.map((item) => (
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