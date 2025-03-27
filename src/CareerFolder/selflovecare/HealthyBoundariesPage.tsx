import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const HealthyBoundariesData = [
  {
      id: '1',
      title: 'Step 1: Understand the Importance of Boundaries',
      text: 'Boundaries are essential for maintaining your well-being and emotional health. They allow you to prioritize your needs and protect your mental space. Start by recognizing areas in your life where boundaries are necessary.'
  },
  {
      id: '2',
      title: 'Step 2: Identify Your Personal Limits',
      text: 'Take time to reflect on your emotional, mental, and physical limits. Knowing where you feel drained or overwhelmed will help you set clear boundaries that protect your well-being.'
  },
  {
      id: '3',
      title: 'Step 3: Communicate Your Boundaries Clearly',
      text: 'Express your boundaries to others in a direct, calm, and assertive way. Let them know what behaviors or requests are not acceptable and what you need to feel respected.'
  },
  {
      id: '4',
      title: 'Step 4: Be Consistent with Your Boundaries',
      text: 'Consistency is key to maintaining healthy boundaries. Stay firm in your decisions and do not compromise on your needs. This will reinforce your boundaries and encourage respect from others.'
  },
  {
      id: '5',
      title: 'Step 5: Learn to Say No',
      text: 'Saying no is a powerful tool in maintaining healthy boundaries. Practice saying no without guilt and prioritize your well-being over pleasing others.'
  }
];

export const HealthyBoundariesTips = [
  {
      id: '1',
      text: '• Take small steps in setting boundaries and gradually work your way up to more challenging situations.'
  },
  {
      id: '2',
      text: '• Setting boundaries with compassion allows others to understand your needs without feeling rejected.'
  },
  {
      id: '3',
      text: '• Regularly check in with yourself to ensure your boundaries are still aligned with your needs and values.'
  }
];


export default function HealthyBoundariesPage() {
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
            <Image source={require('./resume.jpg')} style={styles.profileImage} />
            <Text style={styles.title}>How to Build the Resume?</Text>
            <Text style={styles.authors}>Ref. Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {HealthyBoundariesTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {HealthyBoundariesData.map((item) => (
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