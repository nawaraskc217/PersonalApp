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
