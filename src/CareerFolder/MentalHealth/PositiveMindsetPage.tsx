import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const PositiveMindsetDatas = [
    {
        id: '1',
        title: 'Step 1: Recognize Negative Thoughts',
        text: 'Pay attention to negative or self-critical thoughts. Identifying them is the first step toward overcoming them.'
    },
    {
        id: '2',
        title: 'Step 2: Challenge Negative Beliefs',
        text: 'Ask yourself if the negative thought is true or helpful. Often, these thoughts are based on assumptions rather than facts.'
    },
    {
        id: '3',
        title: 'Step 3: Replace Negative Thoughts with Positive Affirmations',
        text: 'Counter negative thoughts by replacing them with positive affirmations. Focus on your strengths and achievements.'
    },
    {
        id: '4',
        title: 'Step 4: Practice Self-Compassion',
        text: 'Treat yourself with kindness when you experience setbacks. Speak to yourself as you would to a close friend.'
    },
    {
        id: '5',
        title: 'Step 5: Surround Yourself with Positivity',
        text: 'Be mindful of your environment and the people you spend time with. Surround yourself with positive influences that uplift you.'
    }
];

export const PositiveMindsetTips = [
    {
        id: '1',
        text: '• Practice reframing negative situations in a more positive light to improve your mindset.'
    },
    {
        id: '2',
        text: '• Spend time with positive and supportive people who encourage your growth.'
    },
    {
        id: '3',
        text: '• Engage in activities that make you feel good about yourself and remind you of your worth.'
    }
];



export default function PositiveMindsetPage() {
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
              {PositiveMindsetTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {PositiveMindsetDatas.map((item) => (
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