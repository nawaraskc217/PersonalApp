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

export default function ProductionRemotelyPageT() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} // Fixes bottom gap
        >
          {/* About Me Section */}
          <View style={styles.aboutContainer}>
            <Image source={require('./image/resume.jpg')} style={styles.profileImage} />
            <Text style={styles.title}>How to Build the Resume?</Text>
            <Text style={styles.authors}>Ref. Co-authored by Lauren Krasny and Sophia Bell</Text>
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
    flex: 1,  // Ensures it takes full height
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,  // Ensures it takes full height
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  aboutContainer: {
    marginBottom: 24,
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  profileImage: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
    textAlign: 'center',
    color: '#3a3a3a',
  },
  authors: {
    fontSize: 16,
    color: '#7a7a7a',
    marginBottom: 12,
    textAlign: 'center',
  },
  stepContainer: {
    marginBottom: 20,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 10,
    backgroundColor: '#fafafa',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#34495e',
    lineHeight: 24,
  },
});
