import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTES from "./routes";
import CardScreen from "@/features/cards/components/Cardscreen";


const Card = createNativeStackNavigator();

const CardContainer: React.FC =  () => (
    <Card.Navigator
        initialRouteName={ROUTES.CARD}
        screenOptions={{
            headerShown: false
        }}
    >
        <Card.Screen
            name={ROUTES.CARD}
            component={CardScreen}
        />
       
    </Card.Navigator>
);

export default CardContainer;