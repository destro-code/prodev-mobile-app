import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  const handleJoinHere = () => router.push("/Sign");
  const handleSignIn = () => router.push("/Sign");
  const handleContinue = () => router.push("/(home)");

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={[styles.background, { backgroundColor: '#1a1a1a' }]}>
          {/* company Logo */}
          <View style={styles.companyLogo}>
            <Text style={[styles.textLarge, { color: 'white' }]}>LOGO</Text>
          </View>

          <View style={styles.textGroup}>
            <Text style={styles.textLarge}>
              Find all your favorite places here
            </Text>
            <Text style={styles.textSmall}>The best price for over 2</Text>
            <Text style={styles.textSmall}>Million properties worldwide</Text>
          </View>

          {/* Button */}
          <View style={styles.buttonGroup}>
            <TouchableOpacity style={styles.button} onPress={handleJoinHere}>
              <Text style={{...styles.textSmall, color: "black"}}>Join Here</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.transparentButton} onPress={handleSignIn}>
              <Text style={styles.textSmall}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity 
            style={styles.navigationPrompt} 
            onPress={handleContinue}
          >
            <Text style={{color:"white", fontWeight:"bold", fontSize:20}}>
              Continue to Home 
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    height: Dimensions.get("window").height,
  },
  companyLogo: {
    width: "100%",
    alignItems: "center",
    padding: 20,
    marginBottom: 50,
  },
  textGroup: {
    alignItems: "center",
  },
  textLarge: {
    color: "white",
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 12,
  },
  textSmall: {
    color: "white",
    fontSize: 18,
    fontWeight: "200",
    textAlign: "center",
  },
  transparentButton: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    flex: 1,
  },
  button: {
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 40,
    paddingVertical: 15,
    paddingHorizontal: 5,
    alignItems: "center",
    fontSize: 20,
    backgroundColor: "white",
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  navigationPrompt:{
    alignItems: "center",
    paddingVertical: 20,
  }
});