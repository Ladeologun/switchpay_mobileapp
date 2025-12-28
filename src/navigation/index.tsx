
import { NavigationContainer, StaticParamList } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ROUTES from './routes';
import DrawerNavigator from './drawerNavigator';
import AuthContainer from './authstack';


const RootStack = createNativeStackNavigator();

const isUserLoggedIn = false; // Replace with your authentication logic

const RootStackContainer = () => { 
  
  
  return(
    <NavigationContainer>
      <RootStack.Navigator
        // initialRouteName={ROUTES.DRAWER_NAVIGATOR}
        screenOptions={{
          headerShown: false,
        }}
      >
        {isUserLoggedIn ? (
          <RootStack.Screen
            name={ROUTES.DRAWER_NAVIGATOR}
            component={DrawerNavigator}
          />
        ) : (
          <RootStack.Screen
            name={ROUTES.AUTH_STACK}
            component={AuthContainer}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
)};  
    

export default RootStackContainer;
// export const Navigation = createStaticNavigation(RootStackContainer);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
