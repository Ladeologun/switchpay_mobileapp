import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import ROUTES from './routes';
import HomeStackContainer from './homestack';
import TabNavigator from './mainTabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLOURS } from '@/constants/Colors';
import { FONTS } from '@/constants/Fonts';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { logoutUser } from '@/features/auth/actions';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: DrawerContentComponentProps) {
    const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1mHFSD9UAf9NKkI7_buBIIOdn6AY5rxqAA&s";
    const dispatch = useAppDispatch();
    const auth = useAppSelector(state => state.auth);

    const promptLogout = () => {
        Alert.alert("Confirm Logout","Are you sure you want to logout?",[
            {
                text:"Cancel",
                style:"cancel",
                onPress:()=>{}
            },
            {
                text:"Logout",
                style:"destructive",
                onPress:()=>{dispatch(logoutUser())}
            }
        ])
    }
   
  return (
    <DrawerContentScrollView {...props} style={styles.drawerScrollviewContent} contentContainerStyle={styles.contentContainer}>
        <View style={{gap:16}}>
            <View style={styles.drawerHeaderContainer}>
                <View style={styles.profileImageWrapper}>
                    <Image
                        source={{ uri: imageUrl }}
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                    />
                    <Pressable
                        onPress={() => { props.navigation.closeDrawer()}}
                        style={{padding:8}}
                    >
                        <Feather name="x" size={24} color={COLOURS.light.white} />
                    </Pressable>

                </View>
                <Text style={styles.nameTextStyle}>{auth.userDetails?.firstName} {auth.userDetails?.lastName}</Text>
                <Text style={styles.emailTextStyle}>{auth.userDetails?.email}</Text>
            </View>

            <DrawerItem
                label="Home"
                onPress={() =>{ 
                    props.navigation.navigate(ROUTES.MAIN_TABS);
                    // props.navigation.closeDrawer()
                }}
                labelStyle={styles.labelStyle}
                activeTintColor='red'
                activeBackgroundColor='green'
                inactiveTintColor={COLOURS.light.white}
                inactiveBackgroundColor='#0246a51a'
                icon={({focused,size,color})=>{
                    return <Feather name="home" size={18} color={color} />
                }}
            />
            <DrawerItem
                label="Biometric setup"
                onPress={() =>{ 
                    // props.navigation.navigate(ROUTES.MAIN_TABS);
                    // props.navigation.closeDrawer()
                
                }}
                labelStyle={styles.labelStyle}
                activeTintColor='red'
                inactiveTintColor={COLOURS.light.white}
                inactiveBackgroundColor='#0246a51a'
                activeBackgroundColor='green'
                icon={({focused,size,color})=>{
                    return <MaterialIcons name="fingerprint" size={size} color={color} />
                }}
            />

        </View>
        {/* <DrawerItemList {...props} /> */}
         <Pressable 
            style={styles.footer}
            onPress={promptLogout}
        >
            <MaterialIcons name="logout" size={26} color={COLOURS.light.red} />
            <Text style={styles.logoutText}>Logout</Text>
        </Pressable>
    </DrawerContentScrollView>
  );
}

const DrawerNavigator = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerHideStatusBarOnOpen: true,
            }}
            drawerContent={CustomDrawerContent}
        >
            <Drawer.Screen name={ROUTES.MAIN_TABS} component={TabNavigator} />
            <Drawer.Screen name={ROUTES.SETTINGS_TAB} component={HomeStackContainer} />
        </Drawer.Navigator>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  drawerScrollviewContent: {
    flex:1, 
    backgroundColor:"#1E252B"
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  drawerHeaderContainer:{
    paddingBottom:7,
    borderBottomColor:"#44484dff",
    borderBottomWidth:0.5,
  },
  profileImageWrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
  },
  nameTextStyle:{
    color:COLOURS.light.white,
    fontFamily: FONTS.POPPINS_MEDIUM,
    textTransform:"uppercase",
    lineHeight:24,
    letterSpacing:1.2,
    fontSize:16,
    marginTop:6,
    marginBottom:6
  },
    emailTextStyle:{
    color:COLOURS.light.accentDeepYellow,
    fontFamily: FONTS.POPPINS_EXTRA_LIGHT,
    fontSize:10,
    marginBottom:6
  },
  labelStyle:{
    color:COLOURS.light.white,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize:14,
    textTransform:"uppercase",
    letterSpacing:1.2,
  },
  footer:{
    paddingVertical:20, 
    flexDirection:'row',
    alignItems:'center', 
    gap:8,
    borderTopColor:"#44484dff",
    borderTopWidth:0.5
  },
  logoutText:{
    color:COLOURS.light.red,
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize:14,
    textTransform:"uppercase",
    letterSpacing:1.2,
  }
});


export default DrawerNavigator;