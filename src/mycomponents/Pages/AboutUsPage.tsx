import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Linking } from "react-native";

const AboutUsPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About Me</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* About Me Section */}
        <View style={{ marginBottom: 24, alignItems: 'center' }}>
          <Image
            source={require('../assets/nkc.png')}
            style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 16 }}
          />
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Hello, I'm Nawaras KC</Text>
          <Text style={{ fontSize: 14, color: '#6B7280', textAlign: 'center' }}>
            I am a passionate developer with a background in Cyber Security, Java, Python, and React JS. 
            Currently, I am working on projects related to mobile app development and web applications. 
            I enjoy solving problems through coding, and I'm always looking for ways to learn and grow. 
            In my free time, I like to explore music, travel, and dive into scientific concepts like quantum physics and astronomy.
          </Text>
        </View>

        {/* Why I build this Mobile app */}
        <View style={{ marginBottom: 24, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Why I build this Mobile app?</Text>
          <Text style={{ fontSize: 14, color: '#6B7280', textAlign: 'center' }}>
            To inspire people because we have access to the internet, and we can get information with a click. 
            But, can we trust all the information?
          </Text>
        </View>

        {/* Skills Section */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8, textAlign: 'center' }}>My Skills</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skill}>💻 Java</Text>
            <Text style={styles.skill}>🔐 Cyber Security</Text>
            <Text style={styles.skill}>🐍 Python</Text>
            <Text style={styles.skill}>⚛️ React JS</Text>
            <Text style={styles.skill}>📱 React Native</Text>
          </View>
        </View>

        {/* Achievements Section */}
        <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8, textAlign: 'center' }}>My Achievements</Text>
          <View style={styles.achievementContainer}>
            <Text style={styles.achievement}>🏆 BSc. CSIT Graduate</Text>
            <Text style={styles.achievement}>📜 Certified in Cyber Security from Udemy</Text>
            <Text style={styles.achievement}>🌍 Contributed to global volunteering projects</Text>
          </View>
        </View>

        {/* Testimonials Section */}
        {/* <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8, textAlign: 'center' }}>Testimonials</Text>
          <Text style={{ fontSize: 14, color: '#6B7280', textAlign: 'center' }}>
            "Nawarask is a driven and talented developer. His work ethic and problem-solving skills are exceptional." 
            — Colleague, Software Developer
          </Text>
        </View> */}

        {/* Download Resume Section */}
        {/* <View style={{ marginBottom: 24, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Download My Resume</Text>
          <TouchableOpacity 
            style={styles.downloadButton}
            onPress={() => Linking.openURL('https://example.com/resume.pdf')}  // Replace with your resume link
          >
            <Text style={styles.downloadText}>Download Resume</Text>
          </TouchableOpacity>
        </View> */}

        {/* Blog Section */}
        {/* <View style={{ marginBottom: 24 }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8, textAlign: 'center' }}>Blog / Articles</Text>
          <Text style={{ fontSize: 14, color: '#6B7280', textAlign: 'center' }}>
            Check out my latest technical blogs on software development and cyber security:
          </Text>
          <View style={styles.projectContainer}>
            <TouchableOpacity 
              style={styles.projectLink}
              onPress={() => Linking.openURL('https://example.com/blog1')}  // Replace with actual blog URL
            >
              <Text style={{ color: '#3B82F6' }}>Blog 1: How to Secure Your Web App</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.projectLink}
              onPress={() => Linking.openURL('https://example.com/blog2')}  // Replace with actual blog URL
            >
              <Text style={{ color: '#3B82F6' }}>Blog 2: Best Practices in Python</Text>
            </TouchableOpacity>
          </View>
        </View> */}

        {/* Footer */}
        <View style={{ padding: 16, backgroundColor: '#F3F4F6', marginTop: 'auto', borderTopWidth: 1, borderTopColor: '#E5E7EB' }}>
          <Text style={{ textAlign: 'center', fontSize: 14, color: '#6B7280' }}>
            © 2025 Nawaras KC | All Rights Reserved
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  skill: {
    fontSize: 16,
    margin: 8,
    color: '#3B82F6',
  },
  achievementContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  achievement: {
    fontSize: 16,
    color: '#4B5563',
    marginBottom: 8,
  },
  downloadButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  downloadText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  projectContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  projectLink: {
    marginBottom: 8,
  },
});

export default AboutUsPage;
