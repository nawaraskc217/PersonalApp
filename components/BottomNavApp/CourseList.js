import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CourseList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Course List Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CourseList;
