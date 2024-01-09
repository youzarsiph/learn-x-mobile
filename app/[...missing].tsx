import tw from "twrnc";
import { Link, Stack } from "expo-router";
import { Text, View } from "../components";

const NotFoundScreen = () => (
  <>
    <Stack.Screen options={{ title: "Oops!" }} />
    <View style={tw`flex-1 items-center justify-center p-5`}>
      <Text style={tw`text-xl font-bold`}>This screen doesn't exist.</Text>

      <Link href="/" style={tw`mt-4 py-4`}>
        <Text style={tw`text-lg text-blue-600`}>Go to home screen!</Text>
      </Link>
    </View>
  </>
);

export default NotFoundScreen;
