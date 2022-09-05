import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./homescreen";
import { TicTacToeScreen } from "./tictactoe";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TicTacToe" component={TicTacToeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
