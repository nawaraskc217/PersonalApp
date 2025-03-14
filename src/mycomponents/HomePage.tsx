import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { Button, Image, TouchableOpacity } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* Image Section */}
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=' }}  // Replace with your own image URL
          style={styles.image}
        />

        {/* Heading Section */}
        <Text style={styles.heading}>Inspire your futureself!</Text>
        <Text style={styles.subHeading}>Get Inspired, Get Moving!</Text>

        {/* Motivational Quote */}
        <Text style={styles.quote}>
          "The best way to predict the future is to create it." - Abraham Lincoln
        </Text>

        {/* Buttons to Navigate */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ServicesPage')}>
            <Text style={styles.buttonText}>Discover Solutions</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AboutUsPage')}>
            <Text style={styles.buttonText}>Know More About Us?</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  subHeading: {
    fontSize: 20,
    color: 'gray',
    marginBottom: 20,
    textAlign: 'center',
  },
  quote: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});