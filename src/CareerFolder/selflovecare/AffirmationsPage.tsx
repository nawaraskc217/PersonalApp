import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const AffirmationsAndGratitudeData = [
    {
        id: '1',
        title: 'Step 1: Understand the Power of Positive Affirmations',
        text: 'Positive affirmations are statements that help reframe negative thoughts. Recognize the power of words and how they can shape your mindset and reality.'
    },
    {
        id: '2',
        title: 'Step 2: Practice Daily Affirmations',
        text: 'Set aside a few minutes each day to repeat positive affirmations. Start with simple affirmations like "I am worthy" or "I am capable," and gradually personalize them.'
    },
    {
        id: '3',
        title: 'Step 3: Cultivate Gratitude in Daily Life',
        text: 'Take time each day to reflect on the things you are grateful for. Whether big or small, acknowledging gratitude can shift your focus to the positive aspects of life.'
    },
    {
        id: '4',
        title: 'Step 4: Write a Gratitude Journal',
        text: 'Create a habit of journaling the things you are grateful for. This practice can help boost your mood and increase overall happiness by reminding you of the good things in life.'
    },
    {
        id: '5',
        title: 'Step 5: Combine Affirmations and Gratitude',
        text: 'Incorporate both affirmations and gratitude into your daily routine. For example, say an affirmation followed by something you are thankful for, reinforcing a positive mindset.'
    }
];

export const AffirmationsAndGratitudeTips = [
    {
        id: '1',
        text: '• Start your day with affirmations to set a positive tone for the day ahead.'
    },
    {
        id: '2',
        text: '• Focus on gratitude even during difficult moments to shift your perspective and find peace.'
    },
    {
        id: '3',
        text: '• Use affirmations to challenge limiting beliefs and build confidence in yourself.'
    }
];


export default function AffirmationsPage() {
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
              {AffirmationsAndGratitudeTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {AffirmationsAndGratitudeData.map((item) => (
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
