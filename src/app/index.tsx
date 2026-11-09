import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function index() {
  return (
    <SafeAreaView className="bg-white">
      <View className="bg-blue-500">
        <Text>index</Text>
      </View>
    </SafeAreaView>
  );
}
