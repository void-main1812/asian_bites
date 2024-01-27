import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Star } from "lucide-react-native";
import React, { FC } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface CardProps {
  name: string;
  image: string;
  price: number;
  country: string;
  rating: number;
  params?: any;
}

const Card: FC<CardProps> = ({
  name,
  image,
  price,
  country,
  rating,
  params,
}) => {
  const router = useRouter();
  

  return (
    <TouchableOpacity
      className="pb-6 rounded-xl overflow-hidden"
      onPress={() =>
        router.push({
          pathname: `/FoodDetails/${name}`,
          params: { name: name, params: params },
        })
      }
    >
      <View className="w-full rounded-xl overflow-hidden flex flex-row space-x-5 justify-between items-center relative">
        <View className="h-36 w-36 rounded-xl overflow-hidden">
          <Image className="h-full w-full" source={image} />
        </View>
        <View className="flex w-full flex-col justify-start items-start space-y-1">
          <View className="flex justify-start items-start w-[40%]">
            <Text className="text-2xl font-medium">{name}</Text>
          </View>
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
        <Image
          source={image}
          className="absolute h-full w-full opacity-10"
          blurRadius={4}
          style={{ zIndex: -1 }}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
