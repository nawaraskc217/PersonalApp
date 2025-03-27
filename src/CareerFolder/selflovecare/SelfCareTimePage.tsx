import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const SelfCareTimeData = [
  { 
      id: '1', 
      title: 'Step 1: Recognize the Importance of Alone Time', 
      text: 'Understand that taking time for yourself is vital for your mental and emotional well-being. It allows you to recharge, reflect, and gain perspective, which can help reduce stress and improve overall health.' 
  },
  { 
      id: '2', 
      title: 'Step 2: Schedule Regular Self-Care Time', 
      text: 'Make self-care a priority by scheduling it into your routine. Whether it’s a daily break or a weekly self-care day, ensure that you dedicate time for activities that nourish your mind, body, and soul.' 
  },
  { 
      id: '3', 
      title: 'Step 3: Engage in Activities You Enjoy', 
      text: 'Take part in activities that bring you joy and relaxation. This could be anything from reading, walking, painting, or practicing yoga. Choose activities that help you unwind and feel refreshed.' 
  },
  { 
      id: '4', 
      title: 'Step 4: Set Boundaries', 
      text: 'Create boundaries to protect your alone time. This means saying no when needed and setting limits on how much time you give to others, so you can maintain your personal space and energy.' 
  },
  { 
      id: '5', 
      title: 'Step 5: Reflect and Recharge', 
      text: 'Take time to reflect on your needs and emotions. Alone time is a great opportunity for introspection, self-discovery, and emotional healing, which can enhance your self-awareness and well-being.' 
  }
];

export const SelfCareTimeTips = [
  { 
      id: '1', 
      text: '• Practice mindfulness during your alone time to enhance relaxation and reduce stress.' 
  },
  { 
      id: '2', 
      text: '• Don’t feel guilty for taking time for yourself. Remember, self-care is essential for maintaining healthy relationships and productivity.' 
  },
  { 
      id: '3', 
      text: '• Disconnect from digital devices during your self-care time to fully recharge and be present in the moment.' 
  }
];

export default function SelfCareTimePage() {
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
              {SelfCareTimeTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {SelfCareTimeData.map((item) => (
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