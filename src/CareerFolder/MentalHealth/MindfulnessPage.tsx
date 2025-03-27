import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const MindfulnessDatas = [
    {
        id: '1',
        title: 'Step 1: Focus on the Present Moment',
        text: 'Mindfulness involves bringing your awareness to the present moment without judgment. Focus on your breathing or your surroundings.'
    },
    {
        id: '2',
        title: 'Step 2: Start with Short Sessions',
        text: 'Start with just 5–10 minutes of mindfulness or meditation each day. Gradually increase the time as you become more comfortable.'
    },
    {
        id: '3',
        title: 'Step 3: Use Guided Meditation',
        text: 'There are many apps and online resources with guided meditations. These can help you stay focused and learn new techniques.'
    },
    {
        id: '4',
        title: 'Step 4: Practice Gratitude Daily',
        text: 'Incorporate a gratitude practice into your mindfulness routine by writing down three things you’re thankful for every day.'
    },
    {
        id: '5',
        title: 'Step 5: Make It a Habit',
        text: 'Make mindfulness and meditation a regular part of your daily routine to experience long-term benefits for your mental health.'
    }
];

export const MindfulnessTips = [
    {
        id: '1',
        text: '• Practice mindfulness during everyday activities, like eating or walking, to stay grounded and present.'
    },
    {
        id: '2',
        text: '• Use meditation apps like Headspace or Calm to guide your practice and stay consistent.'
    },
    {
        id: '3',
        text: '• Don’t stress about “perfect” meditation—just focus on being present, even if your mind wanders.'
    }
];



export default function MindfulnessPage() {
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
              {MindfulnessTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {MindfulnessDatas.map((item) => (
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
