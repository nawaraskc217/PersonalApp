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