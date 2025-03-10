import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView, TouchableOpacity } from "react-native";

const solutions = [
  { id: 1, title: "How to stay productive while working remotely?", description: "Learn practical strategies to improve your workflow." },
  { id: 2, title: "Best financial habits for young professionals", description: "Tips to manage your money effectively." },
  { id: 3, title: "Mental health tips for a balanced life", description: "Improve your well-being with these daily habits." }
];
export default function ServicesPage() {
  return (
    <ScrollView>

      <View style={{ flex: 1, backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 24 }}>
        {/* Header */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hi, Beautiful people 👋</Text>
          {/* <Bell size={24} color="#000" /> */}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Featured Section */}
          <View style={{ padding: 16, marginBottom: 16, borderRadius: 12, backgroundColor: '#3B82F6', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Today's Motivation</Text>
            <Text style={{ color: 'white', marginTop: 8, fontStyle: 'italic' }}>“Success is not final; failure is not fatal: It is the courage to continue that counts.”</Text>
          </View>

          {/* Categories */}
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Categories</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 16 }}>
            {['Productivity', 'Career', 'Finance', 'Mental Health'].map((category, index) => (
              <TouchableOpacity key={index} style={{ backgroundColor: '#D1D5DB', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 50, marginRight: 8 }}>
                <Text style={{ fontSize: 14, fontWeight: '600' }}>{category}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Trending Solutions */}
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Trending Solutions</Text>
          {solutions.map((item) => (
            <View key={item.id} style={{ padding: 16, marginBottom: 16, borderRadius: 12, backgroundColor: 'white', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 4, elevation: 2 }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>{item.title}</Text>
              <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 4 }}>{item.description}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})