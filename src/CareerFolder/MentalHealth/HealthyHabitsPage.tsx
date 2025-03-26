import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const HealthyHabitsDatas = [
    {
        id: '1',
        title: 'Step 1: Start Small and Set Realistic Goals',
        text: 'Begin by creating one small habit, like drinking more water or going to bed earlier. Start small to ensure consistency.'
    },
    {
        id: '2',
        title: 'Step 2: Make Your Habits Enjoyable',
        text: 'Choose activities that you enjoy, such as cooking healthy meals or exercising in a way that feels fun. This increases the chances of sticking to them.'
    },
    {
        id: '3',
        title: 'Step 3: Track Your Progress',
        text: 'Use habit-tracking apps or journals to monitor your consistency. Seeing progress can motivate you to continue your healthy habits.'
    },
    {
        id: '4',
        title: 'Step 4: Be Patient and Forgiving',
        text: 'Building healthy habits takes time. Don’t be too hard on yourself if you slip up—simply refocus and keep moving forward.'
    },
    {
        id: '5',
        title: 'Step 5: Stay Consistent and Make It Part of Your Routine',
        text: 'Make your healthy habit a regular part of your daily routine. The more consistent you are, the easier it becomes over time.'
    }
];

export const HealthyHabitsTips = [
    {
        id: '1',
        text: '• Incorporate healthy habits into your daily schedule to make them easier to stick to.'
    },
    {
        id: '2',
        text: '• Surround yourself with people who support your healthy lifestyle.'
    },
    {
        id: '3',
        text: '• Celebrate small victories to keep yourself motivated along the way.'
    }
];



export default function HealthyHabitsPage() {
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
              {HealthyHabitsTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {HealthyHabitsDatas.map((item) => (
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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
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
