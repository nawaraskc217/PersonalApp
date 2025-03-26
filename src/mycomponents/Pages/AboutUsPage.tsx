import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet, Linking } from "react-native";

const AboutUsPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        {/* <Text style={{ fontSize: 20, fontWeight: 'bold' }}>About Me</Text> */}
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
            I’m a passionate developer with expertise in Cyber Security, Java, Python, and React Native. Currently, I’m focused on mobile app and web development projects. I love solving problems through coding and continuously seek to learn and grow.
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

        {/* Social Media Section */}
        <View style={{ marginBottom: 24, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Connect with Me</Text>
          <View style={styles.socialLinksContainer}>
            <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/nawaraskc2217/')} style={styles.socialLink}>
              <Text style={styles.socialText}>LinkedIn</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Linking.openURL('https://github.com/nawaraskc217')} style={styles.socialLink}>
              <Text style={styles.socialText}>GitHub</Text>
            </TouchableOpacity>
          </View>
        </View>

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
  socialLinksContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialLink: {
    margin: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#3B82F6',
  },
});

export default AboutUsPage;
