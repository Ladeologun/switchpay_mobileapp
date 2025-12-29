import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTES from "./routes";
import Login from "@/features/auth/components/Login";
import Register from "@/features/auth/components/Register";


const Auth = createNativeStackNavigator();

const AuthContainer: React.FC =  () => (
    <Auth.Navigator
        initialRouteName={ROUTES.LOGIN}
        screenOptions={{
            headerShown: false
        }}
    >
        <Auth.Screen
            name={ROUTES.LOGIN}
            component={Login}
        />
        <Auth.Screen
            name={ROUTES.REGISTER}
            component={Register}
        />
    </Auth.Navigator>
);

export default AuthContainer;