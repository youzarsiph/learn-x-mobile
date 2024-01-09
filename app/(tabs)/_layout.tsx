import { Link, Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import { Pressable, useColorScheme } from "react-native";
import Colors from "../../constants/Colors";

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 64,
          margin: 16,
          borderRadius: 16,
        },
        tabBarItemStyle: { padding: 8 },
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: (props) => (
            <MaterialIcons {...props} size={28} name="home" />
          ),
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <MaterialIcons
                    name="info"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: (props) => (
            <MaterialIcons {...props} size={28} name="explore" />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
