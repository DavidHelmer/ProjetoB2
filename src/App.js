import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();


import Login from "./pages/LoginPage";
import Dashboard from "./pages/DashboardPage";
import Register from "./pages/RegisterPage";
import Password from "./pages/ForgotPasswordPage";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Login" component={Login}/>
        <Stack.Screen name= "Password" component={Password}/>
        <Stack.Screen name= "Register" component={Register}/>
        <Stack.Screen name= "Dashboard" component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

