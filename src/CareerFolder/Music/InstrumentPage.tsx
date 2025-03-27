import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const InstrumentDatas = [
    {
        id: '1',
        title: 'Step 1: Choose the Right Instrument for You',
        text: 'Before learning an instrument, consider your interests, the genre of music you enjoy, and the time commitment required. Research different instruments to find one that fits your preferences.'
    },
    {
        id: '2',
        title: 'Step 2: Start with Basic Techniques',
        text: 'Learn the basics first: how to hold the instrument, basic posture, and essential techniques. This foundation will make learning more advanced skills easier.'
    },
    {
        id: '3',
        title: 'Step 3: Learn Simple Songs to Build Confidence',
        text: 'Start by playing simple songs or exercises that gradually increase in difficulty. This will help build muscle memory and give you a sense of accomplishment.'
    },
    {
        id: '4',
        title: 'Step 4: Practice Consistently',
        text: 'Set aside time each day to practice. Consistency is key to improving your skills and developing proficiency with the instrument.'
    },
    {
        id: '5',
        title: 'Step 5: Seek Feedback and Guidance',
        text: 'Consider taking lessons, whether online or in-person, and seek feedback from experienced players. Constructive criticism can significantly accelerate your learning process.'
    }
];

export const InstrumentTips = [
    {
        id: '1',
        text: '• Start with basic exercises to develop finger strength and dexterity, which are important for all instruments.'
    },
    {
        id: '2',
        text: '• Don’t rush; take your time to master each skill before moving on to more advanced techniques.'
    },
    {
        id: '3',
        text: '• Practice regularly, even if it’s just for a few minutes a day, to build muscle memory and improve your performance.'
    }
];


export default function InstrumentPage() {
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
              {InstrumentTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {InstrumentDatas.map((item) => (
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
