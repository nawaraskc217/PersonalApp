import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const RoutineDatas = [
    {
        id: '1',
        title: 'Step 1: Establish a Morning Routine',
        text: 'Start your day with intention. Incorporate activities like exercise, meditation, journaling, or reading to set a positive tone for the day.'
    },
    {
        id: '2',
        title: 'Step 2: Prioritize Tasks with a To-Do List',
        text: 'Write down your daily tasks and rank them based on importance. Use methods like the Eisenhower Matrix or the 80/20 rule to focus on high-impact tasks.'
    },
    {
        id: '3',
        title: 'Step 3: Set Fixed Work Blocks',
        text: 'Allocate specific time slots for focused work. Use techniques like time-blocking or the Pomodoro Technique to stay on track and maintain productivity.'
    },
    {
        id: '4',
        title: 'Step 4: Incorporate Breaks and Movement',
        text: 'Taking short breaks between tasks helps improve focus and prevents burnout. Try a 5-minute stretch, a quick walk, or deep breathing exercises.'
    },
    {
        id: '5',
        title: 'Step 5: Reflect and Adjust Your Routine',
        text: 'At the end of the day, review what worked well and what didn’t. Make small improvements to optimize your productivity over time.'
    }
];

export const RoutineTips = [
    {
        id: '1',
        text: '• Avoid checking your phone first thing in the morning to start your day with focus.'
    },
    {
        id: '2',
        text: '• Set a fixed bedtime and wake-up time to regulate your body clock and improve sleep quality.'
    },
    {
        id: '3',
        text: '• End your day with a simple review—note achievements and plan for the next day.'
    }
];


export default function RoutinePage() {
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
              {RoutineTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {RoutineDatas.map((item) => (
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
