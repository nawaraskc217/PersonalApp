import { Image, StyleSheet, Text, View, ScrollView,TouchableOpacity, FlatList } from 'react-native';
import React from 'react';


export default function CareerDetails() {
  return (
     <View style={styles.container}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>About Me</Text>
          </View>
    
          <ScrollView showsVerticalScrollIndicator={false}>
            {/* About Me Section */}
            <View style={styles.aboutContainer}>
              {/* Profile Picture */}
              <Image
                source={{
                  uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=',
                }}
                style={styles.profileImage}
              />
              <Text style={styles.title}>How to Choose a Career Path?</Text>
    
              <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
    
              <Text style={styles.sectionTitle}>Things You Should Know</Text>
    
              <View style={styles.bulletContainer}>
                <Text style={styles.bulletPoint}>
                  • Make a list of your skills, interests, and passions to figure out how you want to spend your time. Also, consider what you want to be known for after you retire.
                </Text>
                <Text style={styles.bulletPoint}>
                  • Take a career aptitude test to discover jobs that might be right for you. Then research the responsibilities and day-to-day routines of those jobs.
                </Text>
                <Text style={styles.bulletPoint}>
                  • Bolster your resume with internships, education, or volunteer gigs. Then, apply for jobs you're interested in and ask plenty of questions about the work while you're there.
                </Text>
              </View>
    
              {/* Step 1 */}
              <Text style={styles.stepTitle}>Step 1: Identify Your Strengths and Skills</Text>
              <Text style={styles.stepText}>
                Make a list of all your skills and strengths. Think about what you excel at, whether it's analytical thinking, problem-solving, creativity, or leadership.
              </Text>
              <Text style={styles.stepText}>
                If you’re unsure, ask friends, family, or mentors for their perspective on your strengths.
              </Text>
    
              {/* Step 2 */}
              <Text style={styles.stepTitle}>Step 2: Explore Your Interests</Text>
              <Text style={styles.stepText}>
                Your career should align with your interests and passions. Think about activities that excite you and subjects that you enjoy learning about.
              </Text>
              <Text style={styles.stepText}>
                Consider hobbies, volunteer work, or past experiences that have kept you engaged and motivated.
              </Text>
    
              {/* Step 3 */}
              <Text style={styles.stepTitle}>Step 3: Research Potential Careers</Text>
              <Text style={styles.stepText}>
                Explore different careers by reading about job roles, responsibilities, and industry trends. 
              </Text>
              <Text style={styles.stepText}>
                Use online resources like LinkedIn, career websites, and job descriptions to understand what different roles entail.
              </Text>
    
              {/* Step 4 */}
              <Text style={styles.stepTitle}>Step 4: Gain Experience</Text>
              <Text style={styles.stepText}>
                Look for internships, part-time jobs, or volunteer opportunities in fields that interest you. Gaining real-world experience will help you decide if a certain career path is right for you.
              </Text>
              <Text style={styles.stepText}>
                Hands-on experience also helps you build connections and improve your resume.
              </Text>
    
              {/* Step 5 */}
              <Text style={styles.stepTitle}>Step 5: Set Career Goals</Text>
              <Text style={styles.stepText}>
                Define your short-term and long-term career goals. Where do you see yourself in five or ten years? Setting clear goals will give you direction and motivation.
              </Text>
              <Text style={styles.stepText}>
                Break down your goals into smaller, achievable steps, and take consistent action toward them.
              </Text>
            </View>
          </ScrollView>
        </View>
  )
}

const styles = StyleSheet.create({

    subtitle: {
      fontSize: 14,
      color: 'gray',
      marginTop: 4,
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
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
      backgroundColor:'#c3dbca',
     
    },
    bulletPoint: {
      fontSize: 14,
      marginBottom: 4,
       fontWeight:'600'
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