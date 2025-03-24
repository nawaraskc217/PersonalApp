import { Image, StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import React from 'react';
const ResumeData = [
  {
    id: '1',
    title: 'Step 1: Choose a Resume Format',
    text: 'Select the right resume format that suits your experience and career goals. Common formats include Chronological, Functional, and Combination resumes. The Chronological format is ideal if you have a strong work history, the Functional format highlights your skills, and the Combination format blends both.'
  },
  {
    id: '2',
    title: 'Step 2: Add Your Contact Information',
    text: 'Begin your resume by including your full name, phone number, email address, and LinkedIn profile or portfolio link (if applicable). Make sure your contact information is easily visible at the top of the resume.'
  },
  {
    id: '3',
    title: 'Step 3: Write a Resume Summary or Objective',
    text: 'Write a brief summary or objective that highlights your career goals and what you bring to the role. If you have experience, use a summary to showcase your skills. If you’re starting out, an objective can show your aspirations and why you’re a good fit for the job.'
  },
  {
    id: '4',
    title: 'Step 4: List Your Skills',
    text: 'Include a list of skills relevant to the job you’re applying for. These can be both hard skills (e.g., coding, data analysis) and soft skills (e.g., communication, leadership). Focus on skills that match the job description.'
  },
  {
    id: '5',
    title: 'Step 5: Include Your Work Experience',
    text: 'List your previous jobs in reverse chronological order, starting with your most recent position. Include job title, company name, location, dates of employment, and a description of your responsibilities and achievements. Focus on accomplishments that show your impact, and use bullet points for clarity.'
  },
  {
    id: '6',
    title: 'Step 6: Add Your Education',
    text: 'List your highest level of education first, including the degree, institution, and graduation date. You can also include relevant coursework, academic achievements, or certifications to highlight your qualifications.'
  },
  {
    id: '7',
    title: 'Step 7: Highlight Certifications and Awards',
    text: 'Include any certifications, awards, or honors you’ve received that are relevant to the job. This can help you stand out from other candidates by showcasing your additional qualifications.'
  },
  {
    id: '8',
    title: 'Step 8: Tailor Your Resume for Each Job',
    text: 'Customize your resume for each job you apply to by emphasizing skills and experiences that align with the job description. Use keywords from the job posting to pass through Applicant Tracking Systems (ATS) and to appeal to recruiters.'
  },
  {
    id: '9',
    title: 'Step 9: Proofread and Edit Your Resume',
    text: 'Before submitting your resume, carefully proofread it for grammar and spelling errors. Make sure the formatting is consistent, and check that the information is accurate. A polished resume shows professionalism and attention to detail.'
  }
];

const thingsYouShouldKnow = [
  {
    id: '1',
    text: '• Your resume should be clear, concise, and free of errors. Avoid long paragraphs, and focus on bullet points to make your achievements stand out.'
  },
  {
    id: '2',
    text: '• Tailoring your resume for each job application is crucial. Use keywords from the job description to ensure your resume resonates with hiring managers and passes through Applicant Tracking Systems (ATS).'
  },
  {
    id: '3',
    text: '• Keep your resume to one page if you have less than 10 years of experience. For more experienced professionals, a two-page resume is acceptable.'
  },
  {
    id: '4',
    text: '• Quantify your achievements where possible. Use numbers, percentages, and specific examples to demonstrate the impact you’ve made in previous roles.'
  },
  {
    id: '5',
    text: '• A professional email address is essential. Avoid using nicknames or unprofessional handles. Ideally, use your first and last name in the email address.'
  },
  {
    id: '6',
    text: '• Focus on your most recent and relevant experiences. If you’ve had multiple jobs, prioritize those that align most closely with the job you’re applying for.'
  },
  {
    id: '7',
    text: '• Don’t include personal details such as age, marital status, or social security number. These are unnecessary and could lead to discrimination.'
  },
  {
    id: '8',
    text: '• Always include contact information, even if you’ve already provided it in the header. It should be easy for recruiters to find.'
  },
  {
    id: '9',
    text: '• Keep the design clean and simple. Use professional fonts, avoid excessive colors, and ensure there’s enough white space to make the resume easy to read.'
  }
];


export default function ResumeDetails() {
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerText}>About Me</Text>
        </View>

        <ScrollView 
          showsVerticalScrollIndicator={false} 
          contentContainerStyle={{ paddingBottom: 20 }} // Fixes bottom gap
        >
          {/* About Me Section */}
          <View style={styles.aboutContainer}>
            <Image
              source={{ uri: 'https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=' }}
              style={styles.profileImage}
            />
            <Text style={styles.title}>How to Choose a Career Path?</Text>
            <Text style={styles.authors}>Co-authored by Lauren Krasny and Sophia Bell</Text>
            <Text style={styles.sectionTitle}>Things You Should Know</Text>
            <View style={styles.bulletContainer}>
              {thingsYouShouldKnow.map((item) => (
                <Text key={item.id} style={styles.bulletPoint}>{item.text}</Text>
              ))}
            </View>
          </View>

          {/* Career Steps */}
          {steps.map((item) => (
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
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
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
    backgroundColor: '#c3dbca',
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
    // color:'red'
  },
});
