import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const WorkplaceMentalHealthDatas = [
    {
        id: '1',
        title: 'Step 1: Set Clear Boundaries Between Work and Personal Life',
        text: 'Create boundaries to separate your work life from personal time. Establish clear "work hours" and avoid working outside of these times to prevent burnout.'
    },
    {
        id: '2',
        title: 'Step 2: Communicate Your Needs Effectively',
        text: 'If you’re feeling overwhelmed or stressed, communicate your needs to your supervisor or HR. Expressing concerns early can help manage workplace stress.'
    },
    {
        id: '3',
        title: 'Step 3: Take Regular Breaks',
        text: 'Breaks are crucial for maintaining mental health at work. Take short breaks throughout the day to refresh your mind and avoid burnout.'
    },
    {
        id: '4',
        title: 'Step 4: Seek Support from Colleagues and Managers',
        text: 'A supportive work environment can significantly reduce stress. Reach out to colleagues or managers when you need assistance or emotional support.'
    },
    {
        id: '5',
        title: 'Step 5: Practice Stress-Relieving Techniques',
        text: 'Incorporate mindfulness, deep breathing, or short walks into your daily routine at work to relieve stress and maintain focus.'
    }
];

export const WorkplaceMentalHealthTips = [
    {
        id: '1',
        text: '• Practice time management skills to avoid feeling overwhelmed by tasks.'
    },
    {
        id: '2',
        text: '• Cultivate a healthy work culture by supporting coworkers and encouraging open communication.'
    },
    {
        id: '3',
        text: '• Take time off when needed to recharge and prevent burnout.'
    }
];


export default function WorkplaceMentalHealthPage() {
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
              {WorkplaceMentalHealthTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {WorkplaceMentalHealthDatas.map((item) => (
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
