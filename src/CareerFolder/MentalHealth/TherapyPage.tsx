import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const TherapyDatas = [
    {
        id: '1',
        title: 'Step 1: Understand the Importance of Therapy',
        text: 'Therapy can help you understand your emotions, improve coping strategies, and gain insights into mental health challenges.'
    },
    {
        id: '2',
        title: 'Step 2: Identify the Type of Therapy You Need',
        text: 'There are many types of therapy, such as cognitive-behavioral therapy (CBT), talk therapy, and group therapy. Choose one that fits your needs.'
    },
    {
        id: '3',
        title: 'Step 3: Find a Qualified Therapist',
        text: 'Search for licensed therapists through online platforms or ask for recommendations from trusted friends or healthcare providers.'
    },
    {
        id: '4',
        title: 'Step 4: Be Open and Honest During Sessions',
        text: 'Therapy works best when you are open about your feelings and experiences. Share openly to make progress toward your mental health goals.'
    },
    {
        id: '5',
        title: 'Step 5: Follow Through with the Recommended Plan',
        text: 'Therapists may suggest exercises or homework to help you improve your mental well-being. Stay committed to the plan and practice regularly.'
    }
];

export const TherapyTips = [
    {
        id: '1',
        text: '• Don’t hesitate to seek help—mental health is just as important as physical health.'
    },
    {
        id: '2',
        text: '• Be patient with yourself as you work through your challenges with professional guidance.'
    },
    {
        id: '3',
        text: '• Follow up with your therapist if you have concerns or feel the need to adjust your treatment plan.'
    }
];


export default function TherapyPage() {
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
              {TherapyTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {TherapyDatas.map((item) => (
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
