import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";

const NotFoundScreen = () => (
  <>
    <Stack.Screen options={{ title: "Oops!" }} />
    <View>
      <Text>This screen doesn't exist.</Text>

      <Link href="/">
        <Text>Go to home screen!</Text>
      </Link>
    </View>
  </>
);

export default NotFoundScreen;
