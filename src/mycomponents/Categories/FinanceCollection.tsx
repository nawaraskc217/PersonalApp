import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import React from 'react';

const FinanceTopics = [
  { id: '1', title: 'Budgeting Basics', screen: 'BudgetingPage' },
  { id: '2', title: 'Saving and Investing', screen: 'InvestingPage' },
  { id: '3', title: 'Debt Management Strategies', screen: 'DebtManagementPage' },
  { id: '4', title: 'Understanding Credit Scores', screen: 'CreditScorePage' },
  { id: '5', title: 'Financial Independence Tips', screen: 'FinancialIndependencePage' },
];


interface MyProps {
  navigation: any; // Replace `any` with the appropriate type if possible
}

//Careerpagecollection- > Career Guide
export default function FinanceCollection({ navigation }:MyProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Finance Guide</Text>

      <FlatList
        data={FinanceTopics}
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
