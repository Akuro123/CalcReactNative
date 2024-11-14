import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';
import Button from './components/Button'; 
import SplashScreen from 'react-native-splash-screen';
const getOrientation = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width ? 'portrait' : 'landscape';
};

const App = () => {
    const [orientation, setOrientation] = useState<'portrait' | 'landscape'>(getOrientation());
    const [display, setDisplay] = useState('0');
    useEffect(() => {
        if(Platform.OS=='android')
       SplashScreen.hide();
        }, []);
    

    useEffect(() => {
        const updateOrientation = () => {
            setOrientation(getOrientation());
        };

        const dimensionChangeListener = Dimensions.addEventListener('change', updateOrientation);
        return () => dimensionChangeListener.remove();
    }, []);

    const handlePress = (label: string) => {
        if (label === 'AC') setDisplay('0');
        else setDisplay(prev => (prev === '0' ? label : prev + label));
    };

    const portraitButtons = [
        ['AC', '', '', '÷'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', ',', '=']
    ];

    const landscapeButtons = [
        ['(', ')', 'mc', 'm+', 'm-', 'mr', 'AC', '+/-', '%', '÷'],
        ['2nd', 'x²', 'x³', 'xʸ', 'eˣ', '10ˣ', '7', '8', '9', '×'],
        ['√x', '∛x', '∜x', 'y√x', 'ln', 'log₁₀', '4', '5', '6', '-'],
        ['x!', 'sin', 'cos', 'tan', 'e', 'EE', '1', '2', '3', '+'],
        ['Rad', 'sinh', 'cosh', 'tanh', 'π', 'Rand', '0', ',', '=']
    ];

    const renderButtons = (buttonArray: string[][]) => {
        return buttonArray.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
                {row.map((label, colIndex) => (
                    <Button
                        key={colIndex}
                        label={label}
                        action={() => handlePress(label)}
                        isOperator={['÷', '×', '-', '+', '='].includes(label)}
                        isReset={label === 'AC'}
                        customStyle={label === '0' ? styles.zeroButton : {}}
                    />
                ))}
            </View>
        ));
    };

    return (
        <View style={styles.container}>
            <View style={styles.displayContainer}>
                <Text style={styles.displayText}>{display}</Text>
            </View>
            <View style={styles.buttonContainer}>
                {orientation === 'portrait'
                    ? renderButtons(portraitButtons)
                    : renderButtons(landscapeButtons)}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
    },
    displayContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#555',
        paddingHorizontal: 20,
    },
    displayText: {
        fontSize: 60,
        color: '#fff',
    },
    buttonContainer: {
        
       
    },
    row: {
        flexDirection: 'row',
        
    },
    zeroButton: {
        flex: 2,
    },
});

export default App;
