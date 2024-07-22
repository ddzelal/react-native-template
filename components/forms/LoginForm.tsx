import React, {useState} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {Input} from "@/components/input/Input";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "@/validations/login.schema";
import {LoginPayload} from "@/interfaces/login.interface";



export default function LoginForm() {

    const [isShowPassword, setIsShowPassword] = useState(true);

    const { control, handleSubmit,
        formState: { errors } } = useForm<LoginPayload>({
        resolver: yupResolver(loginSchema),
    });

    const onSubmit = (data: LoginPayload) => {
        console.log(data);
        // TODO: Call API
    };

    return (
            <View style={styles.form}>
                <Text style={styles.title}>Login</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <Input
                                placeholder="Email"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                            {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}
                        </View>
                    )}
                    name="email"
                />
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View style={styles.inputContainer}>
                            <Input
                                placeholder="Password"
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                                secureTextEntry={isShowPassword}
                                iconRight={isShowPassword ? 'eye' : 'eye-slash'}
                                iconRightAction={() => setIsShowPassword(!isShowPassword)}
                            />
                            {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
                        </View>
                    )}
                    name="password"
                />
                {/*TODO CUSTOMIZE BUTTON AS THEME COMPONENT*/}
                <Button title="Login" onPress={handleSubmit(onSubmit)} />
            </View>
    );
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15,
    },
    error: {
        color: 'red',
        marginTop: 5,
    },
});
