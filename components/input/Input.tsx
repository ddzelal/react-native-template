import React from 'react';
import { TextInput, View, Pressable, TextInputProps, StyleProp, ViewStyle, TextStyle } from 'react-native';
import styles from './Input.styles';
import {useThemeColor} from "@/components/Themed";
import {Icon} from "@/components/icon/Icon";

type InputProps = TextInputProps & {
    iconLeft?: React.ComponentProps<typeof Icon>['name'];
    iconRight?: React.ComponentProps<typeof Icon>['name'];
    lightColor?: string;
    darkColor?: string;
    iconLeftAction?: () => void;
    iconRightAction?: () => void;
    iconLeftStyle?: StyleProp<TextStyle>;
    iconRightStyle?: StyleProp<TextStyle>;
};

export function Input(props: InputProps) {
    const {
        iconLeft,
        iconRight,
        lightColor,
        darkColor,
        style,
        iconLeftAction,
        iconRightAction,
        iconLeftStyle,
        iconRightStyle,
        ...otherProps
    } = props;

    const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');
    const textColor = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

    return (
        <View style={[styles.container, { backgroundColor }]}>
            {iconLeft && (
                iconLeftAction ? (
                    <Pressable testID="testID" onPress={iconLeftAction}>
                        <Icon name={iconLeft} size={20} style={[styles.icon, iconLeftStyle]} color={textColor} />
                    </Pressable>
                ) : (
                    <Icon name={iconLeft} size={20} style={[styles.icon, iconLeftStyle]} color={textColor} />
                )
            )}
            <TextInput
                style={[styles.input, { color: textColor }, style]}
                placeholderTextColor={textColor}
                {...otherProps}
            />
            {iconRight && (
                iconRightAction ? (
                    <Pressable onPress={iconRightAction}>
                        <Icon  name={iconRight} size={20} style={[styles.icon, iconRightStyle]} color={textColor} />
                    </Pressable>
                ) : (
                    <Icon name={iconRight} size={20} style={[styles.icon, iconRightStyle]} color={textColor} />
                )
            )}
        </View>
    );
}
