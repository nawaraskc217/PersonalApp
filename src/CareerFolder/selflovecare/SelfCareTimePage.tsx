import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const SelfCareTimeData = [
  { 
      id: '1', 
      title: 'Step 1: Recognize the Importance of Alone Time', 
      text: 'Understand that taking time for yourself is vital for your mental and emotional well-being. It allows you to recharge, reflect, and gain perspective, which can help reduce stress and improve overall health.' 
  },
  { 
      id: '2', 
      title: 'Step 2: Schedule Regular Self-Care Time', 
      text: 'Make self-care a priority by scheduling it into your routine. Whether it’s a daily break or a weekly self-care day, ensure that you dedicate time for activities that nourish your mind, body, and soul.' 
  },
  { 
      id: '3', 
      title: 'Step 3: Engage in Activities You Enjoy', 
      text: 'Take part in activities that bring you joy and relaxation. This could be anything from reading, walking, painting, or practicing yoga. Choose activities that help you unwind and feel refreshed.' 
  },
  { 
      id: '4', 
      title: 'Step 4: Set Boundaries', 
      text: 'Create boundaries to protect your alone time. This means saying no when needed and setting limits on how much time you give to others, so you can maintain your personal space and energy.' 
  },
  { 
      id: '5', 
      title: 'Step 5: Reflect and Recharge', 
      text: 'Take time to reflect on your needs and emotions. Alone time is a great opportunity for introspection, self-discovery, and emotional healing, which can enhance your self-awareness and well-being.' 
  }
];

export const SelfCareTimeTips = [
  { 
      id: '1', 
      text: '• Practice mindfulness during your alone time to enhance relaxation and reduce stress.' 
  },
  { 
      id: '2', 
      text: '• Don’t feel guilty for taking time for yourself. Remember, self-care is essential for maintaining healthy relationships and productivity.' 
  },
  { 
      id: '3', 
      text: '• Disconnect from digital devices during your self-care time to fully recharge and be present in the moment.' 
  }
];

export default function SelfCareTimePage() {
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
              {SelfCareTimeTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {SelfCareTimeData.map((item) => (
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
    // color:'red'
  },
});
