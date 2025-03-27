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

            <Image source={require('./career.png')} style={styles.profileImage} />
            
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
