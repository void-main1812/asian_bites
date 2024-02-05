import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  const paymentMethods = [
    {
      name: "paytm",
    },
    {
      name: "Google Pay",
    },
    {
      name: "Pay-Pal",
    },
    {
      name: "Apple Pay",
    },
  ];

  return (
    <SafeAreaView className="bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="h-full w-full bg-white justify-start items-start">
        {/* Header */}
        <View className="h-20 w-full border-b border-gray-200 justify-center items-start px-8">
          <Text className="text-xl font-semibold">Payment Details</Text>
        </View>
        {/* Main Body */}
        <View className="h-full w-full p-8 justify-start items-start gap-y-12 relative">
          {/* UIP payment methods */}
          <View className="justify-start items-start space-y-4">
            <Text className="text-2xl font-bold">
              Choose Your payment Method
            </Text>
            <View className="w-full flex-wrap flex-row justify-start items-center">
              {paymentMethods.map((item) => (
                <View
                  key={item.name}
                  className=" px-4 py-2 rounded-md bg-neutral-100 justify-center items-center mr-3 mb-3"
                >
                  <Text className="text-neutral-800 text-base">{item.name}</Text>
                </View>
              ))}
            </View>
          </View>
          {/* Divider */}
          <View className="w-full relative justify-center items-center ">
            <View className="w-full h-0.5 bg-zinc-200 rounded-full" />
            <Text className="absolute bg-white text-gray-400 p-2">Or</Text>
          </View>
          {/* Card Payment Options */}
          <View className=" w-full justify-start items-start space-y-6">
            <Text className="text-xl font-semibold text-zinc-800">
              Pay Using Card
            </Text>
            {/* Card Mockup */}
            <View
              className="w-full rounded-xl shadow-xl shadow-black bg-zinc-800 p-6 justify-between items-start"
              style={{ height: hp("25%") }}
            >
              <View className="w-full flex justify-between items-start">
                <Text className="text-gray-400 text-base">Name</Text>
                <Text className="text-white text-lg underline">
                  Sourabh kumar Singh
                </Text>
              </View>
              <View className="w-full flex justify-between items-start">
                <Text className="text-white text-2xl">XXXX XXXX XXXX 1234</Text>
              </View>
              <View className="flex flex-row w-[50%] justify-start items-center">
                <View className="w-full flex justify-between items-start">
                  <Text className="text-gray-400 text-base">Expiry Date</Text>
                  <Text className="text-white text-xl">XX/XX</Text>
                </View>
                <View className="w-full flex justify-between items-start">
                  <Text className="text-gray-400 text-base">CVV</Text>
                  <Text className="text-white text-xl">XXX</Text>
                </View>
              </View>
            </View>
            {/* Total Amount */}
            <View className="justify-start items-start space-y-1">
              <Text className="text-xl font-medium text-zinc-800">
                Total Amount
              </Text>
              <Text className="text-xl font-normal text-zinc-500 ">$30.85</Text>
            </View>
          </View>
        </View>
        <View className="overflow-hidden absolute bottom-6 w-full h-20 px-6">
          <LinearGradient
            colors={["#a3e635", "#65a30d"]}
            className="w-full h-full rounded-3xl "
          >
            <TouchableOpacity className="h-full w-full justify-center items-center">
              <Text className="text-2xl text-white font-semibold">
                Continue Payment
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;
