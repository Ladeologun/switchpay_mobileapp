import React from "react";
import styles from "./styles";
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, StyleProp, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Iprops {
    children: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    mainContainerContentStyle?: StyleProp<ViewStyle>;
    hasStatusBar?:boolean;
    headerStyle?: StyleProp<ViewStyle>;
    mainContainerStyle?: StyleProp<ViewStyle>;
}

const AuthScreenLayout: React.FC<Iprops> = ({
    children,
    containerStyle,
    hasStatusBar = true,
    mainContainerContentStyle,
    mainContainerStyle
}) => {
    const insets = useSafeAreaInsets();
    return (
        <KeyboardAvoidingView
            style={[styles.container, { paddingTop: insets.top }, containerStyle]}
            behavior={"padding"}
            enabled={Platform.OS === "ios"}
        >
            {hasStatusBar && (
                <StatusBar
                    barStyle="light-content"
                    hidden={false}
                    translucent={true}
                />
            )}
            <ScrollView
                keyboardShouldPersistTaps={"handled"}
                showsVerticalScrollIndicator={false}
                style={[styles.mainContainer, mainContainerStyle]}
                contentContainerStyle={[styles.mainContainerContent, mainContainerContentStyle]}
            >
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
      
    );
};

export default AuthScreenLayout;
