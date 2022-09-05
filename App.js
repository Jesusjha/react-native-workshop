import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultComponents } from "./defaultComponents";
import { FlexboxScreen } from "./flexboxscreen";
import { HomeScreen } from "./homescreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="FlexboxScreen" component={FlexboxScreen} />
        <Stack.Screen name="DefaultComponents" component={DefaultComponents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
