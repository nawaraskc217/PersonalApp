import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FirstPage = ({ navigation }) => {
  const [seconds, setSeconds] = useState(0); // Start from 0

  useEffect(() => {
    if (seconds >= 10) return; // Stop counting at 10

    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // Increase the counter
    }, 1000); // Update every second 1000

    return () => clearInterval(interval); // Cleanup
  }, [seconds]); // Runs when `seconds` changes

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SecondPage'); // Navigate when count reaches 10
    }, 10); // 10000 seconds delay

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>First Page</Text>
      <Text style={styles.countdownText}>{seconds}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  countdownText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});

export default FirstPage;
