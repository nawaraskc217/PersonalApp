import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Pressable } from 'react-native';

export const TrendingSolutions = [
  { "id": "1", "title": "How to stay productive while working remotely?", "description": "Learn practical strategies to improve your workflow.", "category": "Productivity", "screen": "ProductionRemotelyPageT" },
  { "id": "2", "title": "Best financial habits for young professionals", "description": "Tips to manage your money effectively.", "category": "Finance", "screen": "FinancialHabitPageT" },
  { "id": "3", "title": "Mental health tips for a balanced life", "description": "Improve your well-being with these daily habits.", "category": "Mental Health", "screen": "MentalHealthTipsPageT" },
  { "id": "4", "title": "Effective time management for busy professionals", "description": "Techniques to maximize productivity and minimize distractions.", "category": "Productivity", "screen": "TimeManagementPageT" },
  { "id": "5", "title": "Building healthy habits for success", "description": "Create a daily routine to set yourself up for success.", "category": "Productivity", "screen": "HealthyHabitsPageT" },
  { "id": "6", "title": "How to deal with stress in the workplace", "description": "Strategies for managing stress and improving your well-being.", "category": "Mental Health", "screen": "WorkplaceStressPageT" },
  { "id": "7", "title": "Networking tips for career growth", "description": "Building meaningful connections that advance your career.", "category": "Career", "screen": "NetworkingTipsPageT" },
  { "id": "8", "title": "How to start investing for beginners", "description": "Learn the basics of investing and growing your wealth.", "category": "Finance", "screen": "InvestingForBeginnersPageT" },
  { "id": "9", "title": "Boost your creativity with these techniques", "description": "Simple methods to enhance your creative thinking.", "category": "Productivity", "screen": "CreativityBoostPageT" },
  { "id": "10", "title": "How to improve your communication skills", "description": "Develop effective communication strategies for success.", "category": "Career", "screen": "CommunicationSkillsPageT" },
  { "id": "11", "title": "The importance of work-life balance", "description": "How to achieve a healthy work-life balance.", "category": "Mental Health", "screen": "WorkLifeBalancePageT" },
  { "id": "12", "title": "Overcoming procrastination: Tips for getting things done", "description": "Practical tips to help you stop procrastinating and take action.", "category": "Productivity", "screen": "OvercomingProcrastinationPageT" },
  { "id": "13", "title": "Staying motivated during tough times", "description": "How to keep pushing forward when faced with challenges.", "category": "Mental Health", "screen": "StayingMotivatedPageT" },
  { "id": "14", "title": "How to improve your sleep habits", "description": "Techniques to improve the quality and quantity of your sleep.", "category": "Mental Health", "screen": "SleepHabitsPageT" },
  { "id": "15", "title": "The power of mindfulness for mental clarity", "description": "Using mindfulness to reduce stress and improve focus.", "category": "Mental Health", "screen": "MindfulnessPageT" }
];

interface MyProps {
  navigation: any;
}

function ServicesPage({ navigation }: MyProps) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hi, Beautiful People 👋</Text>
      </View>

      {/* Featured Section */}
      <View style={styles.featuredContainer}>
        <Text style={styles.featuredTitle}>Today's Motivation</Text>
        <Text style={styles.featuredText}>
          "Stay hungry, stay foolish." - Steve Jobs
        </Text>
      </View>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScroll}>
        {[
          { name: 'Career', screen: 'CareerPageCollection' },
          { name: 'Productivity', screen: 'ProductivityCollection' },
          { name: 'Finance', screen: 'FinanceCollection' },
          { name: 'Mental Health', screen: 'MentalHealthCollection' },
          { name: 'Music', screen: 'MusicCollection' },
          { name: 'Self-Care/Self-Love', screen: 'SelfLoveCareCollection' },
        ].map((category, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate(category.screen)} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Trending Solutions */}
      <Text style={styles.sectionTitle}>Trending Solutions</Text>
      <FlatList
        data={TrendingSolutions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate(item.screen)}>
            <View style={styles.solutionContainer}>
              <Text style={styles.solutionTitle}>{item.title}</Text>
              <Text style={styles.solutionDescription}>{item.description}</Text>
            </View>
          </Pressable>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Light background
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
    color: '#333', // Dark text for better contrast
  },
  featuredContainer: {
    padding: 18,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: '#00b8ae', // Soft teal background
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  featuredTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  featuredText: {
    color: 'white',
    marginTop: 8,
    fontStyle: 'italic',
    fontSize: 14,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333', // Darker title for section headers
    marginBottom: 12,
  },
  categoryScroll: {
    marginBottom: 24,
  },
  categoryButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginRight: 15,
    borderRadius: 30,
    backgroundColor: '#ff8c00', // Orange for categories to stand out
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  categoryText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  solutionContainer: {
    padding: 18,
    marginBottom: 18,
    borderRadius: 16,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  solutionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#333',
  },
  solutionDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 6,
  },
});

export default ServicesPage;
