import { useState } from "react";
import {Pressable, Text,View} from "react-native";
import styles from "./styles";
import AuthScreenLayout from "@/components/AuthScreenLayout";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Formik, FormikHelpers } from "formik";
import FormikInput from "@/components/FormInput";
import * as Yup from "yup";
import PrimaryButton from "@/components/PrimaryButton";
import { COLOURS } from "@/constants/Colors";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@/navigation/routes";

interface LoginFormValues {
  email: string;
  password: string;
  
}

const Login: React.FC = () => {

     const navigation = useNavigation();
    const [isSubmittingValues, setIsSubmittingValues] = useState(false);

    const initialFormValues: LoginFormValues = {
        email: "",
        password: "",
    };

    const save = async (values: LoginFormValues,formikHelpers: FormikHelpers<LoginFormValues>) => {
        setIsSubmittingValues(true);
        setTimeout(() => {
            console.log("Form Values:", values);
            setIsSubmittingValues(false);
            // formikHelpers.resetForm();
        }, 10000);
        // Handle form submission logic here
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
                <Text style={styles.headerText}>Welcome back</Text>
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
                        
                        <FormikInput 
                            name="email" 
                            label="Email" 
                            editable={!isSubmittingValues}
                            // onChangeText={handleChange("email")}
                        />
                        <FormikInput
                            name="password"
                            label="Password"
                            secureText={true}
                            editable={!isSubmittingValues}
                            hasRightAffix
                            
                        />
                        <PrimaryButton 
                            onPress={handleSubmit} 
                            disabled={!isValid || isSubmittingValues || !dirty}
                            loading={isSubmittingValues} 
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
