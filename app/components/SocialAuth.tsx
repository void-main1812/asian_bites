import { View, Text } from "react-native";
import React from "react";
import { Image } from "expo-image";

interface SocialAuthProps {
  backgroundColor: string;
  image: string;
  text: string;
  classname?: string;
}

const SocialAuth: React.FC<SocialAuthProps> = ({
  backgroundColor,
  text,
  image,
  classname,
}) => {
  return (
    <View
      className="w-full py-4 justify-center items-center px-6 mb-5 rounded-lg flex flex-row space-x-4 shadow-2xl"
      style={{
        backgroundColor: backgroundColor,
      }}
    >
      <Image source={image} className="h-6 w-6 aspect-square" />
      <Text className={`text-lg ${classname}`}>{text}</Text>
    </View>
  );
};

export default SocialAuth;
