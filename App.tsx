import React from "react";
import { ThemeProvider } from "styled-components/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { home } from "./src/presentation/screens/home/home.screen";
import { login } from "./src/presentation/screens/login/login.screen";

export default function App() {
  const theme = {
    colors: {
      primary: "blue",
      secondary: "green",
    },
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={home}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Login" component={login} />
      </Stack.Navigator>

      <ThemeProvider theme={theme}></ThemeProvider>
    </NavigationContainer>
  );
}
