import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const MusicGenresDatas = [
    {
        id: '1',
        title: 'Step 1: Understand the Roots of Each Genre',
        text: 'Explore the history and cultural background of different music genres to better understand their evolution and characteristics.'
    },
    {
        id: '2',
        title: 'Step 2: Listen to a Variety of Artists',
        text: 'Immerse yourself in the sounds of different genres by listening to a wide range of artists. This helps you appreciate the diversity within each genre.'
    },
    {
        id: '3',
        title: 'Step 3: Learn the Key Elements of Each Genre',
        text: 'Each genre has specific elements that define its sound, such as rhythms, instrumentation, and lyrical themes. Identify these elements and experiment with them in your own music.'
    },
    {
        id: '4',
        title: 'Step 4: Incorporate Different Influences into Your Music',
        text: 'Blend elements from various genres into your own music to create something unique. Experiment with mixing different styles and sounds.'
    },
    {
        id: '5',
        title: 'Step 5: Collaborate with Artists from Different Genres',
        text: 'Collaboration is a great way to learn from others and broaden your musical horizons. Work with artists from various genres to gain fresh perspectives and ideas.'
    }
];

export const MusicGenresTips = [
    {
        id: '1',
        text: '• Explore the roots of jazz, blues, and classical music to understand the evolution of modern genres.'
    },
    {
        id: '2',
        text: '• Experiment with genres outside your comfort zone to expand your creative boundaries.'
    },
    {
        id: '3',
        text: '• Stay open to new sounds, rhythms, and ideas from diverse musical cultures.'
    }
];


export default function MusicGenresPage() {
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
              {MusicGenresTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {MusicGenresDatas.map((item) => (
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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
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
