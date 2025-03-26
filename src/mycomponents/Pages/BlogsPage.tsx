import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Linking } from 'react-native';
const webapp="https://www.hostinger.com/tutorials/web-hosting-security?utm_medium=ppc&utm_campaign=Generic-Tutorials-DSA|NT:Se|LO:Other-ASIA-t1&gad_source=1&gclid=Cj0KCQjwy46_BhDOARIsAIvmcwNBeYnoStOdCRqDN3gHu1aAEvdLrOc2GdvU19KFLp5cpiuvvFOFHPwaAm6VEALw_wcB"


const BlogsPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Blog / Articles</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Blog 1 */}
        <View style={styles.blogContainer}>
          <Text style={styles.blogTitle}>How to Secure Your Web App</Text>
          <Text style={styles.blogDescription}>
            Learn the key security measures to protect your web applications from potential attacks. 
            This blog covers topics like encryption, authentication, and best practices for securing your web app.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL(webapp)}  // Replace with actual blog URL
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>

        {/* Blog 2 */}
        <View style={styles.blogContainer}>
          <Text style={styles.blogTitle}>Stay Motivated in Tech</Text>
          <Text style={styles.blogDescription}>
            It's easy to get overwhelmed in the fast-paced world of technology. This blog provides tips and strategies to stay motivated 
            and continue learning, even when things get tough.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL('https://www.youtube.com/watch?v=44en4a5fPZw')}  // Replace with actual blog URL
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>

        {/* Blog 3 */}
        <View style={styles.blogContainer}>
          <Text style={styles.blogTitle}>Best Practices in Python</Text>
          <Text style={styles.blogDescription}>
            Discover the best coding practices for Python developers. From code readability to performance optimization, this blog
            covers essential tips to help you write clean, efficient, and maintainable Python code.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL('https://www.appacademy.io/blog/python-coding-best-practices')}  // Replace with actual blog URL
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>

        {/* Blog 4 */}
        <View style={styles.blogContainer}>
          <Text style={styles.blogTitle}>Mastering Cyber Security</Text>
          <Text style={styles.blogDescription}>
            Cybersecurity is a crucial aspect of modern technology. This blog discusses various techniques to enhance your cybersecurity 
            skills, including understanding threats, vulnerabilities, and protection mechanisms.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL('https://dev.to/grapplingdev/mastering-cyber-security-e70')}  // Replace with actual blog URL
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>


           {/* Blog5 */}
           <View style={styles.blogContainer}>
          <Text style={styles.blogTitle}>How to find the perfect college</Text>
          <Text style={styles.blogDescription}>
          Start by self-reflecting on your academic interests, desired learning environment, and career goals, then research colleges that align with these preferences, considering factors like location, campus culture, and academic programs.
          </Text>
          <TouchableOpacity 
            style={styles.readMoreButton}
            onPress={() => Linking.openURL('https://bigfuture.collegeboard.org/plan-for-college/find-your-fit/college-search-step-by-step')}  // Replace with actual blog URL
          >
            <Text style={styles.readMoreText}>Read More</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>

      {/* Footer */}
      <View style={{ padding: 16, backgroundColor: '#F3F4F6', marginTop: 'auto', borderTopWidth: 1, borderTopColor: '#E5E7EB' }}>
        <Text style={{ textAlign: 'center', fontSize: 14, color: '#6B7280' }}>
          © 2025 Nawaras KC | All Rights Reserved
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  blogContainer: {
    marginBottom: 24,
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  blogDescription: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 12,
  },
  readMoreButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  readMoreText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default BlogsPage;
