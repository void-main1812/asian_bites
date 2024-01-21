import { LinearGradient } from "expo-linear-gradient";
import {
  Eye,
  KeyRound,
  MapPinned,
  Pencil,
  Sparkles,
  UserRound,
} from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full bg-white flex justify-start items-start">
        {/* Header */}
        <View className="border-b border-gray-200 w-full px-8 h-20 flex justify-center items-start">
          <Text className="text-2xl font-semibold">Settings</Text>
        </View>
        <ScrollView className="h-[200%] w-full">
          <View className="h-full w-full px-8 py-14 space-y-12">
            <View className="flex flex-row justify-start space-x-8 items-center">
              {/* User Profile Picture */}
              <View className="relative h-28 w-28">
                <View className="h-28 w-28 bg-zinc-800 rounded-2xl flex justify-center items-center">
                  <UserRound className="text-white" size={60} strokeWidth={1} />
                </View>
                <View className="absolute -top-1 -right-1 bg-white p-2 rounded-lg">
                  <Pencil size={15} className="text-zinc-800" />
                </View>
              </View>
              {/* User Description i.e. name and email id */}
              <View className="flex justify-start items-start space-y-2 w-64">
                <Text
                  className="text-3xl font-medium text-zinc-800 "
                  numberOfLines={1}
                >
                  Sourabh Singh
                </Text>
                <Text className="text-sm text-zinc-500 font-light">
                  sourabhsinghredmi@gmail.com
                </Text>
              </View>
            </View>
            {/* Password */}
            <View className="flex justify-start items-start space-y-4 ">
              <View className="flex flex-row justify-start items-center space-x-4">
                <Text>
                  <KeyRound
                    size={24}
                    className="text-zinc-800"
                    strokeWidth={1}
                  />
                </Text>
                <Text className="text-lg font-light text-zinc-800">
                  Password
                </Text>
              </View>
              <View className="w-full h-16 bg-lime-50 px-4 flex flex-row justify-between items-center rounded-xl">
                <Text>**********</Text>
                <Eye size={24} className="text-zinc-800" strokeWidth={1} />
              </View>
              <Text className="text-sm font-medium text-lime-700 underline ">
                Change Password
              </Text>
            </View>
            {/* Delivery Address */}
            <View className="flex justify-start items-start space-y-4">
              <View className="flex flex-row space-x-4 justify-center items-center">
                <Text>
                  <MapPinned
                    size={24}
                    className="text-zinc-800"
                    strokeWidth={1}
                  />
                </Text>
                <Text className="text-lg font-light text-zinc-800">
                  Default Delivery Address
                </Text>
              </View>
              <View className="px-4 py-6 relative flex items-start justify-start rounded-xl space-y-2 w-full bg-lime-50">
                <Text className="text-2xl font-semibold text-zinc-800">
                  Road Name, House No.
                </Text>
                <Text className="text-base font-light text-zinc-500">
                  City, State, Country
                </Text>
                <View className="absolute -top-2 -right-1 bg-white p-2 rounded-lg">
                  <Pencil size={20} strokeWidth={1} className="text-zinc-800" />
                </View>
              </View>
            </View>
            {/* Theming */}
            <View className="flex justify-start items-start space-y-4 pb-40">
              <View className="flex flex-row space-x-4">
                <Text>
                  <Sparkles
                    size={24}
                    strokeWidth={1}
                    className="text-zinc-800"
                  />
                </Text>
                <Text className="text-lg font-light text-zinc-800">
                  Preferred Theme
                </Text>
              </View>
              <View className="flex flex-row space-x-4 w-full">
                <View className="flex flex-row justify-center items-center rounded-xl space-x-4 py-2 px-4 bg-zinc-100">
                  <View className="h-6 w-6 rounded-full bg-zinc-900" />
                  <Text>Classy</Text>
                </View>
                <View className="flex flex-row justify-center items-center rounded-xl space-x-4 py-2 px-4 bg-zinc-100">
                  <View className="h-6 w-6 rounded-full bg-lime-400" />
                  <Text>Organic</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.5)"]}
          className="h-20 w-full absolute bottom-0"
        />
      </View>
    </SafeAreaView>
  );
};

export default index;
