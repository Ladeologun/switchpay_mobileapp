import { Image, Text, TouchableOpacity, View } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import styles from "./styles";
import { COLOURS } from "@/constants/Colors";
import { useMemo, useState } from "react";
import { formatMoney } from "@/utils/numbers";
import UsIcon from '@/assets/images/us-flag.png';
import NgIcon from '@/assets/images/NGN.png';


interface Props {
    balance:number
    currencyCode:string
    currencySymbol:string
  
}


const AccountDetailsCard: React.FC<Props> = ({ balance, currencyCode, currencySymbol }) => {
    const [showBalance, setShowBalance] = useState(false)
    
    const [formattedBalanceWhole, formattedBalanceDecimal] = useMemo(() => {
        return formatMoney(balance ?? 0);
    }, [balance]);

    const backgroundColor = currencyCode === "USD" ? "#276EF1" : "#1E4FCC";



    
    return (
        <View style={[styles.accountDetailsContainer, { backgroundColor }]}>
            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                <View style={styles.currencySection}>
                    <Image
                        source={currencyCode === "USD" ? UsIcon : NgIcon}
                        style={{ resizeMode: "contain", height: 20, width: 20,marginRight: 4 }}
                    />
                    <Text style={styles.currencyText}>{currencyCode}</Text>
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
                        {'Withdraw'}
                    </Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.availableBalanceHeaderText}>Available balance</Text>
            <View style={styles.balanceSection}>
                {showBalance ?
                    <Text style={styles.balanceValue}>
                        <Text style={styles.balanceCurrencySymbol}>{currencySymbol}</Text>
                        <Text>{formattedBalanceWhole}</Text>
                        <Text style={styles.balanceCurrencySymbol}>.{formattedBalanceDecimal}</Text>
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
    );
};

export default AccountDetailsCard;
