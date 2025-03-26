import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const StressManagementDatas = [
    {
        id: '1',
        title: 'Step 1: Identify the Sources of Stress',
        text: 'Start by recognizing what causes your stress and anxiety. Keep a journal or use apps to track your triggers and how they affect you.'
    },
    {
        id: '2',
        title: 'Step 2: Practice Deep Breathing Exercises',
        text: 'When you feel anxious, focus on deep, slow breaths. Try techniques like the 4-7-8 method to calm your nervous system.'
    },
    {
        id: '3',
        title: 'Step 3: Regular Exercise and Physical Activity',
        text: 'Exercise is a natural stress reliever. Engage in activities like walking, running, or yoga to release endorphins and reduce stress.'
    },
    {
        id: '4',
        title: 'Step 4: Time Management and Prioritization',
        text: 'Create a schedule and break tasks into smaller, manageable steps. Prioritize what matters most to reduce overwhelm.'
    },
    {
        id: '5',
        title: 'Step 5: Seek Support from Loved Ones or Professionals',
        text: 'Talk to friends, family, or a counselor when you feel overwhelmed. Social support is key to coping with stress effectively.'
    }
];

export const StressManagementTips = [
    {
        id: '1',
        text: '• Practice mindfulness and take breaks throughout the day to recharge.'
    },
    {
        id: '2',
        text: '• Engage in hobbies or creative activities to distract your mind from stress.'
    },
    {
        id: '3',
        text: '• Consider journaling your thoughts and feelings to release emotional tension.'
    }
];



export default function StressManagementPage() {
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
              {StressManagementTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {StressManagementDatas.map((item) => (
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
