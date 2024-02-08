import { Menu, Search, User, UserRound } from "lucide-react-native";
import { Text, TextInput, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { foodCountry } from "../../../data/foodCountry";
import FoodCategory from "../../components/FoodCategory";
import Card from "../../components/Card";
import { TrendingFood } from "../../../data/trending";
import { LinearGradient } from "expo-linear-gradient";

export default function TabOneScreen() {
  return (
    <SafeAreaView className="bg-white">
      <View className="h-full w-full bg-white">
        <View className=" w-full flex flex-col justify-start items-center space-y-10">
          {/* Header */}
          <View className="flex flex-row justify-between items-center w-full h-20 border-b border-gray-200">
            <View className="h-full w-full flex flex-row justify-between items-center px-8">
              <Text className="text-3xl font-bold text-zinc-800">
                Asian Bites
              </Text>
              <View className="h-12 w-12 rounded-md flex justify-center items-center bg-gray-800">
                <UserRound color="#888888" size={24} fill={"#d4d4d4"} />
              </View>
            </View>
          </View>
          {/* Main Body */}
          <View className="w-full flex justify-start space-y-4 p-8">
            <Text className="text-5xl font-semibold">
              What'll You <Text className="text-lime-400">Eat Today ?</Text>
            </Text>
            <View className="w-full py-3 px-4 flex flex-row justify-between items-center bg-zinc-100 rounded-xl">
              <TextInput
                className="w-[80%] h-10"
                placeholder="Search your Favourate"
              />
              <Search color="#3A3A3A" />
            </View>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="pl-8 h-full flex flex-col space-y-8"
          contentContainerStyle={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            paddingBottom: 100,
          }}
        >
          <View className="w-full flex flex-col items-start space-y-4">
            <Text className="text-3xl font-semibold">Pick Your Plate</Text>
            <View className="w-full">
              <FlatList
                data={foodCountry}
                renderItem={({ item }) => (
                  <FoodCategory name={item.name} image={item.image} />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          <View className="flex flex-col justify-start items-start pr-8 space-y-4">
            <Text className="text-3xl font-semibold">Hot Eats</Text>
            <View className="h-full">
              <FlatList
                data={TrendingFood}
                renderItem={({ item }) => (
                  <Card
                    name={item.name}
                    image={item.image}
                    price={item.price}
                    country={item.country}
                    rating={item.rating}
                  />
                )}
                disableVirtualization
                scrollEnabled={false}
              />
            </View>
          </View>
        </ScrollView>
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.5)"]}
          className="h-20 w-full absolute bottom-0"
        />
      </View>
    </SafeAreaView>
  );
}
