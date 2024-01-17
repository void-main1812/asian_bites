import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

const index = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full flex justify-start items-center">
        <View className="w-full h-20 px-8 flex flex-row justify-between items-center border-b border-gray-200">
          <View className="flex justify-center items-center">
            <Text className="text-xl font-semibold">Cart</Text>
            <Text className="text-lg font-normal text-gray-400">0 items</Text>
          </View>
          <View className="flex justify-center items-center">
            <Text className="text-xl font-semibold">Total</Text>
            <Text className="text-lg font-normal text-gray-400">0 ₹</Text>
          </View>
        </View>
        <View className="absolute w-full h-full flex items-center justify-center">
          <View className="h-60 w-60 flex justify-center items-center">
            <Image
              source={require("../../../assets/images/illstrations/empty-cart.png")}
              className="h-full w-full opacity-80"
            />
          </View>
          <Text className="text-xl text-gray-400 font-semibold w-80 text-center">
            Come on Add something to your Bowl. Quick!
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
