import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStaticNavigation, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground, { useBottomTabOverflow } from '@/components/ui/TabBarBackground';
import ROUTES from './routes';
import HomeStackContainer from './homestack';
import { COLOURS } from '@/constants/Colors';

const Tabs = createBottomTabNavigator();


const TabNavigator: React.FC  = () => {

  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        // animation: 'fade',
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarInactiveBackgroundColor: "#1E2730",
        tabBarActiveBackgroundColor: "#1E2730",
        tabBarInactiveTintColor: "#888F9B",
        tabBarActiveTintColor: COLOURS.light.accentDeepYellow,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: '#1E2730',
            borderTopWidth: 0,
            // borderTopColor: '#444C56',
            elevation: 0,
          },
          android: {
            // Use a transparent background on iOS to show the blur effect
            // position: 'absolute',
            backgroundColor: '#1E2730',
            borderTopWidth: 0,
            // borderTopColor: '#444C56',
            elevation: 0,
          },
          default: {},
        }),
        tabBarLabelStyle:{
            marginTop:6,
            fontSize:10
        }
      }}
    >
      <Tabs.Screen
        name={ROUTES.HOME_TAB}
        component={HomeStackContainer}
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
          tabBarLabel: 'Home',
        }}
      />
     
      <Tabs.Screen
        name={ROUTES.CARD_TAB}
        component={HomeStackContainer}
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="creditcard.fill" color={color} />,
            tabBarLabel: 'Card',
        }}
      />
       <Tabs.Screen
        name={ROUTES.SETTINGS_TAB}
        component={HomeStackContainer}
        options={{
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="gearshape.fill" color={color} />,
          tabBarLabel: 'Setting',
        }}
      />

        <Tabs.Screen
            name={ROUTES.EXPLORE_TAB}
            component={HomeStackContainer}
            options={{
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            tabBarLabel: 'Explore',
            }}
        />
   
    </Tabs.Navigator>
  );
}

export default TabNavigator;




