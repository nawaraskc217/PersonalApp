import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const MindfulnessForSelfAwarenessData = [
  { 
      id: '1', 
      title: 'Step 1: Focus on the Present Moment', 
      text: 'Start by focusing on the present moment. Pay attention to your breath, physical sensations, and the environment around you. Bring your awareness to the "here and now" without judgment.' 
  },
  { 
      id: '2', 
      title: 'Step 2: Practice Non-Judgmental Awareness', 
      text: 'When practicing mindfulness, avoid labeling your thoughts and emotions as good or bad. Simply observe them as they come and go, fostering a sense of acceptance.' 
  },
  { 
      id: '3', 
      title: 'Step 3: Use Mindful Breathing Techniques', 
      text: 'Mindful breathing can help center your attention. Focus on your inhales and exhales, observing the sensation of each breath. This can calm your mind and increase self-awareness.' 
  },
  { 
      id: '4', 
      title: 'Step 4: Develop Body Awareness', 
      text: 'Pay attention to how your body feels in the present moment. Perform a body scan, noticing any areas of tension or discomfort, and focus on releasing them to cultivate mindfulness.' 
  },
  { 
      id: '5', 
      title: 'Step 5: Practice Mindfulness Regularly', 
      text: 'Make mindfulness a part of your daily routine. Even short mindfulness exercises throughout the day can increase your overall self-awareness and help you connect more deeply with your thoughts and emotions.' 
  }
];

export const MindfulnessForSelfAwarenessTips = [
  { 
      id: '1', 
      text: '• Start with just a few minutes of mindfulness practice each day and gradually increase the duration as you feel more comfortable.' 
  },
  { 
      id: '2', 
      text: '• Try using mindfulness apps or guided meditations to help you stay focused and deepen your practice.' 
  },
  { 
      id: '3', 
      text: '• Mindfulness is about being present, not perfect. Be gentle with yourself when your mind wanders and gently bring your focus back to the present.' 
  }
];


export default function MindfulnessPage() {
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
