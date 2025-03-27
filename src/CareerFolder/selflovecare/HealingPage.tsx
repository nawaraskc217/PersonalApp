import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const HealingFromNegativeSelfTalkData = [
  {
      id: '1',
      title: 'Step 1: Identify Negative Self-Talk Patterns',
      text: 'Begin by becoming aware of the negative thoughts you have about yourself. Pay attention to moments when you feel self-critical or doubtful, and identify the common themes in these thoughts.'
  },
  {
      id: '2',
      title: 'Step 2: Challenge Negative Thoughts',
      text: 'Once you recognize negative self-talk, challenge it. Ask yourself whether these thoughts are based on facts or assumptions, and consider alternative, more positive perspectives.'
  },
  {
      id: '3',
      title: 'Step 3: Replace Negative Thoughts with Affirmations',
      text: 'Replace self-critical thoughts with positive affirmations. For example, instead of thinking "I am not good enough," say to yourself, "I am worthy and capable of growth."'
  },
  {
      id: '4',
      title: 'Step 4: Practice Self-Compassion',
      text: 'Be kind to yourself when you make mistakes. Understand that self-improvement takes time, and it\'s okay to be imperfect. Practice self-compassion to counter negative self-talk.'
  },
  {
      id: '5',
      title: 'Step 5: Seek Professional Support if Needed',
      text: 'If negative self-talk becomes overwhelming, consider seeking support from a therapist or counselor. They can help you develop healthier thought patterns and provide strategies for healing.'
  }
];

export const HealingFromNegativeSelfTalkTips = [
  {
      id: '1',
      text: '• Keep a journal to track your negative thoughts and work on reframing them with positive affirmations.'
  },
  {
      id: '2',
      text: '• Practice mindfulness to observe your thoughts without judgment and create space for positive thinking.'
  },
  {
      id: '3',
      text: '• Engage in self-care activities like meditation or exercise to boost your mood and combat negative thinking.'
  }
];



export default function HealingPage() {
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
              {HealingFromNegativeSelfTalkTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {HealingFromNegativeSelfTalkData.map((item) => (
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
