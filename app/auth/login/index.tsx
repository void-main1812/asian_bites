import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full bg-white">
        <Text>index</Text>
      </View>
    </SafeAreaView>
  );
};

export default index;
