import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const BudgetingDatas = [
  {
    id: '1',
    title: 'Step 1: Track Your Income and Expenses',
    text: 'Start by recording all sources of income and tracking your expenses. Use budgeting apps or spreadsheets to categorize your spending habits.'
  },
  {
    id: '2',
    title: 'Step 2: Set a Monthly Budget',
    text: 'Allocate your income into essential categories like housing, food, savings, and entertainment. Use the 50/30/20 rule: 50% needs, 30% wants, 20% savings.'
  },
  {
    id: '3',
    title: 'Step 3: Cut Unnecessary Expenses',
    text: 'Identify areas where you can save money, such as eating out less, canceling unused subscriptions, or switching to cost-effective alternatives.'
  },
  {
    id: '4',
    title: 'Step 4: Automate Savings and Bill Payments',
    text: 'Set up automatic transfers to your savings and automatic bill payments to avoid late fees and build financial discipline.'
  },
  {
    id: '5',
    title: 'Step 5: Review and Adjust Your Budget Regularly',
    text: 'Check your budget monthly to see if you’re on track. Make adjustments based on lifestyle changes or new financial goals.'
  }
];

export const BudgetingTips = [
  {
    id: '1',
    text: '• Use cash envelopes or separate accounts to manage spending in different categories.'
  },
  {
    id: '2',
    text: '• Review subscriptions and cancel those you no longer use to save extra money.'
  },
  {
    id: '3',
    text: '• Set aside emergency funds before allocating money for non-essential expenses.'
  }
];



export default function BudgetingPage() {
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

            <Image source={require('./image/budget.png')} style={styles.profileImage} />

            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {BudgetingTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>


          {BudgetingDatas.map((item) => (
            <View key={item.id} style={styles.stepContainer}>
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
    flex: 1,
    backgroundColor: '#f7f7f7', // Light gray background
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: '#ffffff',
  },
  aboutContainer: {
    marginBottom: 30,
    alignItems: 'center',
    backgroundColor: '#ffffff', // White background for the section
    paddingVertical: 20,
    borderRadius: 15,
    elevation: 5, // Shadow for elevation effect
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
  },
  profileImage: {
    width: '100%',
    height: 250,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
    borderWidth: 2,
    borderColor: '#dcdcdc', // Soft border around image
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333', // Dark text color
    marginBottom: 10,
    textAlign: 'center',
  },
  authors: {
    fontSize: 16,
    color: '#777777', // Lighter gray text color
    marginBottom: 12,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#b86314', // Use a warm color for emphasis
  },
  bulletContainer: {
    alignSelf: 'flex-start',
    marginBottom: 20,
    backgroundColor: '#ffe5b4', // Light golden background
    padding: 12,
    borderRadius: 8,
    width: '100%',
  },
  bulletPoint: {
    fontSize: 16,
    color: '#555555', // Darker gray text
    marginBottom: 6,
    fontWeight: '600',
  },
  stepContainer: {
    marginBottom: 24,
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 3, // Subtle shadow for card effect
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
  },
  stepText: {
    fontSize: 16,
    textAlign: 'justify',
    color: '#666666',
    lineHeight: 24,
  },
});