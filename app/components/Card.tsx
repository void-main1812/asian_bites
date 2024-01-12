import React, { FC } from "react";
import { Text, View } from "react-native";
import { Image } from "expo-image";
import { BlurView } from "expo-blur";

interface CardProps {
  name: string;
  price: number;
  image: any;
}

const Card: FC<CardProps> = ({ name, price, image }) => {
  const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";
  return (
    <View className="h-72 w-[50%] p-2 bg-transparent relative">
      <View className="h-full w-full rounded-lg overflow-hidden">
        <Image
          source={image}
          placeholder={blurhash}
          contentFit="cover"
          contentPosition={"center"}
          style={{ height: "100%", width: "100%", borderRadius: 10 }}
        />
        <BlurView
          intensity={60}
          tint="light"
          className="h-20 w-full rounded-lg absolute bottom-0 px-3 flex flex-row justify-between items-center"
        >
          <Text className="text-white text-xl font-bold">{name}</Text>
          <Text className="p-2 bg-white rounded-md text-xs">${price}</Text>
        </BlurView>
      </View>
    </View>
  );
};

export default Card;
