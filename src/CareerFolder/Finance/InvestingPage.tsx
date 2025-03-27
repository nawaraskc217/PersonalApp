import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const InvestingDatas = [
    {
        id: '1',
        title: 'Step 1: Build an Emergency Fund',
        text: 'Before investing, save 3-6 months of living expenses in a high-yield savings account to cover unexpected costs.'
    },
    {
        id: '2',
        title: 'Step 2: Understand Different Investment Options',
        text: 'Explore stocks, bonds, mutual funds, ETFs, and real estate. Each has different risk levels and returns.'
    },
    {
        id: '3',
        title: 'Step 3: Start with Low-Risk Investments',
        text: 'Begin with index funds or diversified mutual funds if you’re new to investing. They provide stable returns with lower risk.'
    },
    {
        id: '4',
        title: 'Step 4: Invest Regularly and Stay Consistent',
        text: 'Use a strategy like dollar-cost averaging—investing a fixed amount at regular intervals—to reduce market risk.'
    },
    {
        id: '5',
        title: 'Step 5: Monitor and Adjust Your Portfolio',
        text: 'Review your investments regularly and rebalance your portfolio to align with your financial goals and risk tolerance.'
    }
];

export const InvestingTips = [
    {
        id: '1',
        text: '• Avoid emotional investing—stick to a long-term strategy rather than reacting to short-term market movements.'
    },
    {
        id: '2',
        text: '• Diversify your portfolio to reduce risk and improve potential returns.'
    },
    {
        id: '3',
        text: '• Take advantage of employer-matching retirement plans to maximize savings.'
    }
];



export default function InvestingPage() {
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

            <Image source={require('./image/saving.png')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {InvestingTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {InvestingDatas.map((item) => (
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