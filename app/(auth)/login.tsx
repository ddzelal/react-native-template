import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {Text} from "@/components/Themed";
import LoginForm from "@/components/forms/LoginForm";
import {StyleSheet} from "react-native";

export default function LoginScreen ()  {
    return (
        <KeyboardAwareScrollView contentContainerStyle={styles.container}>
            <LoginForm />
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
});
