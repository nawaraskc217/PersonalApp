import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { solutions } from './categories_Or_soulutions/solutions'; // Ensure this is correctly structured


interface MyProps {
  navigation: any; // Replace `any` with the appropriate type if possible
}


function ServicesPage({ navigation }: MyProps) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi, Beautiful people 👋</Text>
      </View>

      {/* Featured Section */}
      <View style={styles.featuredContainer}>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Today's Motivation</Text>
        <Text style={{ color: 'white', marginTop: 8, fontStyle: 'italic' }}>
          “Success is not final; failure is not fatal: It is the courage to continue that counts.”
        </Text>
      </View>

      {/* Categories */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
        <TouchableOpacity onPress={() => navigation.navigate('CareerPage')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Career</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Productivity')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Productivity</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Finance')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Finance</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MentalHealth')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Mental Health</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Music')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Music</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Trending Solutions */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Trending Solutions</Text>
      {solutions.map((item) => (
        <View key={item.id} style={styles.solutionContainer}>
          <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
          <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>{item.description}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 12,
    borderRadius: 30,
    backgroundColor: '#3B82F6',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  solutionContainer: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  featuredContainer: {
    padding: 16,
    marginBottom: 16,
    borderRadius: 12,
    backgroundColor: '#3B82F6',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default ServicesPage;
