import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';

const solutions = [
  { id: 1, title: "How to stay productive while working remotely?", description: "Learn practical strategies to improve your workflow.", category: "Productivity" },
  { id: 2, title: "Best financial habits for young professionals", description: "Tips to manage your money effectively.", category: "Finance" },
  { id: 3, title: "Mental health tips for a balanced life", description: "Improve your well-being with these daily habits.", category: "Mental Health" },
  { id: 4, title: "Effective time management for busy professionals", description: "Techniques to maximize productivity and minimize distractions.", category: "Productivity" },
  { id: 5, title: "Building healthy habits for success", description: "Create a daily routine to set yourself up for success.", category: "Productivity" },
  { id: 6, title: "How to deal with stress in the workplace", description: "Strategies for managing stress and improving your well-being.", category: "Mental Health" },
  { id: 7, title: "Networking tips for career growth", description: "Building meaningful connections that advance your career.", category: "Career" },
  { id: 8, title: "How to start investing for beginners", description: "Learn the basics of investing and growing your wealth.", category: "Finance" },
  { id: 9, title: "Boost your creativity with these techniques", description: "Simple methods to enhance your creative thinking.", category: "Productivity" },
  { id: 10, title: "How to improve your communication skills", description: "Develop effective communication strategies for success.", category: "Career" },
  { id: 11, title: "The importance of work-life balance", description: "How to achieve a healthy work-life balance.", category: "Mental Health" },
  { id: 12, title: "Overcoming procrastination: Tips for getting things done", description: "Practical tips to help you stop procrastinating and take action.", category: "Productivity" },
  { id: 13, title: "Staying motivated during tough times", description: "How to keep pushing forward when faced with challenges.", category: "Mental Health" },
  { id: 14, title: "How to improve your sleep habits", description: "Techniques to improve the quality and quantity of your sleep.", category: "Mental Health" },
  { id: 15, title: "The power of mindfulness for mental clarity", description: "Using mindfulness to reduce stress and improve focus.", category: "Mental Health" }
];

const ServicesPage = ({ navigation }) => {


  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi, Beautiful people 👋</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Featured Section */}
        <View style={{ padding: 16, marginBottom: 16, borderRadius: 12, backgroundColor: '#3B82F6', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }}>
          <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Today's Motivation</Text>
          <Text style={{ color: 'white', marginTop: 8, fontStyle: 'italic' }}>“Success is not final; failure is not fatal: It is the courage to continue that counts.”</Text>
        </View>

        {/* Categories */}
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CareerPage', { category: 'Career' })}
            style={styles.categoryButton}
          >
            <Text style={styles.categoryText}>Career</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ProductivityPage', { category: 'Productivity' })}
            style={styles.categoryButton}
          >
            <Text style={styles.categoryText}>Productivity</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('FinancePage', { category: 'Finance' })}
            style={styles.categoryButton}
          >
            <Text style={styles.categoryText}>Finance</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MentalHealthPage', { category: 'Mental Health' })}
            style={styles.categoryButton}
          >
            <Text style={styles.categoryText}>Mental Health</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('MusicPage', { category: 'Music' })}
            style={styles.categoryButton}
          >
            <Text style={styles.categoryText}>Music</Text>
          </TouchableOpacity>

        </ScrollView>


        {/* Trending Solutions */}
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Trending Solutions</Text>
        {solutions.map((item) => (
          <View key={item.id} style={{ padding: 16, marginBottom: 16, borderRadius: 12, backgroundColor: 'white', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }}>
            <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
            <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default ServicesPage;


const styles = StyleSheet.create({
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginRight: 12, // Add space between buttons
    borderRadius: 30, // Rounded corners for buttons
    backgroundColor: '#3B82F6', // Button color
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Shadow effect for buttons
    shadowColor: '#000', // Shadow color for iOS
    shadowOffset: { width: 0, height: 4 }, // Shadow offset for iOS
    shadowOpacity: 0.1, // Shadow opacity for iOS
    shadowRadius: 5, // Shadow blur radius for iOS
    transform: [{ scale: 1 }], // Scale effect for buttons on press
  },
  categoryText: {
    color: 'white', // Text color
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'capitalize', // Capitalize the category name
  },
  categoryButtonActive: {
    backgroundColor: '#2563EB', // Darker blue when active or pressed
  },
});

