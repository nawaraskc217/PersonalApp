import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import React from 'react';

const SelfLoveCareOptions = [
    { id: '1', title: 'Practicing Self-Compassion', screen: 'SelfCompassionPage' },
    { id: '2', title: 'Creating Healthy Boundaries', screen: 'HealthyBoundariesPage' },
    { id: '3', title: 'Mindfulness for Self-Awareness', screen: 'MindfulnessPage' },
    { id: '4', title: 'Building Confidence & Self-Esteem', screen: 'ConfidencePage' },
    { id: '5', title: 'Journaling for Emotional Clarity', screen: 'JournalingPage' },
    { id: '6', title: 'Nurturing Your Inner Peace', screen: 'InnerPeacePage' },
    { id: '7', title: 'Positive Affirmations & Gratitude', screen: 'AffirmationsPage' },
    { id: '8', title: 'Taking Time for Yourself', screen: 'SelfCareTimePage' },
    { id: '9', title: 'Self-Care Routines for Well-being', screen: 'SelfCareRoutinePage' },
    { id: '10', title: 'Healing from Negative Self-Talk', screen: 'HealingPage' },
  ];
  
interface MyProps {
  navigation: any; // Replace `any` with the appropriate type if possible
}

//Selfpagecollection- > Career Guide
export default function SelfLoveCareCollection({ navigation }:MyProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Self-Care/Self-Love Guide</Text>

      <FlatList
        data={SelfLoveCareOptions}
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
