import { Menu, Search } from "lucide-react-native";
import { Text, TextInput, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { foodData } from "../../data/data";
import Card from "../components/Card";

const renderItem = ({ item }: { item: any }) => (
  <Card name={item.name} price={item.price} image={item.image} key={item.id} />
);

export default function TabOneScreen() {
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full bg-white p-8 ">
        <View className="h-full w-full flex flex-col justify-start items-center space-y-8">
          <View className="flex flex-row justify-between items-center w-full">
            <Menu color="#3A3A3A" size={24} />
            <View className="h-12 w-12 rounded-md bg-gray-800" />
          </View>
          <View className="w-full flex justify-start space-y-4">
            <Text className="text-5xl font-bold">
              What'll You <Text className="text-zinc-400">Eat Today ?</Text>
            </Text>
            <View className="w-full py-3 px-4 flex flex-row justify-between items-center bg-zinc-100 rounded-md">
              <TextInput
                className="w-[80%]"
                placeholder="Search your Favourate"
              />
              <Search color="#3A3A3A" />
            </View>
          </View>
          <View className="flex flex-row justify-center items-center w-full">
            <FlatList
              data={foodData}
              renderItem={renderItem}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              scrollEnabled={true}
              contentContainerStyle={{ paddingBottom: 300 }}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
