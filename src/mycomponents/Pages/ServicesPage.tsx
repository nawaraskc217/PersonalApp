// import React from 'react';
// import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, Pressable } from 'react-native';
// // import { TrendingSolutions } from '../TrendingSolutions/TrendingSolutionsData';

// export const TrendingSolutions = [
//   { "id": "1", "title": "How to stay productive while working remotely?", "description": "Learn practical strategies to improve your workflow.", "category": "Productivity", "screen": "ProductionRemotelyPage" },
//   { "id": "2", "title": "Best financial habits for young professionals", "description": "Tips to manage your money effectively.", "category": "Finance", "screen": "FinancialHabitPage" },
//   { "id": "3", "title": "Mental health tips for a balanced life", "description": "Improve your well-being with these daily habits.", "category": "Mental Health", "screen": "MentalHealthTipsPage" },
//   { "id": "4", "title": "Effective time management for busy professionals", "description": "Techniques to maximize productivity and minimize distractions.", "category": "Productivity", "screen": "TimeManagementPage" },
//   { "id": "5", "title": "Building healthy habits for success", "description": "Create a daily routine to set yourself up for success.", "category": "Productivity", "screen": "HealthyHabitsPage" },
//   { "id": "6", "title": "How to deal with stress in the workplace", "description": "Strategies for managing stress and improving your well-being.", "category": "Mental Health", "screen": "WorkplaceStressPage" },
//   { "id": "7", "title": "Networking tips for career growth", "description": "Building meaningful connections that advance your career.", "category": "Career", "screen": "NetworkingTipsPage" },
//   { "id": "8", "title": "How to start investing for beginners", "description": "Learn the basics of investing and growing your wealth.", "category": "Finance", "screen": "InvestingForBeginnersPage" },
//   { "id": "9", "title": "Boost your creativity with these techniques", "description": "Simple methods to enhance your creative thinking.", "category": "Productivity", "screen": "CreativityBoostPage" },
//   { "id": "10", "title": "How to improve your communication skills", "description": "Develop effective communication strategies for success.", "category": "Career", "screen": "CommunicationSkillsPage" },
//   { "id": "11", "title": "The importance of work-life balance", "description": "How to achieve a healthy work-life balance.", "category": "Mental Health", "screen": "WorkLifeBalancePage" },
//   { "id": "12", "title": "Overcoming procrastination: Tips for getting things done", "description": "Practical tips to help you stop procrastinating and take action.", "category": "Productivity", "screen": "OvercomingProcrastinationPage" },
//   { "id": "13", "title": "Staying motivated during tough times", "description": "How to keep pushing forward when faced with challenges.", "category": "Mental Health", "screen": "StayingMotivatedPage" },
//   { "id": "14", "title": "How to improve your sleep habits", "description": "Techniques to improve the quality and quantity of your sleep.", "category": "Mental Health", "screen": "SleepHabitsPage" },
//   { "id": "15", "title": "The power of mindfulness for mental clarity", "description": "Using mindfulness to reduce stress and improve focus.", "category": "Mental Health", "screen": "MindfulnessPage" }
// ];


// interface MyProps {
//   navigation: any; // Replace `any` with the appropriate type if possible
// }


// function ServicesPage({ navigation }: MyProps) {
//   return (
//     <ScrollView style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24 }}>
//       {/* Header */}
//       <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
//         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi, Beautiful people 👋</Text>
//       </View>

//       {/* Featured Section */}
//       <View style={styles.featuredContainer}>
//         <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Today's Motivation</Text>
//         <Text style={{ color: 'white', marginTop: 8, fontStyle: 'italic' }}>
//           "Stay hungry, stay foolish," "Your time is limited, don't waste it living someone else's life," and "Innovation distinguishes between a leader and a follower."
//         </Text>
//         <Text style={{ color: 'white', marginTop: 2, fontStyle: 'italic' }}>
//           -Steve Jobs
//         </Text>
//       </View>

//       {/* Categories */}
//       <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Categories</Text>
//       <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>


//         <TouchableOpacity onPress={() => navigation.navigate('CareerPageCollection')} style={styles.categoryButton}>
//           <Text style={styles.categoryText}>Career</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('ProductivityCollection')} style={styles.categoryButton}>
//           <Text style={styles.categoryText}>Productivity</Text>
//         </TouchableOpacity>


//         <TouchableOpacity onPress={() => navigation.navigate('FinanceCollection')} style={styles.categoryButton}>
//           <Text style={styles.categoryText}>Finance</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('MentalHealthCollection')} style={styles.categoryButton}>
//           <Text style={styles.categoryText}>Mental Health</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('MusicCollection')} style={styles.categoryButton}>
//           <Text style={styles.categoryText}>Music</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={() => navigation.navigate('SelfLoveCareCollection')} style={styles.categoryButton}>
//           <Text style={styles.categoryText}>Self-Care/Self-Love</Text>
//         </TouchableOpacity>

//       </ScrollView>

//       {/* Trending Solutions */}
//       <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 10 }}>Trending Solutions</Text>
//       {/* {TrendingSolutions.map((item) => (
//         <View key={item.id} style={styles.solutionContainer}>
//           <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
//           <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>{item.description}</Text>
//         </View>
//       ))} */}


//       <FlatList
//         data={TrendingSolutions}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Pressable
//             style={({ pressed }) => [
            
//             ]}
//             onPress={() => navigation.navigate(item.screen)}
//           >
//             <View key={item.id} style={styles.solutionContainer}>
//               <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
//               <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>{item.description}</Text>
//             </View>
//           </Pressable>
//         )}
//       />
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   categoryButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     marginRight: 12,
//     borderRadius: 30,
//     backgroundColor: '#00b8ae',
//     alignItems: 'center',
//     justifyContent: 'center',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//   },
//   categoryText: {
//     color: 'white',
//     fontSize: 14,
//     fontWeight: '600',
//     textTransform: 'capitalize',
//   },
//   solutionContainer: {
//     padding: 16,
//     marginBottom: 16,
//     borderRadius: 12,
//     backgroundColor: 'white',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   featuredContainer: {
//     padding: 16,
//     marginBottom: 16,
//     borderRadius: 12,
//     backgroundColor: '#00b8ae',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 2,
//   },
// });

// export default ServicesPage;

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
        <Text style={styles.greeting}>Hi, Beautiful people 👋</Text>
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
    backgroundColor: 'white',
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
    fontSize: 20,
    fontWeight: 'bold',
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
  featuredTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  featuredText: {
    color: 'white',
    marginTop: 8,
    fontStyle: 'italic',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  categoryScroll: {
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 10,
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
  solutionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  solutionDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
});

export default ServicesPage;
