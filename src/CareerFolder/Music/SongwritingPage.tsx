import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const SongwritingDatas = [
    {
        id: '1',
        title: 'Step 1: Find Your Inspiration',
        text: 'Songwriting starts with inspiration. Whether it’s a personal experience, a story, or an emotion, find something that moves you to create.'
    },
    {
        id: '2',
        title: 'Step 2: Write the Lyrics',
        text: 'Begin by writing lyrics that reflect the theme or mood of the song. Focus on expressing your emotions clearly, and don’t be afraid to get creative with language.'
    },
    {
        id: '3',
        title: 'Step 3: Develop a Melody',
        text: 'Create a melody that fits the lyrics. Play around with different notes and rhythms until you find a melody that feels right for the song.'
    },
    {
        id: '4',
        title: 'Step 4: Structure Your Song',
        text: 'Most songs follow a structure, such as verse-chorus-verse. Experiment with different structures to find what works best for your song.'
    },
    {
        id: '5',
        title: 'Step 5: Refine Your Song',
        text: 'Once your song is written, spend time revising and refining it. Adjust the lyrics, melody, and structure to make sure everything flows together cohesively.'
    }
];

export const SongwritingTips = [
    {
        id: '1',
        text: '• Write every day, even if it’s just a few lines or a melody. Consistency helps improve creativity.'
    },
    {
        id: '2',
        text: '• Don’t be afraid to experiment with different sounds, genres, and themes to find your unique style.'
    },
    {
        id: '3',
        text: '• Collaborate with other musicians or songwriters to get fresh perspectives and ideas.'
    }
];


export default function SongwritingPage() {
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
              {SongwritingTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {SongwritingDatas.map((item) => (
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