import React from "react";
import styles from "./styles";
import { ActivityIndicator, Pressable, StyleProp, Text, View, ViewStyle } from "react-native";
import { COLOURS } from "@/constants/Colors";


interface Iprops {
    containerStyle?: StyleProp<ViewStyle>;
    disabled?: boolean;
    loading?: boolean;
    onPress?: () => void;
    title?: string;
    indicatorColor?: string;
    iconStyle?: StyleProp<ViewStyle>;
    disabledStyle?: StyleProp<ViewStyle>;
    numberOfLines?: number;
    customLabelSize?: number;
}

const PrimaryButton: React.FC<Iprops> = ({
    containerStyle,
    disabled = false,
    onPress,
    loading = false,
    title = "Continue",
    indicatorColor = COLOURS.light.white,
    iconStyle,
    disabledStyle,
    numberOfLines = 1,
    customLabelSize
    
}) => {
    return (
        <Pressable
            style={[styles.container, disabled && styles.disabledStyle,loading && {opacity:0.9}, containerStyle]}
            disabled={disabled}
            onPress={onPress}
        >
            <View style={[styles.button, disabled && disabledStyle]}>
                {loading ? (
                    <ActivityIndicator
                        size={customLabelSize ?? 16}
                        color={indicatorColor}
                        style={iconStyle}
                    />
                ) : null}
                <Text
                    selectable={false}
                    numberOfLines={numberOfLines}
                    style={[styles.buttonTitle]}
                >
                    {title}
                </Text>
            </View>
            
        </Pressable>
      
    );
};

export default PrimaryButton;
