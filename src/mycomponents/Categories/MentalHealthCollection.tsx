import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import React from 'react';

const MentalHealthTopics = [
  { id: '1', title: 'Managing Stress & Anxiety', screen: 'StressManagementPage' },
  { id: '2', title: 'Building Healthy Habits', screen: 'HealthyHabitsPage' },
  { id: '3', title: 'Mindfulness & Meditation', screen: 'MindfulnessPage' },
  { id: '4', title: 'Overcoming Negative Thoughts', screen: 'PositiveMindsetPage' },
  { id: '5', title: 'Seeking Professional Help', screen: 'TherapyPage' },
  { id: '6', title: 'Improving Sleep Quality', screen: 'SleepPage' },
  { id: '7', title: 'Building Emotional Resilience', screen: 'ResiliencePage' },
  { id: '8', title: 'Social Anxiety & Confidence', screen: 'SocialAnxietyPage' },
  { id: '9', title: 'Workplace Mental Health', screen: 'WorkplaceMentalHealthPage' },
  { id: '10', title: 'The Role of Diet in Mental Health', screen: 'MentalHealthDietPage' },
];


interface MyProps {
  navigation: any; // Replace `any` with the appropriate type if possible
}

//Careerpagecollection- > Career Guide
export default function MentalHealthCollection({ navigation }:MyProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mental Health Guide</Text>

      <FlatList
        data={MentalHealthTopics}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <View style={{}}><Text style={styles.cardText}>{item.title}</Text></View>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardPressed: {
    backgroundColor: '#e0f7fa', // Light blue on press
  },
  cardText: {
    fontSize: 18,
    fontWeight: '500',
    flex: 1,
    color: '#333',
  },
});
