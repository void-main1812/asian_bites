import CheckBox from "expo-checkbox";
import { Link, Stack, useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";
import React, { useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Input from "../../components/Input";
import SocialAuth from "../../components/SocialAuth";

const index = () => {
  const [checked, setChecked] = useState(false);
  const [pressed, setPressed] = useState(false);
  const router = useRouter();

  function handlePress() {
    router.push("/(tabs)/home");
    setPressed(true);
  }

  return (
    <SafeAreaView className="bg-white">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <ScrollView className="h-full w-full bg-white">
        <View className="h-full w-full justify-start items-start">
          <View
            className="w-full border-b border-zinc-200 mb-8 flex flex-row-reverse justify-between items-center px-8"
            style={{ height: 80 }}
          >
            <Text className="text-xl font-semibold text-zinc-900">
              Register to Continue
            </Text>
            <Link href="/home">
              <ArrowLeft size={32} className="text-zinc-500" />
            </Link>
          </View>
          <View
            className="w-full px-8 justify-center items-center gap-y-12"
            // style={{ height: hp("100%") - 150 }}
          >
            <View className="w-full justify-center items-center gap-y-2">
              <Text className="text-2xl font-semibold">Asian Bites</Text>
              <Text className="w-[60%] text-center text-sm text-zinc-400">
                Welcome to Asian Bites. Please register yourself to continue.
              </Text>
            </View>
            <View className="w-full">
              <Input
                keyboardType="default"
                placeholder="johndoe@provider.com"
                onChangeText={() => {}}
                label="Enter your E-mail"
              />
              <Input
                keyboardType={"default"}
                secureTextEntry={!checked}
                placeholder="jiNilai45@ksiM"
                onChangeText={() => {}}
                label="Enter your Password"
              />
              <Input
                keyboardType={"default"}
                secureTextEntry={!checked}
                placeholder="jiNilai45@ksiM"
                onChangeText={() => {}}
                label="Re-Enter your Password"
              />
              <View className="w-full px-4 flex flex-row justify-start items-center">
                <View className="flex flex-row gap-x-2">
                  <CheckBox
                    value={checked}
                    onValueChange={setChecked}
                    color={checked ? "#27272a" : undefined}
                    className="rounded-md"
                  />
                  <Text>Show Password</Text>
                </View>
              </View>
            </View>
            <View className="w-full">
              <TouchableOpacity
                className="w-full bg-lime-500 p-4 rounded-lg justify-center items-center h-16"
                activeOpacity={0.8}
                onPress={() => handlePress()}
              >
                {pressed ? (
                  <ActivityIndicator size="small" color="#fff" />
                ) : (
                  <Text className="text-white text-lg">Continue</Text>
                )}
              </TouchableOpacity>
            </View>
            {/* Divider */}
            <View className="w-full relative justify-center items-center px-16 ">
              <View className="w-full h-0.5 bg-zinc-200 rounded-full" />
              <Text className="absolute bg-white text-gray-400 p-2">Or</Text>
            </View>
            {/* Social Auth Buttons */}
            <View className="w-full">
              <SocialAuth
                backgroundColor="#e5e5e5"
                text="Sign in with Google"
                image={require("../../../assets/images/auth/google.png")}
              />
              <SocialAuth
                backgroundColor="#18181b"
                text="Sign in with Google"
                image={require("../../../assets/images/auth/github.png")}
                classname="text-white"
              />
            </View>
          </View>
          <View className="w-full justify-center items-center flex flex-row my-4">
            <Text className="text-zinc-400">Already Have an Account?</Text>
            <Link className="ml-4" href={"/auth/login/"}>
              <Text className="font-semibold text-lime-600 underline">
                Log-In Now.
              </Text>
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;
