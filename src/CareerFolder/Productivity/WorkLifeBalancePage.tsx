import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
export const WorkLifeBalanceDatas = [
    {
        id: '1',
        title: 'Step 1: Set Clear Boundaries Between Work and Personal Life',
        text: 'Define specific work hours and avoid carrying work into personal time. Set limits on after-hours emails and calls to maintain balance.'
    },
    {
        id: '2',
        title: 'Step 2: Prioritize Self-Care',
        text: 'Make time for physical activity, hobbies, and relaxation. Engaging in activities you enjoy helps recharge your energy and improve overall well-being.'
    },
    {
        id: '3',
        title: 'Step 3: Learn to Say No',
        text: 'Overcommitting can lead to stress and burnout. Set healthy boundaries by saying no to tasks that don’t align with your priorities.'
    },
    {
        id: '4',
        title: 'Step 4: Take Regular Breaks and Vacations',
        text: 'Taking time off from work, even for short breaks, helps maintain long-term productivity and mental clarity.'
    },
    {
        id: '5',
        title: 'Step 5: Create a Daily Wind-Down Routine',
        text: 'End your day with relaxation techniques such as reading, listening to music, or practicing mindfulness to transition smoothly from work to personal time.'
    }
];

export const WorkLifeBalanceTips = [
    {
        id: '1',
        text: '• Use the 80/20 rule: Focus on tasks that yield the most results while avoiding unnecessary workload.'
    },
    {
        id: '2',
        text: '• Plan your day the night before to avoid last-minute stress and improve time management.'
    },
    {
        id: '3',
        text: '• Disconnect from work completely during personal or family time for a healthier mindset.'
    }
];


export default function WorkLifeBalancePage() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} // Fixes bottom gap
        >
          {/* About Me Section */}
          <View style={styles.aboutContainer}>

            <Image source={require('./career.png')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {WorkLifeBalanceTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {WorkLifeBalanceDatas.map((item) => (
            <View key={item.id}>
              <Text style={styles.stepTitle}>{item.title}</Text>
              <Text style={styles.stepText}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,  // Ensures it takes full height
    backgroundColor: 'white',
  },
  container: {
    flex: 1,  // Ensures it takes full height
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  aboutContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  profileImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
  authors: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  bulletContainer: {
    alignSelf: 'flex-start',
    marginBottom: 12,
    backgroundColor: '#b86314',
    padding: 8,
    borderRadius: 8,
  },
  bulletPoint: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '600',
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 4,
  },
  stepText: {
    fontSize: 14,
    textAlign: 'justify',
    marginBottom: 8,
  },
});
