import { Redirect, Stack, useRouter } from "expo-router";
import { View } from "react-native";
import React, { useEffect } from "react";
import { Text } from "moti";

const index = () => {
  const router = useRouter();

  useEffect(() => {
    const redirect = setTimeout(() => {
      router.push("/(tabs)/home/");
    }, 3000);

    return () => clearTimeout(redirect);
  });
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="h-full w-full bg-white flex justify-center items-center space-y-2">
        <Text
          from={{ opacity: 0, translateY: -50 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1000 }}
          className="text-4xl font-bold text-lime-500"
        >
          Asian Bites
        </Text>
        <Text
          from={{ opacity: 0, translateY: 100 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 500, delay: 800 }}
          className="text-lg font-light text-zinc-800"
        >
          Taste the Authentic Asian Cuisene
        </Text>
      </View>
    </>
  );
};

export default index;
