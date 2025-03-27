import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const CreditScoreDatas = [
    {
        id: '1',
        title: 'Step 1: Know How Your Credit Score is Calculated',
        text: 'Credit scores are based on payment history, credit utilization, length of credit history, types of credit, and recent inquiries.'
    },
    {
        id: '2',
        title: 'Step 2: Pay Bills on Time',
        text: 'Timely payments have the biggest impact on your credit score. Set reminders or automate bill payments to avoid missed due dates.'
    },
    {
        id: '3',
        title: 'Step 3: Keep Credit Utilization Low',
        text: 'Aim to use less than 30% of your available credit limit to maintain a high score.'
    },
    {
        id: '4',
        title: 'Step 4: Avoid Opening Too Many New Accounts',
        text: 'Each credit inquiry slightly lowers your score. Only apply for new credit when necessary.'
    },
    {
        id: '5',
        title: 'Step 5: Check Your Credit Report Regularly',
        text: 'Monitor your credit report for errors or fraudulent activity. You’re entitled to a free credit report annually from major credit bureaus.'
    }
];

export const CreditScoreTips = [
    {
        id: '1',
        text: '• Keep old credit accounts open to maintain a long credit history and improve your score.'
    },
    {
        id: '2',
        text: '• Dispute any incorrect information on your credit report to prevent it from affecting your score.'
    },
    {
        id: '3',
        text: '• Use a credit-builder loan or secured credit card if you have a low or no credit history.'
    }
];



export default function SleepPage() {
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
              {CreditScoreTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {CreditScoreDatas.map((item) => (
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
