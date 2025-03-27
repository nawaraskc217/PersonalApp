import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';

const webapp = "https://www.hostinger.com/tutorials/web-hosting-security?utm_medium=ppc&utm_campaign=Generic-Tutorials-DSA|NT:Se|LO:Other-ASIA-t1&gad_source=1&gclid=Cj0KCQjwy46_BhDOARIsAIvmcwNBeYnoStOdCRqDN3gHu1aAEvdLrOc2GdvU19KFLp5cpiuvvFOFHPwaAm6VEALw_wcB";

const BlogsPage = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Explore the Blogs</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Blog 1 */}
        <View style={styles.blogCard}>
          <Text style={styles.blogTitle}>How to Secure Your Web App</Text>
          <Text style={styles.blogDescription}>
            Learn the key security measures to protect your web applications from potential attacks. 
            This blog covers topics like encryption, authentication, and best practices for securing your web app.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL(webapp)}
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>

        {/* Blog 2 */}
        <View style={styles.blogCard}>
          <Text style={styles.blogTitle}>Stay Motivated in Tech</Text>
          <Text style={styles.blogDescription}>
            It's easy to get overwhelmed in the fast-paced world of technology. This blog provides tips and strategies to stay motivated and continue learning, even when things get tough.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=44en4a5fPZw')}
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>

        {/* Blog 3 */}
        <View style={styles.blogCard}>
          <Text style={styles.blogTitle}>Best Practices in Python</Text>
          <Text style={styles.blogDescription}>
            Discover the best coding practices for Python developers. From code readability to performance optimization, this blog covers essential tips to help you write clean, efficient, and maintainable Python code.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL('https://www.appacademy.io/blog/python-coding-best-practices')}
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>

        {/* Blog 4 */}
        <View style={styles.blogCard}>
          <Text style={styles.blogTitle}>Mastering Cyber Security</Text>
          <Text style={styles.blogDescription}>
            Cybersecurity is a crucial aspect of modern technology. This blog discusses various techniques to enhance your cybersecurity skills, including understanding threats, vulnerabilities, and protection mechanisms.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL('https://dev.to/grapplingdev/mastering-cyber-security-e70')}
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>

        {/* Blog 5 */}
        <View style={styles.blogCard}>
          <Text style={styles.blogTitle}>How to Find the Perfect College</Text>
          <Text style={styles.blogDescription}>
            Start by self-reflecting on your academic interests, desired learning environment, and career goals, then research colleges that align with these preferences, considering factors like location, campus culture, and academic programs.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL('https://bigfuture.collegeboard.org/plan-for-college/find-your-fit/college-search-step-by-step')}
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2025 Nawaras KC | All Rights Reserved</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  blogCard: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
  },
  blogTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
  },
  blogDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 22,
  },
  readMoreButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
  },
  readMoreText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  footer: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginTop: 'auto',
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  footerText: {
    fontSize: 14,
    color: '#555',
  },
});

export default BlogsPage;
