import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "@/styles/_mainstyle";
import { HEROLOGO } from "@/constants";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={HEROLOGO}
          style={{ width: 120, height: 120, resizeMode: "contain" }}
        />
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Welcome Back</Text>
        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Please sign in to continue
          </Text>
        </View>
      </View>

      {/* Form Section */}
      <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.formInput}  // Use consistent styling
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 8,
            padding: 10,
          }}
        />
      </View>

      {/* Button Section */}
      <View style={{ marginHorizontal: 20, marginTop: 30 }}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonPrimaryText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
