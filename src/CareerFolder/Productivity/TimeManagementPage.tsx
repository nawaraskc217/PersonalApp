import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

// import image1 from '../Career//' 
export const ProductivityDatas = [
    {
        id: '1',
        title: 'Step 1: Prioritize Your Tasks',
        text: 'Start by listing all your tasks and categorizing them based on urgency and importance. Use methods like the Eisenhower Matrix to determine which tasks need immediate attention and which can be scheduled for later.'
    },
    {
        id: '2',
        title: 'Step 2: Set Clear Goals',
        text: 'Define specific, measurable, and achievable goals for your day, week, and month. Having a clear target will help you stay focused and avoid distractions.'
    },
    {
        id: '3',
        title: 'Step 3: Develop a Routine',
        text: 'Create a structured daily routine that maximizes your most productive hours. Plan your high-focus tasks for when you have the most energy and schedule breaks to prevent burnout.'
    },
    {
        id: '4',
        title: 'Step 4: Minimize Distractions',
        text: 'Identify common distractions in your environment and find ways to eliminate them. Use tools like website blockers, noise-canceling headphones, or a dedicated workspace to stay focused.'
    },
    {
        id: '5',
        title: 'Step 5: Reflect and Improve',
        text: 'At the end of the day or week, review your progress. Identify what worked well and what needs improvement. Adjust your strategy to improve your efficiency over time.'
    }
];

export const ProductivityTips = [
    {
        id: '1',
        text: '• Use the Pomodoro Technique: Work for 25 minutes, then take a 5-minute break to maintain focus.'
    },
    {
        id: '2',
        text: '• Limit multitasking: Focus on one task at a time to improve efficiency and reduce mistakes.'
    },
    {
        id: '3',
        text: '• Set a "No Distraction" period each day to focus on your most important tasks without interruptions.'
    }
];


export default function TimeManagementPage() {
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
              {ProductivityTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {ProductivityDatas.map((item) => (
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
