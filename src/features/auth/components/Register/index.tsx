import { useState } from "react";
import {Pressable, Text,View} from "react-native";
import styles from "./styles";
import AuthScreenLayout from "@/components/AuthScreenLayout";
import { Formik, FormikHelpers } from "formik";
import FormikInput from "@/components/FormInput";
import * as Yup from "yup";
import PrimaryButton from "@/components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@/navigation/routes";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {

    const navigation = useNavigation();
    const [isSubmittingValues, setIsSubmittingValues] = useState(false);

    const initialFormValues: RegisterFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const save = async (values: RegisterFormValues,formikHelpers: FormikHelpers<RegisterFormValues>) => {
        setIsSubmittingValues(true);
        setTimeout(() => {
            console.log("Form Values:", values);
            setIsSubmittingValues(false);
            // formikHelpers.resetForm();
        }, 10000);
        // Handle form submission logic here
    };

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), undefined], "Passwords must match")
            .required("Confirm password is required"),
    });

    return (
        <AuthScreenLayout>
            <View style={styles.header}>
                <Text style={styles.headerText}>Create a Switch Account</Text>
                <Text style={styles.headerDescText}>
                    Fill in the details below to create your secure banking profile.
                </Text>
            </View>
            <Formik
                initialValues={initialFormValues}
                onSubmit={save}
                validationSchema={validationSchema}
                enableReinitialize
            >
                {({ handleSubmit,isValid,dirty}) => (
                    <View>
                        <FormikInput 
                            name="firstName" 
                            label="First Name" 
                            editable={!isSubmittingValues}
                            // placeholder="Enter your first name"
                            // placeholderTextColor={COLOURS.light.textGrey}
                            // onChangeText={handleChange("firstName")}
                        />
                        <FormikInput 
                            name="lastName" 
                            label="Last Name" 
                            editable={!isSubmittingValues}

                            // onChangeText={handleChange("lastName")}
                        />
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
                        <FormikInput
                            name="confirmPassword"
                            label="Confirm Password"
                            secureText={true}
                            editable={!isSubmittingValues}
                            hasRightAffix
                        />

                        <PrimaryButton 
                            onPress={handleSubmit} 
                            disabled={!isValid || isSubmittingValues || !dirty}
                            loading={isSubmittingValues} 
                        />

                        <View style={styles.altInfoTextWrapper}>
                            <Text style={styles.infoText}> Already have an account? </Text>
                            <Pressable onPress={() => navigation.navigate(ROUTES.LOGIN)}>
                                <Text style={styles.infoSignInText}>Sign in</Text>
                            </Pressable>
                        </View>
                    
                    </View>
                )}
            </Formik>
        </AuthScreenLayout>
    );
};

export default Register;
