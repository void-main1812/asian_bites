import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const CountryWiseFood = () => {
  const country = useLocalSearchParams();
  console.log(country);

  return <View></View>;
};

export default CountryWiseFood;
