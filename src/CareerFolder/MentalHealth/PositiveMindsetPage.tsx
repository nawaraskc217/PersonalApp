import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const PositiveMindsetDatas = [
    {
        id: '1',
        title: 'Step 1: Recognize Negative Thoughts',
        text: 'Pay attention to negative or self-critical thoughts. Identifying them is the first step toward overcoming them.'
    },
    {
        id: '2',
        title: 'Step 2: Challenge Negative Beliefs',
        text: 'Ask yourself if the negative thought is true or helpful. Often, these thoughts are based on assumptions rather than facts.'
    },
    {
        id: '3',
        title: 'Step 3: Replace Negative Thoughts with Positive Affirmations',
        text: 'Counter negative thoughts by replacing them with positive affirmations. Focus on your strengths and achievements.'
    },
    {
        id: '4',
        title: 'Step 4: Practice Self-Compassion',
        text: 'Treat yourself with kindness when you experience setbacks. Speak to yourself as you would to a close friend.'
    },
    {
        id: '5',
        title: 'Step 5: Surround Yourself with Positivity',
        text: 'Be mindful of your environment and the people you spend time with. Surround yourself with positive influences that uplift you.'
    }
];

export const PositiveMindsetTips = [
    {
        id: '1',
        text: '• Practice reframing negative situations in a more positive light to improve your mindset.'
    },
    {
        id: '2',
        text: '• Spend time with positive and supportive people who encourage your growth.'
    },
    {
        id: '3',
        text: '• Engage in activities that make you feel good about yourself and remind you of your worth.'
    }
];



export default function PositiveMindsetPage() {
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
              {PositiveMindsetTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {PositiveMindsetDatas.map((item) => (
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
