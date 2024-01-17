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
          bottom: 25,
          left: 25,
          right: 25,
          height: 80,
          elevation: 20,
          shadowColor: "#000",
          borderRadius: 25,
          backgroundColor: "#1a2e05",
          borderColor: "#1a2e05",
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
