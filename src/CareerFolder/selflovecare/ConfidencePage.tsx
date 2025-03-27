import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const ConfidenceAndSelfEsteemData = [
  {
      id: '1',
      title: 'Step 1: Identify Your Strengths',
      text: 'Start by identifying your unique strengths, skills, and qualities. Reflect on past achievements to remind yourself of what you’re capable of.'
  },
  {
      id: '2',
      title: 'Step 2: Set Achievable Goals',
      text: 'Setting and achieving small, realistic goals can help build confidence over time. Celebrate each success, no matter how small, as it adds to your sense of self-worth.'
  },
  {
      id: '3',
      title: 'Step 3: Practice Positive Self-Talk',
      text: 'Replace negative self-talk with positive affirmations. Instead of focusing on flaws or failures, remind yourself of your strengths and potential.'
  },
  {
      id: '4',
      title: 'Step 4: Embrace Your Imperfections',
      text: 'Recognize that nobody is perfect. Embrace your flaws and view them as opportunities for growth. Confidence comes from accepting yourself as you are.'
  },
  {
      id: '5',
      title: 'Step 5: Surround Yourself with Supportive People',
      text: 'Surround yourself with individuals who lift you up and encourage you. Positive relationships help boost your confidence and reinforce your sense of self-worth.'
  }
];

export const ConfidenceAndSelfEsteemTips = [
  {
      id: '1',
      text: '• Practice daily affirmations to build a positive mindset and reinforce self-belief.'
  },
  {
      id: '2',
      text: '• Take care of your physical well-being through exercise and healthy habits to feel better about yourself.'
  },
  {
      id: '3',
      text: '• Step out of your comfort zone regularly to challenge yourself and gain confidence from new experiences.'
  }
];


export default function ConfidencePage() {
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
              {ConfidenceAndSelfEsteemTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {ConfidenceAndSelfEsteemData.map((item) => (
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
