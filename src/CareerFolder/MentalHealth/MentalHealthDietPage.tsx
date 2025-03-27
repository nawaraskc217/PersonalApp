import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';

export const MentalHealthDietDatas = [
    {
        id: '1',
        title: 'Step 1: Eat a Balanced Diet Rich in Nutrients',
        text: 'Consume a variety of nutrient-rich foods like fruits, vegetables, whole grains, and lean proteins. These provide the necessary vitamins and minerals to support mental health.'
    },
    {
        id: '2',
        title: 'Step 2: Incorporate Omega-3 Fatty Acids',
        text: 'Omega-3 fatty acids, found in foods like fish, walnuts, and flaxseeds, are essential for brain health and can help reduce symptoms of depression and anxiety.'
    },
    {
        id: '3',
        title: 'Step 3: Stay Hydrated',
        text: 'Dehydration can negatively affect mood and cognitive function. Aim to drink plenty of water throughout the day to maintain hydration and mental clarity.'
    },
    {
        id: '4',
        title: 'Step 4: Limit Caffeine and Sugar Intake',
        text: 'Excessive caffeine and sugar can lead to energy crashes and mood swings. Opt for healthier alternatives to maintain stable energy levels and mental well-being.'
    },
    {
        id: '5',
        title: 'Step 5: Consider Supplements If Necessary',
        text: 'If your diet lacks certain nutrients, consider taking supplements like vitamin D or B-complex vitamins. Consult a healthcare professional before starting any supplement regimen.'
    }
];

export const MentalHealthDietTips = [
    {
        id: '1',
        text: '• Choose whole foods over processed ones for better mental and physical health.'
    },
    {
        id: '2',
        text: '• Avoid overeating, as it can lead to sluggishness and a negative impact on mood.'
    },
    {
        id: '3',
        text: '• Focus on a balanced diet to maintain energy levels and mental clarity throughout the day.'
    }
];


export default function MentalHealthDietPage() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }} // Fixes bottom gap
        >
          {/* About Me Section */}
          <View style={styles.aboutContainer}>

            <Image source={require('./career.png')} style={styles.profileImage} />
            
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {MentalHealthDietTips.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

      
          {MentalHealthDietDatas.map((item) => (
            <View key={item.id}>
              <Text style={styles.stepTitle}>{item.title}</Text>
              <Text style={styles.stepText}>{item.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,  // Ensures it takes full height
    backgroundColor: 'white',
  },
  container: {
    flex: 1,  // Ensures it takes full height
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
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    resizeMode: 'cover',
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
    backgroundColor: '#b86314',
    padding: 8,
    borderRadius: 8,
  },
  bulletPoint: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '600',
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
