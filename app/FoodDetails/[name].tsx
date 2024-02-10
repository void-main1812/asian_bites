import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useLocalSearchParams } from "expo-router";
import { Heart, ShoppingCart, Utensils } from "lucide-react-native";
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
        className="absolute opacity-20"
        style={{ height: hp("104%"), width: wp("100%") }}
        blurRadius={10}
      />
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView>
        <View
          className="bg-transparent justify-start items-start relative h-full mb-32"
          style={{ width: wp("100%") }}
        >
          <View className="h-full w-full p-6 space-y-6">
            <View className="h-auto w-full aspect-square rounded-3xl overflow-hidden bg-gray-80 mt-4 shadow-2xl shadow-black">
              <Image source={requiredData?.image} className="h-full w-full" />
            </View>
            <View className="rounded-3xl overflow-hidden">
              <View className="w-full p-6 rounded-3xl flex justify-start items-start space-y-3 bg-white/50">
                <View className="w-full flex flex-row justify-between items-center pb-2 border-b border-gray-300">
                  <View className="w-[60%] justify-start items-start">
                    <Text className="text-2xl font-semibold text-lime-900">
                      {requiredData?.name}
                    </Text>
                  </View>
                  <Text className="text-lg font-semibold text-zinc-800">
                    ${requiredData?.price}
                  </Text>
                </View>
                <Text className="text-lg font-normal text-neutral-400">
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
                style={{ width: wp("50%") }}
              >
                <CircularProgress
                  value={Number(requiredData?.rating)}
                  radius={80}
                  duration={1000}
                  progressValueColor={"#fbbf24"}
                  activeStrokeColor="#fbbf24"
                  inActiveStrokeOpacity={0.2}
                  inActiveStrokeWidth={15}
                  activeStrokeWidth={15}
                  maxValue={5}
                  title="Rating"
                  titleColor={"#fbbf24"}
                  titleStyle={{ fontWeight: "bold" }}
                  progressFormatter={(value: number) => {
                    "worklet";

                    return value.toFixed(2); // 2 decimal places
                  }}
                />
              </View>
              <View
                className="h-full flex justify-between items-center"
                style={{ width: wp("35%") }}
              >
                <TouchableOpacity className="h-[45%] rounded-2xl w-full bg-lime-950 flex justify-center items-center">
                  <ShoppingCart
                    size={50}
                    strokeWidth={1}
                    className="text-lime-400"
                  />
                </TouchableOpacity>
                <TouchableOpacity className="h-[45%] rounded-xl w-full bg-white/50 flex justify-center items-center">
                  <Heart
                    size={50}
                    strokeWidth={1}
                    className="text-neutral-600"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <LinearGradient
        colors={["transparent", "rgba(255,255,255,0.8)"]}
        className="absolute  p-8 bottom-0 w-full h-10"
      >
        <LinearGradient
          colors={["#a3e635", "#65a30d"]}
          className="absolute right-8 left-8 bottom-8 h-20 rounded-3xl"
        >
          <TouchableOpacity className="h-full w-full flex flex-row justify-center items-center space-x-4 ">
            <Utensils size={25} className="text-lime-50" />
            <Text className="text-xl font-semibold text-lime-50">
              Order Now
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </LinearGradient>
    </View>
  );
};

export default FoodDetails;
