import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { LogIn, LogOut, Search, UserRound, X } from "lucide-react-native";
import { useState } from "react";
import { Modal, Pressable, Text, TextInput, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { foodCountry } from "../../../data/foodCountry";
import { TrendingFood } from "../../../data/trending";
import Card from "../../components/Card";
import FoodCategory from "../../components/FoodCategory";

const AuthModal = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const router = useRouter();

  return (
    <>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View className="bg-white shadow-xl p-4 shadow-black/50 h-36 w-64 top-20 absolute right-8 rounded-lg">
          <Pressable
            className="w-full h-10 flex flex-row justify-start items-center space-x-2 "
            onPress={() => {
              router.push("/auth/login/"), setModalVisible(!modalVisible);
            }}
          >
            <LogIn size={24} color="#3A3A3A" />
            <Text className="text-lg font-semibold text-zinc-800">Login</Text>
          </Pressable>
          <View className="w-full h-0.5 bg-gray-100 mt-2" />
          <Pressable
            className="w-full h-12 mt-4 bg-red-100 flex flex-row justify-start items-center space-x-2 rounded-lg px-4"
            onPress={() => {
              router.push("/auth/login/"), setModalVisible(!modalVisible);
            }}
          >
            <LogOut size={24} color="#ef4444" />
            <Text className="text-lg font-semibold text-red-500">Logout</Text>
          </Pressable>
          <Pressable
            className="h-8 w-8 absolute top-2 right-2 bg-gray-50 rounded-md border border-zinc-800 justify-center items-center"
            onPress={() => setModalVisible(!modalVisible)}
          >
            <X size={15} color="#3A3A3A" />
          </Pressable>
        </View>
      </Modal>
      <Pressable
        className="h-12 w-12 rounded-md flex justify-center items-center bg-gray-800"
        onPress={() => setModalVisible(true)}
      >
        <UserRound color="#888888" size={24} fill={"#d4d4d4"} />
      </Pressable>
    </>
  );
};

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
              <AuthModal />
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
