import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTES from "./routes";
import ExploreScreen from "@/features/explore/components/ExploreScreen";


const Explore = createNativeStackNavigator();

const ExploreContainer: React.FC =  () => (
    <Explore.Navigator
        initialRouteName={ROUTES.EXPLORE}
        screenOptions={{
            headerShown: false
        }}
    >
        <Explore.Screen
            name={ROUTES.EXPLORE}
            component={ExploreScreen}
        />
       
    </Explore.Navigator>
);

export default ExploreContainer;