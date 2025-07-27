import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '@/styles/_joinstyle'
import { MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { FACEBOOKLOGO, GOOGLELOGO } from '@/constants'

export default function Join() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      {/* Top Icons */}
      <View style={styles.iconsection}>
        <MaterialIcons name="arrow-back-ios" size={24} onPress={() => router.back()} />
        <MaterialIcons name="more-vert" size={24} />
      </View>

      {/* Title */}
      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join Now</Text>
        <Text style={styles.subText}>Create an account to get started</Text>
      </View>

      {/* Form */}
      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Name</Text>
          <TextInput placeholder="Enter full name" style={styles.formControl} />
        </View>
        <View>
          <Text style={styles.formLabel}>Email Address</Text>
          <TextInput placeholder="Enter your email" style={styles.formControl} />
        </View>
        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput placeholder="Enter your password" secureTextEntry style={styles.passwordControl} />
            <MaterialIcons name="visibility-off" size={24} />
          </View>
        </View>
      </View>

      {/* Join Button */}
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Join</Text>
      </TouchableOpacity>

      {/* Divider */}
      <View style={styles.dividerGroup}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Login */}
      <View style={styles.secondaryButtonGroup}>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={GOOGLELOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Image source={FACEBOOKLOGO} />
          <Text style={styles.secondaryButtonText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Signin Redirect */}
      <View style={styles.signupgroup}>
        <Text style={styles.signupTitleText}>Already have an account? </Text>
        <TouchableOpacity onPress={() => router.push('signin')}>
          <Text style={styles.signupSubTitleText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
