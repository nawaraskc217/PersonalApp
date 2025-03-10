import React from "react";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

const solutions = [
  { id: 1, title: "How to stay productive while working remotely?", description: "Learn practical strategies to improve your workflow." },
  { id: 2, title: "Best financial habits for young professionals", description: "Tips to manage your money effectively." },
  { id: 3, title: "Mental health tips for a balanced life", description: "Improve your well-being with these daily habits." }
];

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
          {/* Profile Picture */}
          <Image
            source={{ uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=' }} // Replace with your image URL or local asset
            style={{ width: 120, height: 120, borderRadius: 60, marginBottom: 16 }}
          />
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: 8 }}>Hello, I'm Nawaras KC</Text>
          <Text style={{ fontSize: 14, color: '#6B7280' }}>
            I am a passionate developer with a background in Cyber Security, Java, Python, and React JS. Currently, I am working on projects related to mobile app development and web applications. I enjoy solving problems through coding, and I'm always looking for ways to learn and grow. In my free time, I like to explore music, travel, and dive into scientific concepts like quantum physics and astronomy.
          </Text>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={{ padding: 16, backgroundColor: '#F3F4F6', marginTop: 'auto', borderTopWidth: 1, borderTopColor: '#E5E7EB' }}>
        <Text style={{ textAlign: 'center', fontSize: 14, color: '#6B7280' }}>
          © 2025 Nawaras KC | All Rights Reserved
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8 }}>
          <TouchableOpacity style={{ marginRight: 16 }}>
            <Text style={{ color: '#3B82F6' }}>LinkedIn</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#3B82F6' }}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AboutUsPage;
