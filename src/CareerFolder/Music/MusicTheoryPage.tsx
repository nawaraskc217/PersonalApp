import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const MusicTheoryDatas = [
    {
        id: '1',
        title: 'Step 1: Learn the Basics of Musical Notation',
        text: 'Understand how music is written by learning to read sheet music. Familiarize yourself with notes, rests, time signatures, and clefs.'
    },
    {
        id: '2',
        title: 'Step 2: Understand Scales and Chords',
        text: 'Learn about major and minor scales, and how chords are built from them. Understanding scales will help you improve your improvisation and songwriting.'
    },
    {
        id: '3',
        title: 'Step 3: Study Key Signatures and Harmony',
        text: 'Key signatures determine the notes used in a piece of music. Learning harmony will help you understand how chords and melodies work together.'
    },
    {
        id: '4',
        title: 'Step 4: Explore Rhythm and Meter',
        text: 'Rhythm is the timing of music, and meter is the organization of beats into patterns. Learn to count and keep time to develop a strong sense of rhythm.'
    },
    {
        id: '5',
        title: 'Step 5: Experiment with Musical Expression',
        text: 'Learn how dynamics, articulation, and tempo affect the emotional impact of music. Experiment with phrasing and how to express different feelings through music.'
    }
];

export const MusicTheoryTips = [
    {
        id: '1',
        text: '• Practice reading sheet music regularly to improve your sight-reading skills.'
    },
    {
        id: '2',
        text: '• Break down complex pieces into smaller sections to understand their musical structure better.'
    },
    {
        id: '3',
        text: '• Learn basic chord progressions, as they are foundational to both songwriting and performance.'
    }
];


export default function MusicTheoryPage() {
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
              {MusicTheoryTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {MusicTheoryDatas.map((item) => (
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
