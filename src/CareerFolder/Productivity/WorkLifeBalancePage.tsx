import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
export const WorkLifeBalanceDatas = [
    {
        id: '1',
        title: 'Step 1: Set Clear Boundaries Between Work and Personal Life',
        text: 'Define specific work hours and avoid carrying work into personal time. Set limits on after-hours emails and calls to maintain balance.'
    },
    {
        id: '2',
        title: 'Step 2: Prioritize Self-Care',
        text: 'Make time for physical activity, hobbies, and relaxation. Engaging in activities you enjoy helps recharge your energy and improve overall well-being.'
    },
    {
        id: '3',
        title: 'Step 3: Learn to Say No',
        text: 'Overcommitting can lead to stress and burnout. Set healthy boundaries by saying no to tasks that don’t align with your priorities.'
    },
    {
        id: '4',
        title: 'Step 4: Take Regular Breaks and Vacations',
        text: 'Taking time off from work, even for short breaks, helps maintain long-term productivity and mental clarity.'
    },
    {
        id: '5',
        title: 'Step 5: Create a Daily Wind-Down Routine',
        text: 'End your day with relaxation techniques such as reading, listening to music, or practicing mindfulness to transition smoothly from work to personal time.'
    }
];

export const WorkLifeBalanceTips = [
    {
        id: '1',
        text: '• Use the 80/20 rule: Focus on tasks that yield the most results while avoiding unnecessary workload.'
    },
    {
        id: '2',
        text: '• Plan your day the night before to avoid last-minute stress and improve time management.'
    },
    {
        id: '3',
        text: '• Disconnect from work completely during personal or family time for a healthier mindset.'
    }
];


export default function WorkLifeBalancePage() {
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

             <Image source={require('./images/balance.png')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {WorkLifeBalanceTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {WorkLifeBalanceDatas.map((item) => (
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