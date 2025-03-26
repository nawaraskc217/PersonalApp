import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
export const SelfCompassionData = [
    {
        id: '1',
        title: 'Step 1: Acknowledge Your Emotions',
        text: 'Start by acknowledging your emotions without judgment. Recognize when you are experiencing pain or difficulty, and accept it as part of being human.'
    },
    {
        id: '2',
        title: 'Step 2: Practice Kindness Towards Yourself',
        text: 'Treat yourself with the same kindness and understanding that you would offer a close friend. Be gentle with yourself when facing challenges or mistakes.'
    },
    {
        id: '3',
        title: 'Step 3: Avoid Self-Criticism',
        text: 'Replace harsh self-criticism with more compassionate thoughts. Focus on learning from situations rather than blaming yourself.'
    },
    {
        id: '4',
        title: 'Step 4: Embrace Imperfection',
        text: 'Understand that nobody is perfect. Embrace your imperfections and allow yourself to grow from them rather than feeling shame or inadequacy.'
    },
    {
        id: '5',
        title: 'Step 5: Engage in Self-Care Practices',
        text: 'Prioritize your well-being by engaging in activities that nourish your body, mind, and soul, such as relaxation, mindfulness, and creative expression.'
    }
];

export const SelfCompassionTips = [
    {
        id: '1',
        text: '• Practice speaking kindly to yourself, especially when facing challenges or mistakes.'
    },
    {
        id: '2',
        text: '• Write a letter to yourself as if you were comforting a friend, offering words of encouragement and understanding.'
    },
    {
        id: '3',
        text: '• Create a self-compassion ritual, such as meditation, deep breathing, or positive affirmations, to reinforce self-kindness.'
    }
];



export default function SelfCompassionPage() {
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
              {SelfCompassionTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {SelfCompassionData.map((item) => (
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
