import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
    <SafeAreaView className="bg-fuchsia-300 flex-1 h-screen-safe h-full text-black">
      <View>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}
