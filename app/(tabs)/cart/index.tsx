import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ticket } from "lucide-react-native";
import { useRouter } from "expo-router";

const index = () => {
  const router = useRouter();

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
        <View className="h-60 w-full p-8 absolute right-0 left-0 bottom-0 flex flex-row justify-center items-start">
          <LinearGradient
            colors={["#a3e635", "#65a30d"]}
            className="w-[70%] rounded-3xl"
          >
            <TouchableOpacity
              onPress={() => router.push("/checkout")}
              className="w-full p-6 h-20 flex justify-center items-center  rounded-3xl"
            >
              <Text className="text-2xl font-semibold text-lime-50">
                Order Now
              </Text>
            </TouchableOpacity>
          </LinearGradient>
          <LinearGradient
            colors={["#f5f5f5", "#d4d4d4"]}
            className="w-[25%] h-20 rounded-3xl flex justify-center items-center overflow-hidden ml-[5%]"
          >
            <TouchableOpacity className="w-full h-full flex justify-center items-center ">
              <Ticket
                size={45}
                className="text-lime-500"
                fill={"#bef264"}
                strokeWidth={1}
              />
            </TouchableOpacity>
          </LinearGradient>
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
