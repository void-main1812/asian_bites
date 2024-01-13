import { Image } from "expo-image";
import { Star } from "lucide-react-native";
import React, { FC } from "react";
import { Text, Touchable, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CardProps {
  name: string;
  image: string;
  price: number;
  country: string;
  rating: number;
}

const Card: FC<CardProps> = ({ name, image, price, country, rating }) => {
  return (
    <TouchableOpacity className="pb-6">
      <View className="w-full flex flex-row space-x-8 justify-between items-center pb-6 border-b border-gray-300">
        <View className="h-36 w-36 rounded-xl overflow-hidden">
          <Image className="h-full w-full" source={image} />
        </View>
        <View className="flex w-full flex-col justify-start items-start space-y-1">
          <Text className="text-2xl font-medium">{name}</Text>
          <View className="flex flex-row justify-center items-center space-x-6">
            <Text className="text-lg text-gray-600">{country}</Text>
            <View className="flex flex-row space-x-2 justify-center items-center">
              <Star color="#F59E0B" fill={"#ff0"} size={16} />
              <Text className="text-lg text-yellow-600">{rating}</Text>
            </View>
          </View>
          <View>
            <Text className="text-lg font-bold text-gray-900">$ {price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
