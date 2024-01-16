import { Tabs } from "expo-router";
import React from "react";
import LucideIcon from "../components/TabIcon";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 30,
          left: 30,
          right: 30,
          height: 80,
          elevation: 20,
          shadowColor: "#000",
          borderRadius: 25,
          backgroundColor: "#a3e635",
          borderColor: "#a3e635",
        },
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return <LucideIcon tabIcons={"Salad"} props={props} />;
          },
        }}
      />
      <Tabs.Screen
        name="cart/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return <LucideIcon tabIcons={"ShoppingBag"} props={props} />;
          },
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return <LucideIcon tabIcons={"Settings"} props={props} />;
          },
        }}
      />
      <Tabs.Screen
        name="updates/index"
        options={{
          tabBarShowLabel: false,
          tabBarIcon(props) {
            return <LucideIcon tabIcons={"Bell"} props={props} />;
          },
        }}
      />
    </Tabs>
  );
};

export default Layout;
