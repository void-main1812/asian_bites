import { View, Text } from "react-native";
import React, { FC } from "react";
import { icons } from "lucide-react-native";

interface TabIconProps {
  tabIcons: keyof typeof icons;
  props: any;
}

const LucideIcon: FC<TabIconProps> = ({ tabIcons, props }) => {
  const LucideIcon = icons[tabIcons];

  return (
    <View className="h-8 w-8 flex justify-center items-center">
      <LucideIcon
        {...props}
        color={props.focused ? "#4d7c0f" : "#fff"}
        size={props.focused ? 30 : 25}
      />
    </View>
  );
};

export default LucideIcon;
