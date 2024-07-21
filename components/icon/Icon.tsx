import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';

type IconProps = {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
    size?: number;
    style?: object;
};

export function Icon({ name, color, size = 20, style }: IconProps) {
    return <FontAwesome name={name} size={size} style={style} color={color} />;
}
