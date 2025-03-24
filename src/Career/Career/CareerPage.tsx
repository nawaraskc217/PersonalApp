import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

const steps = [
  {
    id: '1',
    title: 'Step 1: Identify Your Strengths and Skills',
    text: 'Make a list of all your skills and strengths. Think about what you excel at, whether it\'s analytical thinking, problem-solving, creativity, or leadership. If you’re unsure, ask friends, family, or mentors for their perspective on your strengths.'
  },
  {
    id: '2',
    title: 'Step 2: Explore Your Interests',
    text: 'Your career should align with your interests and passions. Think about activities that excite you and subjects that you enjoy learning about. Consider hobbies, volunteer work, or past experiences that have kept you engaged and motivated.'
  },
  {
    id: '3',
    title: 'Step 3: Research Potential Careers',
    text: 'Explore different careers by reading about job roles, responsibilities, and industry trends. Use online resources like LinkedIn, career websites, and job descriptions to understand what different roles entail.'
  },
  {
    id: '4',
    title: 'Step 4: Gain Experience',
    text: 'Look for internships, part-time jobs, or volunteer opportunities in fields that interest you. Gaining real-world experience will help you decide if a certain career path is right for you. Hands-on experience also helps you build connections and improve your resume.'
  },
  {
    id: '5',
    title: 'Step 5: Set Career Goals',
    text: 'Define your short-term and long-term career goals. Where do you see yourself in five or ten years? Setting clear goals will give you direction and motivation. Break down your goals into smaller, achievable steps, and take consistent action toward them.'
  },
  {
    id: '6',
    title: 'Step 6: Set Career Goals',
    text: 'Define your short-term and long-term career goals. Where do you see yourself in five or ten years? Setting clear goals will give you direction and motivation. Break down your goals into smaller, achievable steps, and take consistent action toward them.'
  }
];

const bulletPoints = [
  {
    id: '1',
    text: '• Make a list of your skills, interests, and passions to figure out how you want to spend your time. Also, consider what you want to be known for after you retire.'
  },
  {
    id: '2',
    text: '• Take a career aptitude test to discover jobs that might be right for you. Then research the responsibilities and day-to-day routines of those jobs.'
  },
  {
    id: '3',
    text: '• Bolster your resume with internships, education, or volunteer gigs. Then, apply for jobs you\'re interested in and ask plenty of questions about the work while you\'re there.'
  }
];

export default function CareerDetails() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>About Me hai</Text>
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 20 }} // Fixes bottom gap
        >
          {/* About Me Section */}
          <View style={styles.aboutContainer}>
            <Image
              source={{ uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=' }}
              style={styles.profileImage}
            />
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {bulletPoints.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {steps.map((item) => (
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
    backgroundColor: '#c3dbca',
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
