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