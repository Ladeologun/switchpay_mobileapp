import { useState } from "react";
import {Pressable, Text,View} from "react-native";
import styles from "./styles";
import AuthScreenLayout from "@/components/AuthScreenLayout";
import { jwtDecode } from "jwt-decode";
import { AxiosError, AxiosResponse } from "axios"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Formik, FormikHelpers } from "formik";
import FormikInput from "@/components/FormInput";
import * as Yup from "yup";
import PrimaryButton from "@/components/PrimaryButton";
import { COLOURS } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@/navigation/routes";
import { useMutation } from "@tanstack/react-query";
import { LoginRequestAPI } from "../../api";
import { AuthAPIResponse, AuthErrorResponse, LoginPayload } from "../../types";
import { showMessage } from "react-native-flash-message";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { flushUserDetails, saveIDToken } from "../../actions";

interface LoginFormValues {
  email: string;
  password: string;
  
}

const Login: React.FC = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();
    const auth = useAppSelector(state => state.auth);

    const loginRequestMutation = useMutation<AuthAPIResponse, AxiosResponse<AuthErrorResponse>, LoginPayload>({
        mutationFn: LoginRequestAPI,
        onError: (error) => {
            showMessage({
                message: error?.data?.message ?? "Error occurred during login.",
                type: "danger",
                titleStyle: styles.errorMessageStyle,
            });
            dispatch(flushUserDetails())
        },
        onSuccess: (response, params) => {
            dispatch(saveIDToken(response?.data?.token));
            const decoded = jwtDecode(response?.data?.token);
        }
    })


    const initialFormValues: LoginFormValues = {
        email: auth?.userDetails?.email ?? "",
        password: "",
    };

    const save = async (values: LoginFormValues,formikHelpers: FormikHelpers<LoginFormValues>) => {
        loginRequestMutation.mutate({
            username: values.email,
            password: values.password,
        });
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
       
    });

    return (
        <AuthScreenLayout>
            <View style={styles.bankIconContainer}>
                <View style={styles.bankIconWrapper}>
                    <FontAwesome name="bank" size={24} color={COLOURS.dark.white} />
                </View>

            </View>
            <View style={styles.header}>
                <Text style={styles.headerText}>{`Welcome ${auth.userDetails?.firstName ?? "back"}!`}</Text>
                <Text style={styles.headerDescText}>
                    Sign in to manage your finances securely.
                </Text>
            </View>
            <Formik
                initialValues={initialFormValues}
                onSubmit={save}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {({handleSubmit,isValid,dirty}) => (
                    <View style={{marginTop:20}}>
                        
                        {!auth?.userDetails?.email && 
                            <FormikInput 
                                name="email" 
                                label="Email" 
                                editable={!loginRequestMutation.isPending}
                                // onChangeText={handleChange("email")}
                            />
                        }
                        <FormikInput
                            name="password"
                            label="Password"
                            secureText={true}
                            editable={!loginRequestMutation.isPending}
                            hasRightAffix
                            
                        />
                        <PrimaryButton 
                            onPress={handleSubmit} 
                            disabled={!isValid || loginRequestMutation.isPending || !dirty}
                            loading={loginRequestMutation.isPending} 
                            title="Sign In"
                        />

                        <View style={styles.altInfoTextWrapper}>
                            <Text style={styles.infoText}> Don't have an account? </Text>
                            <Pressable
                                onPress={() => navigation.navigate(ROUTES.REGISTER)}
                            >
                                <Text style={styles.infoSignInText}>Sign up</Text>
                            </Pressable>
                        </View>
                    
                    </View>
                )}
            </Formik>
        </AuthScreenLayout>
    );
};

export default Login;
