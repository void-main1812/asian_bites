import { View, Text } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams } from "expo-router";

const FoodDetails = () => {
  const param = useLocalSearchParams();
  console.log(param);

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="text-4xl text-white">{param.name}</Text>
    </View>
  );
};

export default FoodDetails;
