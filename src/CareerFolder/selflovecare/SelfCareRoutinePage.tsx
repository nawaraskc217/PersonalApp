import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';



export const SelfCareRoutineData = [
  { 
      id: '1', 
      title: 'Step 1: Create a Morning Routine', 
      text: 'Start your day with a routine that nourishes your body and mind. This can include activities like stretching, journaling, meditation, or reading, setting a positive tone for the day ahead.' 
  },
  { 
      id: '2', 
      title: 'Step 2: Take Breaks Throughout the Day', 
      text: 'Incorporate short breaks during your day to avoid burnout. A quick walk, a few minutes of breathing exercises, or a snack can help restore your energy and focus.' 
  },
  { 
      id: '3', 
      title: 'Step 3: Practice Evening Self-Care', 
      text: 'Wind down at the end of the day by engaging in calming activities. This can include a warm bath, reading, or meditating. A peaceful evening routine promotes relaxation and better sleep.' 
  },
  { 
      id: '4', 
      title: 'Step 4: Incorporate Movement into Your Routine', 
      text: 'Physical activity is an important part of self-care. Incorporate movement such as stretching, yoga, or walking into your daily routine to support physical and mental well-being.' 
  },
  { 
      id: '5', 
      title: 'Step 5: Prioritize Rest and Recovery', 
      text: 'Ensure you’re getting enough rest by prioritizing sleep and recovery. Rest is essential for overall health and well-being, so make sure it’s a key component of your self-care routine.' 
  }
];

export const SelfCareRoutineTips = [
  { 
      id: '1', 
      text: '• Tailor your self-care routine to your needs and preferences. What works for one person may not work for another, so experiment to find what makes you feel rejuvenated.' 
  },
  { 
      id: '2', 
      text: '• Consistency is key. A regular routine is more effective than occasional self-care, so aim to make it a daily habit.' 
  },
  { 
      id: '3', 
      text: '• Be flexible with your routine when necessary. Life can get busy, so adjust your self-care practices as needed to avoid stress or guilt.' 
  }
];
export default function SelfCareRoutinePage() {
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
              {SelfCareRoutineTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {SelfCareRoutineData.map((item) => (
            <View key={item.id}>
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
    flex: 1,  // Ensures it takes full height
    backgroundColor: 'white',
  },
  container: {
    flex: 1,  // Ensures it takes full height
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  aboutContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  authors: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bulletContainer: {
    alignSelf: 'flex-start',
    marginBottom: 12,
    backgroundColor: '#b86314',
    padding: 8,
    borderRadius: 8,
  },
  bulletPoint: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '600',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  stepText: {
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 8,
    // color:'red'
  },
});
