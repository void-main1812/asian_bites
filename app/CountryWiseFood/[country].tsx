import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { food } from "../../data/foodData";
import Card from "../components/Card";

const CountryWiseFood = () => {

  // getting search params
  const { country } = useLocalSearchParams();
  const foodData = food;

  const filteredData = foodData.filter((item) => {
    return item.countryLabel === country;
  });

  const countryName = filteredData[0].countryLabel;

  return (
    <SafeAreaView className="bg-white">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="h-full w-full bg-white">
        <View className=" w-full flex flex-col justify-start items-center">
          {/* Header */}
          <View className="flex flex-row justify-between items-center w-full h-20 border-b border-gray-200">
            <Text className="w-full px-8 text-2xl font-semibold text-lime-950">
              Best {countryName} Foods
            </Text>
          </View>
          {/* Food List */}
          <View className="w-full p-8 pb-40">
            <FlatList
              data={filteredData}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <Card
                  name={item.name}
                  image={item.image}
                  price={item.price}
                  country={item.country}
                  rating={item.rating}
                />
              )}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CountryWiseFood;
