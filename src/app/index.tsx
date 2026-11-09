import { useState } from "react";
import { ActivityIndicator, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

function Button({
  title,
  loading = false,
  onPress,
}: {
  title: string;
  loading?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={loading}
      className={`flex-row items-center justify-center gap-3 py-4 rounded-2xl ${
        loading ? "bg-fuchsia-500/60" : "bg-fuchsia-500"
      }`}
    >
      {loading && <ActivityIndicator size="small" color="#fff" />}
      <Text className="text-white text-lg font-semibold">
        {loading ? "Loading..." : title}
      </Text>
    </Pressable>
  );
}

export default function Index() {
  const [loading, setLoading] = useState(false);

  const handlePress = async () => {
    setLoading(true);
    try {
      // replace with your real API call
      await new Promise((r) => setTimeout(r, 2000));
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <View className="flex-1 justify-center px-6 gap-3">
        <Text className="text-white text-4xl font-bold">Welcome</Text>
        <Text className="text-slate-400 text-base mb-6">
          Simple, fast and clean.
        </Text>

        <Button title="Start here" loading={loading} onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
}
