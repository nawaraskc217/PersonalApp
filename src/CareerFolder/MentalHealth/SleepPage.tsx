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