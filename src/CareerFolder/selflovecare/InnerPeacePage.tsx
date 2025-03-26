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
              {thingsYouShouldKnow.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {ResumeDatas.map((item) => (
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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
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
