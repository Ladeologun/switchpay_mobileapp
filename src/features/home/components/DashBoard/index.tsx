import { useMemo, useRef, useState } from "react";
import { ActivityIndicator, Image, Pressable, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import AppIntroSlider from "react-native-app-intro-slider";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { StatusBar } from "expo-status-bar";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { COLOURS } from "@/constants/Colors";
import { useQuery } from "@tanstack/react-query";
import { AccountsRequestAPI } from "../../api";
import { QUERY_KEYS } from "@/constants/queryKeys";
import AccountDetailsCard from "../_partials/AccountDetailsCard";
import { IMAGE_URL } from "../../constants";


const DashBoard:React.FC =  () => {

    const navigation = useNavigation();
    const [currentSlide, setCurrentSlide] = useState(0);
    const slider = useRef(null);

    const {
        error,
        data: accountResponseData,
        isLoading: isLoadingAccounts,
        refetch: refetchAccounts
    } = useQuery({
        queryKey:[QUERY_KEYS.ACCOUNTS,{}],
        queryFn: AccountsRequestAPI,
        enabled:true,
        staleTime: 5 * 60 * 1000, // 5 minutes
    });
    
   
    if(isLoadingAccounts && !accountResponseData){
        return (
            <SafeAreaView style={[styles.wrapper, styles.loadingWrapper]}>
                <ActivityIndicator size="large" color={COLOURS.light.accentDeepYellow} />
            </SafeAreaView>
        )
    }
    
    return (
        <SafeAreaView style={styles.wrapper}>
            <StatusBar style="light" />
            
            <View style={styles.header}>
                <Pressable 
                    style={styles.pressableContainer}
                    onPress={()=>{navigation.dispatch(DrawerActions.toggleDrawer())}}
                >
                    <MaterialIcons name="menu" size={24} color="white" />
                </Pressable>

                <View style={styles.subWrapper}>
                    <Pressable style={styles.pressableContainer}>
                        <MaterialIcons name="notifications" size={24} color="white" />
                    </Pressable>
                   
                    <Pressable style={styles.avatarWrapper}>
                        <Image 
                            source={{ uri: IMAGE_URL }}
                            style={{ width: 46, height: 46, borderRadius: 23 }}
                        />
                    </Pressable>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Account Balance and Details */}
                <AppIntroSlider
                    ref={slider}
                    data={ accountResponseData?.data || []}
                    renderItem={(data)=> {
                        return (
                            <AccountDetailsCard 
                                balance={data.item.balance} 
                                currencyCode={data.item.currency} 
                                currencySymbol={data.item.curencyCode}
                            />
                        )
                    }}
                    onSlideChange={index => setCurrentSlide(index)}
                    style={{ width: '100%',flexGrow:0,gap:10}}
                    showDoneButton={false}
                    showNextButton={false}
                    dotStyle={{ backgroundColor: COLOURS.light.white, width: 12, height: 4, borderRadius: 4, marginHorizontal: 4 }}
                    activeDotStyle={{ backgroundColor: COLOURS.light.accentDeepYellow, width: 18, height: 4, borderRadius: 4, marginHorizontal: 4 }}
                />

                {/* Other dashboard components can go here */}

                <View style={styles.recentActivityHeader}>
                    <Text style={styles.activityHeaderText}>Recent Activity</Text>
                    <Pressable style={styles.seeAllButtonContainer}>
                        <Text style={styles.seeAllText}>See All</Text>
                        <Ionicons name="chevron-forward" size={16} color={COLOURS.light.accentDeepYellow} style={{ marginBottom: -2 }} />
                    </Pressable>
                </View>

                {/* static pages just to simulate transactions */}
                {/* optimise this to use flatlist or sectionlist depends on design and real transactions */}

                <View style={styles.activityItemContainer}>
                    <View style={styles.activityIconContainer}>
                       {/* <Feather name="plus-circle" size={24} color={COLOURS.light.green} /> */}
                       <Feather name="plus-circle" size={24} color={COLOURS.light.green} />
                    </View>
                    <View style={styles.activityItemDetailsWrapper}>
                        <View style={[styles.activityItemDetails,{marginBottom:4}]}>
                            <Text style={styles.activityItemText}>Netflix</Text>
                            <Text style={[styles.activityItemText,{color:COLOURS.light.green}]}>-₦300.0</Text>
                        </View>
                        <View style={styles.activityItemDetails}>
                            <Text style={styles.activityItemTextStyle}>Subscription</Text>
                            <Text style={styles.activityItemTextStyle}>Oct 24</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.activityItemContainer}>
                    <View style={styles.activityIconContainer}>
                       {/* <Feather name="plus-circle" size={24} color={COLOURS.light.green} /> */}
                       <Feather name="minus-circle" size={24} color={COLOURS.light.red} />
                    </View>
                    <View style={styles.activityItemDetailsWrapper}>
                        <View style={[styles.activityItemDetails,{marginBottom:4}]}>
                            <Text style={styles.activityItemText}>Netflix</Text>
                            <Text style={[styles.activityItemText,{color:COLOURS.light.red}]}>-₦300.0</Text>
                        </View>
                        <View style={styles.activityItemDetails}>
                            <Text style={styles.activityItemTextStyle}>Subscription</Text>
                            <Text style={styles.activityItemTextStyle}>Oct 24</Text>
                        </View>
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>

    )
}

export default DashBoard;
