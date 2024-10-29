import {StyleSheet,ScrollView,Image,Text,TouchableOpacity,View,} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Title from "../components/Title";
import SignUpForm from "../components/SignUpForm";
import PrimaryButton from "../components/PrimaryButton";
import SocialButton from "../components/SocialButton";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = () => {};

  const handleGoogleSignIn = () => {};

  const handleFacebookSignIn = () => {};

  const handleLoginNavigation = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require("../assets/logo.png")}
        style={styles.logo}
        resizeMode="contain"
      />
      <Title>Welcome Back 👋</Title>
      <Text>
        <Text style={styles.subtext}>to </Text>
        <Text style={styles.carz}>CARZ</Text>
      </Text>
      <Text style={styles.gristext}>
        Log in to your account using email or social networks
      </Text>
      <SignUpForm />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <PrimaryButton onPressButton={handleLoginNavigation}>SignUp</PrimaryButton>
      <Text style={styles.gristext}>Or continue with social account</Text>
      <View style={styles.socialButtonsContainer}>
        <SocialButton
          onPressButton={handleGoogleSignIn}
          backgroundColor="#fff"
          logo={require("../assets/google-logo.png")}
        >
          Google
        </SocialButton>
        <SocialButton
          onPressButton={handleFacebookSignIn}
          backgroundColor="#fff"
          logo={require("../assets/facebook-logo.png")}
        >
          Facebook
        </SocialButton>
      </View>
      <Text>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={handleLoginNavigation}>
          <Text style={styles.text}> Login</Text>
        </TouchableOpacity>
      </Text>
    </ScrollView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  subtext: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000",
  },
  carz: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#9acd32",
  },
  logo: {
    marginTop: 20,
    width: 150,
    height: 110,
  },
  gristext: {
    color: "#d3d3d3",
    fontSize: 15,
    width: "85%",
    textAlign: "center",
    marginBottom: 10,
  },
  forgot: {
    color: "#9acd32",
    alignSelf: "flex-end",
    marginLeft: "50%",
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 10,
    marginBottom: 10,
  },
  text: {
    color: "#9acd32",
  },
});
