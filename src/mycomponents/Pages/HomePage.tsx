import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

interface MyProps {
  navigation: any;
}

export default function HomePage({ navigation }: MyProps) {
  return (
    <ScrollView style={styles.scrollContainer}>
      <View style={styles.container}>
        {/* Image Section */}
        <Image
          source={require('../assets/eye.jpg')} // Replace with your own image URL
          style={styles.image}
        />

        {/* Heading Section */}
        <Text style={styles.heading}>Inspire your futureself!</Text>
        <Text style={styles.subHeading}>Get Inspired, Get Moving!</Text>

        {/* Motivational Quote */}
        <View style={{ marginBottom: 20, marginTop: 20 }}>
          <Text style={styles.quote}>
            "The best way to predict the future is to create it." - Abraham Lincoln
          </Text>
        </View>

        {/* Buttons to Navigate */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#6a98ff' }]}
            onPress={() => navigation.navigate('ServicesPage')}
          >
            <Text style={styles.buttonText}>Discover Solutions</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#ffcc6a' }]}
            onPress={() => navigation.navigate('AboutUsPage')}
          >
            <Text style={styles.buttonText}>Know More About Us?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#ff6b81' }]}
            onPress={() => navigation.navigate('BlogsPage')}
          >
            <Text style={styles.buttonText}>Read Blogs/Articles?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    marginBottom: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: 'cover',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
    letterSpacing: 1,
    textShadowColor: '#f0f0f0',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 10,
  },
  subHeading: {
    fontSize: 22,
    color: '#666',
    marginBottom: 0,
    textAlign: 'center',
    fontStyle: 'italic',
    textShadowColor: '#fff',  // Adding a light text shadow
  
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
    textShadowOffset: { width: 1, height: 1 },  // Slight shadow to make it pop
    textShadowRadius: 20,  // Slight blur effect
      // lineHeight: 1.5,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 15,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5, // For Android shadow
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
