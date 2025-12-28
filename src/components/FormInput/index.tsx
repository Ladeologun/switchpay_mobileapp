import React from "react";
import { TextInput, Text, View, Pressable } from "react-native";
import { useField, useFormikContext } from "formik";
import styles from "./styles";
import { COLOURS } from "@/constants/Colors";
import Feather from "@expo/vector-icons/build/Feather";

type FormikInputProps = {
  label?: string;
  hasRightAffix?: boolean;
  rightAffix?: React.ReactNode;
  name: string;
  secureText?: boolean;
} & React.ComponentProps<typeof TextInput>;

const FormikInput: React.FC<FormikInputProps> = ({ 
    label, 
    name, 
    hasRightAffix, 
    rightAffix,
    secureText,
    ...props 
}) => {
    const [field, meta, helpers] = useField(name);
    const { setFieldValue } = useFormikContext();
    const [secureTextEntry, setSecureTextEntry] = React.useState(secureText ?? false);

    // const handleChange = (value: string) => {
    //     setFieldValue(name, value);
    // };

    return (
        <View style={styles.wrapper}>
            {label && <Text style={styles.labelText}>{label}</Text>}
            <View style={styles.inputContainer}>
                <TextInput
                    {...field}
                    {...props}
                    onChangeText={helpers.setValue} 
                    onBlur={() => {
                        field.onBlur(name)
                        helpers.setTouched(true)
                    }} // Manually call onBlur
                    value={field.value}
                    style={[styles.textInputStyle, !props.editable && {opacity:0.2}]}
                    cursorColor={COLOURS.light.white}
                    selectionColor={COLOURS.light.white}
                    secureTextEntry={secureTextEntry}
                    autoCorrect={false}
                />
                {hasRightAffix && 
                    <Pressable onPress={() => setSecureTextEntry(!secureTextEntry)}>
                        <Feather name={secureTextEntry ? "eye-off" : "eye"} size={20} color="grey" />
                    </Pressable>
                }
            </View>
            {meta.touched && meta.error ? (
                <Text style={styles.errorText}>{meta.error}</Text>
            ) : null}
        </View>
    );
};

export default FormikInput;
