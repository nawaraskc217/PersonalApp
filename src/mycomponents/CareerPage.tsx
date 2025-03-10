import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CareerPage({ route }) {
  const { category } = route.params; // Access the category passed as payload

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to the {category} page</Text>
      <Text>Here you'll find solutions related to {category}.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});
