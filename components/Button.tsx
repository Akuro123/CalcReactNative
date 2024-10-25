import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProperties {
    label: string;
    action: () => void;
    isOperator?: boolean;
    isReset?: boolean;
}

export default function Button({ label, action, isOperator, isReset }: ButtonProperties) {
    return (
        <TouchableOpacity
            style={[
                isOperator ? buttonStyles.operatorButton : isReset ? buttonStyles.resetButton : buttonStyles.numberButton,
                label === "0" ? buttonStyles.zeroButton : ""
            ]}
            onPress={action}
        >
            <Text style={buttonStyles.textStyle}>{label}</Text>
        </TouchableOpacity>
    );
}

const buttonStyles = StyleSheet.create({
    operatorButton: {
        backgroundColor: '#f39c12',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginBottom: 2,
    },
    numberButton: {
        backgroundColor: '#7c7d7f',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginRight: 2,
        marginBottom: 2,
    },
    resetButton: {
        backgroundColor: '#7c7d7f',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        marginRight: 2,
        marginBottom: 2,
    },
    textStyle: {
        color: 'white',
        fontSize: 48,
        padding: 10,
    },
    zeroButton: {
        flex: 2,
    },
});
