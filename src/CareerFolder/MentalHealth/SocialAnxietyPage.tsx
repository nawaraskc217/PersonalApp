import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const SocialAnxietyDatas = [
    {
        id: '1',
        title: 'Step 1: Understand Your Social Anxiety Triggers',
        text: 'Recognize situations that make you anxious, such as public speaking or meeting new people. Understanding your triggers helps in managing anxiety.'
    },
    {
        id: '2',
        title: 'Step 2: Practice Exposure in Small Steps',
        text: 'Start by engaging in low-stress social interactions. Gradually increase the difficulty as you become more comfortable, eventually building confidence in larger settings.'
    },
    {
        id: '3',
        title: 'Step 3: Use Breathing Techniques to Stay Calm',
        text: 'When you feel anxiety rising, practice deep breathing to calm your nerves. Techniques like 4-7-8 breathing can help you regain control.'
    },
    {
        id: '4',
        title: 'Step 4: Challenge Negative Thoughts',
        text: 'Social anxiety often involves negative self-talk. Challenge these thoughts by asking if they are realistic and replace them with positive affirmations.'
    },
    {
        id: '5',
        title: 'Step 5: Build Confidence with Practice',
        text: 'Confidence grows through practice. Start small, celebrate each success, and over time, you’ll feel more comfortable in social settings.'
    }
];

export const SocialAnxietyTips = [
    {
        id: '1',
        text: '• Focus on the present moment rather than overthinking past or future interactions.'
    },
    {
        id: '2',
        text: '• Practice positive self-talk and remind yourself of your strengths in social situations.'
    },
    {
        id: '3',
        text: '• Gradually push yourself out of your comfort zone to gain confidence in social interactions.'
    }
];




export default function SocialAnxietyPage() {
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
              {SocialAnxietyTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {SocialAnxietyDatas.map((item) => (
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