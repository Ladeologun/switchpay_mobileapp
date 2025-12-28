import { useMemo, useState } from "react";
import { Image, Pressable, ScrollView, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Feather from '@expo/vector-icons/Feather';
import { StatusBar } from "expo-status-bar";
import { DrawerActions, useNavigation } from "@react-navigation/native";
import { COLOURS } from "@/constants/Colors";


const DashBoard:React.FC =  () => {

    const navigation = useNavigation();
    const [showBalance, setShowBalance] = useState(false)
    let imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQz1mHFSD9UAf9NKkI7_buBIIOdn6AY5rxqAA&s"
    
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
                            source={{ uri: imageUrl }}
                            style={{ width: 46, height: 46, borderRadius: 23 }}
                        />
                    </Pressable>
                </View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                {/* Account Balance and Details */}
                <View style={styles.accountDetailsContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View style={styles.currencySection}>
                            <Image
                                source={require("@/assets/images/NGN.png")}
                                style={{ resizeMode: "contain", height: 20, width: 20,marginRight: 4 }}
                            />
                            <Text style={styles.currencyText}>{`NGN`}</Text>
                        </View>

                        <TouchableOpacity
                            disabled={false}
                            style={[styles.withdrawCTA]}
                            onPress={async () => {}}
                        >
                            <Image
                                source={require("@/assets/images/withdraw_icon.png")}
                                style={{ resizeMode: "contain", height: 16, width: 16}}
                            />
                            <Text style={styles.withdrawText}>
                                {false ? 'Checking...' : 'Withdraw'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.availableBalanceHeaderText}>Available balance</Text>
                    <View style={styles.balanceSection}>
                        {showBalance ?
                            <Text style={styles.balanceValue}>
                                <Text style={styles.balanceCurrencySymbol}>₦</Text>
                                <Text>{'23,439'}</Text>
                                <Text style={styles.balanceCurrencySymbol}>.{'45'}</Text>
                            </Text> : <Text style={styles.cardValue}>*****</Text>
                        }
                        <TouchableOpacity onPress={() => setShowBalance(!showBalance)} style={styles.eyeIcon}>
                            <Ionicons
                                name={showBalance ? "eye-outline" : "eye-off-outline"}
                                size={20}
                                color={COLOURS.light.white}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity 
                        style={styles.statementButton}
                        onPress={() => {}}
                    >
                        <Text style={styles.statementText}>View Account Details</Text>
                        <Ionicons name="chevron-forward" size={13} color={COLOURS.light.white} style={{ marginBottom: -2 }} />
                    </TouchableOpacity>
                </View>
                {/* Other dashboard components can go here */}

                <View style={styles.recentActivityHeader}>
                    <Text style={styles.activityHeaderText}>Recent Activity</Text>
                    <Pressable style={styles.seeAllButtonContainer}>
                        <Text style={styles.seeAllText}>See All</Text>
                        <Ionicons name="chevron-forward" size={16} color={COLOURS.light.accentDeepYellow} style={{ marginBottom: -2 }} />
                    </Pressable>
                </View>

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
