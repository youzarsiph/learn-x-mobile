import tw from "twrnc";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "../components";

const ModalScreen = () => (
  <View style={tw`flex-1 items-center justify-center`}>
    <Text style={tw`text-xl font-bold`}>Modal</Text>

    {/* Use a light status bar on iOS to account for the black space above the modal */}
    <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
  </View>
);

export default ModalScreen;
