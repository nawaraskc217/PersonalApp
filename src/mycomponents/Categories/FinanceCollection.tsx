import { View, Text, StyleSheet, Pressable, FlatList } from 'react-native';
import React from 'react';

const Options = [
  { id: '1', title: 'FinancePage1', screen: 'FinancePage1' },
  { id: '2', title: 'Resume Building Guide', screen: 'FinancePage2' },
  { id: '3', title: 'Interview Preparation', screen: 'FinancePage3' },
  { id: '4', title: 'Job Search Strategies', screen: 'FinancePage4' },
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
        data={Options}
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
