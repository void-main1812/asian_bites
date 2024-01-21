import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useLocalSearchParams } from "expo-router";
import { Heart, ShoppingCart, Star, Utensils } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { ScrollView } from "react-native-gesture-handler";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { food } from "../../data/foodData";

const FoodDetails = () => {
  const param = useLocalSearchParams();

  const requiredData = food.find((item) => {
    return item.name === param.name;
  });

  const similarData = food.filter((item) => {
    return item.countryLabel === requiredData?.countryLabel;
  });

  // Todo: Add Similar Food List
  // Todo: Add Animations
  // Todo: Add added to cart and wishlist state

  return (
    <View className="h-full w-full bg-white relative">
      <Image
        source={requiredData?.image}
        className="absolute opacity-30"
        style={{ height: hp("104%"), width: wp("100%") }}
        blurRadius={10}
      />
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView>
        <View
          className="bg-transparent justify-start items-start relative"
          style={{ height: hp("100%"), width: wp("100%") }}
        >
          <View className="h-full w-full p-6 space-y-6">
            <View className="h-auto w-full aspect-square rounded-3xl overflow-hidden bg-gray-80 mt-4">
              <Image source={requiredData?.image} className="h-full w-full" />
            </View>
            <View className="rounded-3xl overflow-hidden">
              <View className="w-full p-6 rounded-3xl flex justify-start items-start space-y-3 bg-white/50">
                <Text className="w-full text-3xl font-bold pb-2 border-b border-gray-300 text-lime-900">
                  {requiredData?.name}
                </Text>
                <Text className="text-lg font-light text-neutral-500">
                  {requiredData?.description}
                </Text>
              </View>
            </View>
            <View
              className="w-full flex flex-row justify-between space-x-4"
              style={{ height: hp("20%") }}
            >
              <View
                className="rounded-3xl bg-amber-50 flex justify-center items-center relative"
                style={{ width: wp("50%"), height: hp("20%") }}
              >
                <CircularProgress
                  value={Number(requiredData?.rating)}
                  radius={80}
                  duration={1000}
                  progressValueColor={"#fbbf24"}
                  showProgressValue={false}
                  activeStrokeColor="#fbbf24"
                  inActiveStrokeOpacity={0.2}
                  inActiveStrokeWidth={15}
                  activeStrokeWidth={15}
                  maxValue={5}
                  titleColor={"#fbbf24"}
                  titleStyle={{ fontWeight: "bold" }}
                />
                <View className="absolute h-full w-full flex justify-center items-center">
                  <Star
                    color="#fcd34d"
                    fill={"#fde68a"}
                    size={45}
                    strokeWidth={0}
                  />
                  <Text className="text-2xl font-bold text-amber-400">
                    {requiredData?.rating}
                  </Text>
                </View>
              </View>
              <View
                className="h-full flex justify-between items-center"
                style={{ width: wp("35%") }}
              >
                <TouchableOpacity className="h-[45%] rounded-2xl w-full bg-lime-950 flex justify-center items-center">
                  <ShoppingCart size={50} className="text-lime-400" />
                </TouchableOpacity>
                <TouchableOpacity className="h-[45%] rounded-2xl w-full bg-white/50 flex justify-center items-center">
                  <Heart size={50} className="text-neutral-600" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.5)"]}
        className="absolute  p-8 bottom-0 w-full h-10"
      >
        <TouchableOpacity className="absolute right-8 left-8 bottom-8 h-20 bg-lime-400 flex flex-row justify-center items-center space-x-4 rounded-3xl">
          <Utensils size={30} className="text-lime-700" />
          <Text className="text-2xl font-black text-lime-700">Order Now</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default FoodDetails;
