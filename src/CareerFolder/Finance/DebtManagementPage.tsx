import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const DebtManagementDatas = [
  {
      id: '1',
      title: 'Step 1: List All Your Debts',
      text: 'Write down all outstanding debts, including credit cards, loans, and mortgages. Note the interest rates and minimum payments for each.'
  },
  {
      id: '2',
      title: 'Step 2: Choose a Repayment Strategy',
      text: 'Use the debt snowball method (paying off the smallest debt first) or the avalanche method (paying off the highest interest debt first).'
  },
  {
      id: '3',
      title: 'Step 3: Make More Than Minimum Payments',
      text: 'Paying only the minimum keeps you in debt longer. Aim to pay extra whenever possible to reduce interest costs.'
  },
  {
      id: '4',
      title: 'Step 4: Consolidate or Refinance Debt',
      text: 'Consider consolidating high-interest debts into a lower-interest loan or refinancing to get better terms.'
  },
  {
      id: '5',
      title: 'Step 5: Avoid Taking on New Debt',
      text: 'Limit credit card use and avoid unnecessary loans while working on paying down existing debt.'
  }
];

export const DebtManagementTips = [
  {
      id: '1',
      text: '• Set up automatic payments to avoid late fees and maintain a good credit score.'
  },
  {
      id: '2',
      text: '• Negotiate lower interest rates with lenders or explore debt relief programs.'
  },
  {
      id: '3',
      text: '• Use windfalls (bonuses, tax refunds) to pay off debt faster instead of spending on non-essentials.'
  }
];



export default function DebtManagementPage() {
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

             <Image source={require('./image/debt.png')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {DebtManagementTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {DebtManagementDatas.map((item) => (
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
