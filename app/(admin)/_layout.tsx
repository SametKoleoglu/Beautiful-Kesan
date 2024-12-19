import { Tabs } from "expo-router";
import { Feather, FontAwesome6 } from "@expo/vector-icons";
import { View } from "react-native";

export default function AdminLayout() {
  return (
    <Tabs
      screenOptions={{
        //tabBarActiveTintColor: "#2563eb", // blue-600
        //tabBarInactiveTintColor: "#6b7280", // gray-500
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 20,
          marginLeft: '5%',
          height: '9%',
          width: '90%',
          paddingTop: 10,
          // Shadow for iOS
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,
          // Shadow for Android
          elevation: 5,
        },
        tabBarBackground: () => (
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: '#000',
              borderRadius: 50,
            }}
          />
        ),
        headerStyle: {
          backgroundColor: "#2550ec",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        // Tab bar label style
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '500',
          marginTop: -5,
        },
        // Tab bar icon container style
        tabBarItemStyle: {
          marginTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Ana Sayfa",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="house-circle-check" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
