import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const SocialAnxietyDatas = [
    {
        id: '1',
        title: 'Step 1: Understand Your Social Anxiety Triggers',
        text: 'Recognize situations that make you anxious, such as public speaking or meeting new people. Understanding your triggers helps in managing anxiety.'
    },
    {
        id: '2',
        title: 'Step 2: Practice Exposure in Small Steps',
        text: 'Start by engaging in low-stress social interactions. Gradually increase the difficulty as you become more comfortable, eventually building confidence in larger settings.'
    },
    {
        id: '3',
        title: 'Step 3: Use Breathing Techniques to Stay Calm',
        text: 'When you feel anxiety rising, practice deep breathing to calm your nerves. Techniques like 4-7-8 breathing can help you regain control.'
    },
    {
        id: '4',
        title: 'Step 4: Challenge Negative Thoughts',
        text: 'Social anxiety often involves negative self-talk. Challenge these thoughts by asking if they are realistic and replace them with positive affirmations.'
    },
    {
        id: '5',
        title: 'Step 5: Build Confidence with Practice',
        text: 'Confidence grows through practice. Start small, celebrate each success, and over time, you’ll feel more comfortable in social settings.'
    }
];

export const SocialAnxietyTips = [
    {
        id: '1',
        text: '• Focus on the present moment rather than overthinking past or future interactions.'
    },
    {
        id: '2',
        text: '• Practice positive self-talk and remind yourself of your strengths in social situations.'
    },
    {
        id: '3',
        text: '• Gradually push yourself out of your comfort zone to gain confidence in social interactions.'
    }
];




export default function SocialAnxietyPage() {
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
              {SocialAnxietyTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {SocialAnxietyDatas.map((item) => (
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
