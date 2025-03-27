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