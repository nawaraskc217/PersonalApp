import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const FinancialIndependenceDatas = [
    {
        id: '1',
        title: 'Step 1: Define Your Financial Goals',
        text: 'Financial independence means different things to different people. Decide whether you aim for early retirement, business ownership, or debt freedom.'
    },
    {
        id: '2',
        title: 'Step 2: Increase Income and Reduce Expenses',
        text: 'Boost income through side hustles, career advancement, or passive income. Cut unnecessary expenses to maximize savings.'
    },
    {
        id: '3',
        title: 'Step 3: Invest in Assets that Generate Passive Income',
        text: 'Consider rental properties, dividend stocks, or online businesses that can provide long-term financial security.'
    },
    {
        id: '4',
        title: 'Step 4: Automate and Diversify Savings',
        text: 'Set up automatic investments in diversified assets to grow wealth over time.'
    },
    {
        id: '5',
        title: 'Step 5: Maintain a Frugal and Disciplined Lifestyle',
        text: 'Avoid lifestyle inflation and keep living expenses low, even as income increases.'
    }
];

export const FinancialIndependenceTips = [
    {
        id: '1',
        text: '• Start investing early to take advantage of compound interest.'
    },
    {
        id: '2',
        text: '• Live below your means and focus on long-term financial security.'
    },
    {
        id: '3',
        text: '• Seek financial education to make informed investment decisions.'
    }
];


export default function FinancialIndependencePage() {
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
              {FinancialIndependenceTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {FinancialIndependenceDatas.map((item) => (
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
