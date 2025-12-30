import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTES from "./routes";
import SettingScreen from "@/features/settings/components/Settingscreen";


const Setting = createNativeStackNavigator();

const SettingContainer: React.FC =  () => (
    <Setting.Navigator
        initialRouteName={ROUTES.SETTINGS}
        screenOptions={{
            headerShown: false
        }}
    >
        <Setting.Screen
            name={ROUTES.SETTINGS}
            component={SettingScreen}
        />
       
    </Setting.Navigator>
);

export default SettingContainer;