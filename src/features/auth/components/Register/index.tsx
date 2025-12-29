import {Pressable, Text,View} from "react-native";
import styles from "./styles";
import AuthScreenLayout from "@/components/AuthScreenLayout";
import { Formik, FormikHelpers } from "formik";
import FormikInput from "@/components/FormInput";
import * as Yup from "yup";
import PrimaryButton from "@/components/PrimaryButton";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@/navigation/routes";
import { useMutation } from "@tanstack/react-query";
import { AuthAPIResponse, AuthErrorResponse, RegisterPayload } from "../../types";
import { AxiosResponse } from "axios";
import { RegisterRequestAPI } from "../../api";
import { showMessage } from "react-native-flash-message";
import { useAppDispatch } from "@/hooks";
import { saveIDToken, saveUserDetails } from "../../actions";

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {

    const navigation = useNavigation();
    const dispatch = useAppDispatch();

    const registerRequestMutation = useMutation<AuthAPIResponse, AxiosResponse<AuthErrorResponse>, RegisterPayload>({
        mutationFn: RegisterRequestAPI,
        onError: (error) => {
            showMessage({
                message: error?.data?.message ?? "Error occurred during login.",
                type: "danger",
                titleStyle: styles.errorMessageStyle,
            });
        },
        onSuccess: (response, params) => {
            dispatch(saveUserDetails({
                email: params.email,
                firstName: params.firstName,
                lastName: params.lastName,
            }));
            dispatch(saveIDToken(response?.data?.token));
        }
    })

    const initialFormValues: RegisterFormValues = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    };

    const save = async (values: RegisterFormValues,formikHelpers: FormikHelpers<RegisterFormValues>) => {
        registerRequestMutation.mutate({
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
        });
       
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
                            editable={!registerRequestMutation.isPending}
                        />
                        <FormikInput 
                            name="lastName" 
                            label="Last Name" 
                            editable={!registerRequestMutation.isPending}
                        />
                        <FormikInput 
                            name="email" 
                            label="Email" 
                            editable={!registerRequestMutation.isPending}
                        />
                        <FormikInput
                            name="password"
                            label="Password"
                            secureText={true}
                            editable={!registerRequestMutation.isPending}
                            hasRightAffix
                            
                        />
                        <FormikInput
                            name="confirmPassword"
                            label="Confirm Password"
                            secureText={true}
                            editable={!registerRequestMutation.isPending}
                            hasRightAffix
                        />

                        <PrimaryButton 
                            onPress={handleSubmit} 
                            disabled={!isValid || registerRequestMutation.isPending || !dirty}
                            loading={registerRequestMutation.isPending} 
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
