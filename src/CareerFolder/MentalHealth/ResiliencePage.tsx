import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const ResilienceDatas = [
    {
        id: '1',
        title: 'Step 1: Embrace Challenges as Opportunities',
        text: 'Resilience is about viewing challenges as opportunities for growth. When faced with adversity, see it as a chance to learn and become stronger.'
    },
    {
        id: '2',
        title: 'Step 2: Build a Strong Support System',
        text: 'Having a reliable network of friends, family, or colleagues is essential for emotional resilience. Surround yourself with positive and supportive people.'
    },
    {
        id: '3',
        title: 'Step 3: Practice Self-Compassion',
        text: 'Be kind to yourself during tough times. Instead of criticizing yourself, acknowledge your feelings and treat yourself with care.'
    },
    {
        id: '4',
        title: 'Step 4: Focus on What You Can Control',
        text: 'Resilience involves accepting what is outside your control and focusing on the things you can influence. This mindset helps reduce stress and build emotional strength.'
    },
    {
        id: '5',
        title: 'Step 5: Develop Healthy Coping Mechanisms',
        text: 'Use techniques like mindfulness, meditation, exercise, or journaling to manage your emotions and navigate difficult situations more effectively.'
    }
];

export const ResilienceTips = [
    {
        id: '1',
        text: '• Learn from setbacks by reflecting on what went well and what can be improved next time.'
    },
    {
        id: '2',
        text: '• Stay optimistic and remind yourself that challenging times are temporary and will pass.'
    },
    {
        id: '3',
        text: '• Develop problem-solving skills to manage stress and improve your ability to bounce back from challenges.'
    }
];



export default function ResiliencePage() {
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
              {ResilienceTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {ResilienceDatas.map((item) => (
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
  },
});
