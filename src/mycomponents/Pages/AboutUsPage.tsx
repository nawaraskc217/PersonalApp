import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Linking } from "react-native";
import Animated, { FadeInUp } from 'react-native-reanimated';

const AboutUsPage = () => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Profile Section */}
        <Animated.View entering={FadeInUp.duration(800)} style={styles.profileContainer}>
          <Image source={require("../assets/nkc.png")} style={styles.profileImage} />
          <Text style={styles.nameText}>Hello, I'm Nawaras KC</Text>
          <Text style={styles.bioText}>
            Passionate developer with expertise in Cyber Security, Java, Python, and React Native. I love solving problems through coding and continuously seek to learn and grow.
          </Text>
        </Animated.View>

        {/* About App Section */}
        <Animated.View entering={FadeInUp.duration(1000)} style={styles.card}>
          <Text style={styles.sectionTitle}>Why I Built This App?</Text>
          <Text style={styles.sectionText}>
            To inspire people because we have access to the internet, and we can get information with a click. But can we trust all the information?
          </Text>
        </Animated.View>

        {/* Skills Section */}
        <Animated.View entering={FadeInUp.duration(1200)} style={styles.card}>
          <Text style={styles.sectionTitle}>My Skills</Text>
          <View style={styles.skillsContainer}>
            {['💻 Java', '🔐 Cyber Security', '🐍 Python', '⚛️ React JS', '📱 React Native'].map((skill, index) => (
              <Text key={index} style={styles.skill}>{skill}</Text>
            ))}
          </View>
        </Animated.View>

        {/* Achievements Section */}
        <Animated.View entering={FadeInUp.duration(1400)} style={styles.card}>
          <Text style={styles.sectionTitle}>My Achievements</Text>
          {['🏆 BSc. CSIT Graduate', '📜 Certified in Cyber Security from Udemy', '🌍 Contributed to global volunteering projects'].map((achieve, index) => (
            <Text key={index} style={styles.achievement}>{achieve}</Text>
          ))}
        </Animated.View>

        {/* Social Media Section */}
        <Animated.View entering={FadeInUp.duration(1600)} style={styles.card}>
          <Text style={styles.sectionTitle}>Connect with Me</Text>
          <View style={styles.socialLinksContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/nawaraskc2217/')} style={styles.socialButton}>
              <Text style={styles.socialText}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/nawaraskc217')} style={styles.socialButton}>
              <Text style={styles.socialText}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: '#f1f5f9', // Light background color for the entire page
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Slight white background for profile card
    borderRadius: 16,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 5,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    borderWidth: 4,
    borderColor: "#fff",
  },
  nameText: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1e3c72', // Darker color for name
    marginBottom: 8,
  },
  bioText: {
    fontSize: 16,
    color: '#4b5563',
    textAlign: 'center',
    paddingHorizontal: 12,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.9)", // Lighter card background for contrast
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3c72',  // Dark text for titles
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#6b7280',  // Subtle gray color for content
    textAlign: 'center',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 8,
  },
  skill: {
    fontSize: 18,
    margin: 10,
    color: '#f59e0b',  // Golden color for skills
    fontWeight: '500',
  },
  achievement: {
    fontSize: 16,
    color: '#10b981',  // Green color for achievements
    marginBottom: 10,
    textAlign: 'center',
  },
  socialLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  socialButton: {
    backgroundColor: '#3b82f6',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
  },
  socialText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AboutUsPage;
