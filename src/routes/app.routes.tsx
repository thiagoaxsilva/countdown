import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";

const { Navigator, Screen } = createBottomTabNavigator();
import { AntDesign } from "@expo/vector-icons";

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "star" : "staro";
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Screen name="Evento" component={Home} />
    </Navigator>
  );
}
