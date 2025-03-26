import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { TrendingSolutions } from '../categories_Or_soulutions/TrendingSolutionsData';



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
          "Stay hungry, stay foolish," "Your time is limited, don't waste it living someone else's life," and "Innovation distinguishes between a leader and a follower."
        </Text>
        <Text style={{ color: 'white', marginTop: 2, fontStyle: 'italic' }}>
          -Steve Jobs
        </Text>
      </View>

      {/* Categories */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>


        <TouchableOpacity onPress={() => navigation.navigate('CareerPageCollection')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Career</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('ProductivityCollection')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Productivity</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={() => navigation.navigate('FinanceCollection')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Finance</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MentalHealthCollection')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Mental Health</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('MusicCollection')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Music</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('SelfLoveCareCollection')} style={styles.categoryButton}>
          <Text style={styles.categoryText}>Self-Care/Self-Love</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* Trending Solutions */}
      <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Trending Solutions</Text>
      {TrendingSolutions.map((item) => (
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
    backgroundColor: '#00b8ae',
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
    backgroundColor: '#00b8ae',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
});

export default ServicesPage;
