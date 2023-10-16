import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import Header from "./components/Header/Header";
import { appStyles } from "./components/mainStyles";

export default function App() {
  return (
    <View style={appStyles.container}>
      <Header />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "black",
//   },
// });
