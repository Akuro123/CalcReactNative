import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
    title: string;
    onPress: () => void;
}

function Button({ title, onPress }: ButtonProps) {
    return (
        <TouchableOpacity style={buttonTheme.button} onPress={onPress}>
            <Text style={buttonTheme.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const buttonTheme = StyleSheet.create({
    button: {
        backgroundColor: '#7c7d7f', 
        width: 100, 
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
        color: 'white',
        fontSize: 16,
    }
});

export default Button;
