import React from "react";
import { KeyboardType, Text, TextInput, View } from "react-native";

interface InputProps {
  placeholder: string;
  keyboardType: KeyboardType;
  onChangeText: () => void;
  label?: string;
  secureTextEntry?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  keyboardType,
  onChangeText,
  label,
  secureTextEntry,
}) => {
  return (
    <View className="w-full gap-y-2">
      {label && (
        <Text className="text-sm w-full text-left text-zinc-800">{label}</Text>
      )}

      <TextInput
        style={{ height: 60 }}
        className="p-4 text-base text-zinc-800 bg-gray-50 border-zinc-300 border focus:border-zinc-500 focus:border-2 rounded-lg w-full mb-4"
        placeholder={placeholder}
        onChange={() => onChangeText}
        keyboardType={keyboardType}
        placeholderTextColor={"#a1a1aa"}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
