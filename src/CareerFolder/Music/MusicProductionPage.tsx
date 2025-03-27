import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const MusicProductionDatas = [
    {
        id: '1',
        title: 'Step 1: Set Up Your Recording Environment',
        text: 'Ensure you have a quiet, soundproofed area for recording. Invest in quality microphones, headphones, and audio interfaces to get the best sound quality.'
    },
    {
        id: '2',
        title: 'Step 2: Learn the Basics of Digital Audio Workstations (DAWs)',
        text: 'Familiarize yourself with DAWs like Pro Tools, Ableton Live, or Logic Pro. These software platforms will be your primary tool for recording, mixing, and editing music.'
    },
    {
        id: '3',
        title: 'Step 3: Record Your Tracks',
        text: 'When recording, ensure proper microphone placement and sound quality. Start with a rough demo track and gradually build up the layers.'
    },
    {
        id: '4',
        title: 'Step 4: Mix Your Tracks',
        text: 'Mixing involves balancing the various elements of your song, such as adjusting levels, panning, and applying effects like reverb and EQ to create a cohesive sound.'
    },
    {
        id: '5',
        title: 'Step 5: Master Your Song',
        text: 'Mastering is the final step in the production process. This ensures your song sounds polished and professional across different playback systems.'
    }
];

export const MusicProductionTips = [
    {
        id: '1',
        text: '• Learn how to use EQ, compression, and reverb to shape your sound and make your tracks stand out.'
    },
    {
        id: '2',
        text: '• Record multiple takes of each part to ensure you get the best possible performance.'
    },
    {
        id: '3',
        text: '• Don’t forget to listen to your song on different speakers and headphones to ensure it sounds good everywhere.'
    }
];


export default function MusicProductionPage() {
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
              {MusicProductionTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {MusicProductionDatas.map((item) => (
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
