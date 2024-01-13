import { View, Text } from "react-native";
import React, { FC } from "react";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { TouchableOpacity } from "react-native-gesture-handler";

interface FoodCategoryProps {
  name: string;
  image: string;
}

const FoodCategory: FC<FoodCategoryProps> = ({ name, image }) => {
  return (
    <TouchableOpacity>
      <View className="h-40 w-40 mr-6 bg-gray-100 rounded-2xl relative overflow-hidden">
        <Image
          source={image}
          className="h-full w-full"
          contentFit="contain"
          contentPosition="center"
        />
        <LinearGradient
          colors={["transparent", "rgba(0,0,0,0.5)"]}
          className="absolute bottom-0 left-0 h-40 w-40"
        />
        <Text className="absolute text-xl left-4 bottom-4 text-white font-semibold">
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCategory;
