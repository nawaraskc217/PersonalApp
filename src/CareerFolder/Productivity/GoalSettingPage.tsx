import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
export const GoalSettingDatas = [
    {
        id: '1',
        title: 'Step 1: Define Clear and Specific Goals',
        text: 'Vague goals lead to vague results. Instead of saying "I want to be successful," define what success looks like to you. Use the SMART criteria (Specific, Measurable, Achievable, Relevant, Time-bound) to create clear goals.'
    },
    {
        id: '2',
        title: 'Step 2: Break Goals into Smaller Milestones',
        text: 'Large goals can be overwhelming. Divide them into smaller, achievable steps to track progress and stay motivated.'
    },
    {
        id: '3',
        title: 'Step 3: Set Deadlines and Track Progress',
        text: 'Establish realistic deadlines for each milestone. Use tools like planners, apps, or journals to track your progress and adjust as needed.'
    },
    {
        id: '4',
        title: 'Step 4: Stay Flexible and Adapt',
        text: 'Unexpected challenges may arise. Be willing to adjust your approach while staying committed to the overall goal.'
    },
    {
        id: '5',
        title: 'Step 5: Hold Yourself Accountable',
        text: 'Share your goals with a mentor, friend, or accountability partner. Regular check-ins help maintain focus and motivation.'
    },
    {
        id: '6',
        title: 'Step 6: Reward Yourself for Achievements',
        text: 'Celebrate small wins along the way. Positive reinforcement boosts motivation and encourages consistent effort.'
    }
];

export const GoalSettingTips = [
    {
        id: '1',
        text: '• Write down your goals—it makes them more tangible and increases commitment.'
    },
    {
        id: '2',
        text: '• Visualize success daily to reinforce motivation and keep yourself on track.'
    },
    {
        id: '3',
        text: '• Review and adjust your goals regularly based on progress and changing priorities.'
    }
];


export default function GoalSettingPage() {
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

             <Image source={require('./images/goal.jpg')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {GoalSettingTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {GoalSettingDatas.map((item) => (
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
