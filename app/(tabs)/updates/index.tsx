import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const index = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full bg-white flex justify-start items-start relative ">
        {/* Header */}
        <View className="border-b border-gray-200 w-full px-8 h-20 flex justify-center items-start">
          <Text className="text-2xl font-semibold">Updates (0)</Text>
        </View>
        {/* Case 1 no notifications */}
        <View className="h-full w-full items-center justify-center space-y-4 absolute right-0 top-0">
          <Image
            source={require("../../../assets/images/illstrations/bell.png")}
            className="h-60 w-60 bg-blend-luminosity opacity-80 "
          />
          <Text className="text-xl text-gray-400 font-semibold w-80 text-center">
            There are no recent updates for you.
          </Text>
        </View>
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.5)"]}
          className="h-20 w-full absolute bottom-0"
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
