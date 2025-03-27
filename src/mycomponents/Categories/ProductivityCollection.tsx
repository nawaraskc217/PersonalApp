import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import React from 'react';

const ProductivityTips = [
  { id: '1', title: 'Time Management Techniques', screen: 'TimeManagementPage' },
  { id: '2', title: 'Avoiding Procrastination', screen: 'ProcrastinationPage' },
  { id: '3', title: 'Effective Goal Setting', screen: 'GoalSettingPage' },
  { id: '4', title: 'Building a Productive Routine', screen: 'RoutinePage' },
  { id: '5', title: 'Maximizing Focus & Concentration', screen: 'FocusPage' },
  { id: '6', title: 'Work-Life Balance Strategies', screen: 'WorkLifeBalancePage' },
];

interface MyProps {
  navigation: any; // Replace `any` with the appropriate type if possible
}

//Careerpagecollection- > Career Guide
export default function ProductivityCollection({ navigation }:MyProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Productiviy Guide</Text>

      <FlatList
        data={ProductivityTips}
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
