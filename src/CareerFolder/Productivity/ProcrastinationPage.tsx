import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const ProcrastinationDatas = [
    {
        id: '1',
        title: 'Step 1: Identify the Root Cause',
        text: 'Understand why you are procrastinating. Is it due to fear of failure, lack of motivation, or feeling overwhelmed? Identifying the cause helps you find the right solution.'
    },
    {
        id: '2',
        title: 'Step 2: Break Tasks into Smaller Steps',
        text: 'Large tasks can feel overwhelming. Break them down into smaller, manageable steps to make progress easier and less intimidating.'
    },
    {
        id: '3',
        title: 'Step 3: Set Clear Deadlines',
        text: 'Self-imposed deadlines create urgency and accountability. Use a planner or digital calendar to track deadlines and stay on schedule.'
    },
    {
        id: '4',
        title: 'Step 4: Use the Two-Minute Rule',
        text: 'If a task takes less than two minutes, do it immediately. This prevents small tasks from piling up and becoming overwhelming.'
    },
    {
        id: '5',
        title: 'Step 5: Remove Distractions',
        text: 'Identify common distractions and create a focused work environment. Turn off notifications, use website blockers, and set designated work hours.'
    },
    {
        id: '6',
        title: 'Step 6: Reward Yourself',
        text: 'Give yourself small rewards after completing tasks. This reinforces positive behavior and makes productivity more enjoyable.'
    }
];

export const ProcrastinationTips = [
    {
        id: '1',
        text: '• Start with the easiest task to gain momentum and motivation.'
    },
    {
        id: '2',
        text: '• Use the Pomodoro Technique: Work for 25 minutes, then take a 5-minute break.'
    },
    {
        id: '3',
        text: '• Hold yourself accountable by sharing your goals with a friend or mentor.'
    }
];


export default function ProcrastinationPage() {
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

            <Image source={require('./images/pro.jpg')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {ProcrastinationTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {ProcrastinationDatas.map((item) => (
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
  },
});
