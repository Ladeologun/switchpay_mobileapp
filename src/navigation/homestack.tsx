import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTES from "./routes";
import DashBoard from "@/features/home/components/DashBoard";


const HomeStack = createNativeStackNavigator();

const HomeStackContainer: React.FC =  () => (
    <HomeStack.Navigator
        initialRouteName={ROUTES.DASHBOARD}
        screenOptions={{
            headerShown: false
        }}
    >
        <HomeStack.Screen
            name={ROUTES.DASHBOARD}
            component={DashBoard}
        />
    </HomeStack.Navigator>
);

export default HomeStackContainer;
