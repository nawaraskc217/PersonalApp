import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import React from 'react';

const Options = [
  { id: '1', title: 'How to Choose a Career?', screen: 'CareerPage' },
  { id: '2', title: 'Resume Building Guide', screen: 'ResumePage' },
  { id: '3', title: 'Interview Preparation', screen: 'InterviewPage' },
  { id: '4', title: 'Job Search Strategies', screen: 'JobSearchPage' },
];

interface MyProps {
  navigation: any;
}

export default function CareerPageCollection({ navigation }: MyProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Career Guide</Text>
      <FlatList
        data={Options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable
            style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
            onPress={() => navigation.navigate(item.screen)}
          >
            <Text style={styles.cardText}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2dbabd', // Updated background color
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff', // White text for contrast
    textAlign: 'center',
    marginBottom: 30,
    textTransform: 'uppercase',
    letterSpacing: 1.2,
  },
  card: {
    backgroundColor: '#ffffff', // White card for contrast
    padding: 18,
    borderRadius: 15,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#1a7f74', // Darker shade of #2dbabd
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 5,
    alignItems: 'center',
  },
  cardPressed: {
    backgroundColor: '#e0f7f5', // Lighter cyan when pressed
  },
  cardText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1a7f74', // Dark cyan text
    textAlign: 'center',
    letterSpacing: 1,
  },
});
