import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import CustomButton from './components/Button';

function App() {
    const [screenContent, setScreenContent] = useState("0");
    const { width, height } = useWindowDimensions();
    const isPortrait = height > width;

    const resetScreen = () => {
        setScreenContent("0");
    };

    const handleNumberPress = (digit: string) => {
        if (screenContent === "0") {
            setScreenContent(digit);
        } else {
            setScreenContent(screenContent + digit);
        }
    };

    const handleOperatorPress = (operator: string) => {
        setScreenContent(screenContent + operator);
    };

    return (
        <View style={appStyles.container}>
            <StatusBar barStyle="light-content" backgroundColor="#f39c12" />
            <View style={appStyles.screenArea}>
                <Text style={appStyles.screenText}>{screenContent}</Text>
            </View>

         
            {isPortrait && (
                <>
                    <View style={appStyles.row}>
                        <CustomButton label={"AC"} action={resetScreen} isReset />
                        <View style={appStyles.emptySpace}></View>
                        <CustomButton label={"÷"} action={() => handleOperatorPress("÷")} isOperator />
                    </View>
                    <View style={appStyles.row}>
                   
                        <CustomButton label={"7"} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"8"} action={() => handleNumberPress("8")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"9"} action={() => handleNumberPress("9")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"×"} action={() => handleOperatorPress("×")} isOperator customStyle={appStyles.largeButton} />
                    </View>
                    <View style={appStyles.row}>
                        <CustomButton label={"4"} action={() => handleNumberPress("4")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"5"} action={() => handleNumberPress("5")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"6"} action={() => handleNumberPress("6")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"-"} action={() => handleOperatorPress("-")} isOperator customStyle={appStyles.largeButton} />
                    </View>
                    <View style={appStyles.row}>
                        <CustomButton label={"1"} action={() => handleNumberPress("1")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"2"} action={() => handleNumberPress("2")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"3"} action={() => handleNumberPress("3")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"+"} action={() => handleOperatorPress("+")} isOperator customStyle={appStyles.largeButton} />
                    </View>
                    <View style={appStyles.row}>
                        <CustomButton label={"0"} action={() => handleNumberPress("0")} customStyle={appStyles.largeButton} />
                        <CustomButton label={","} action={() => {}} customStyle={appStyles.largeButton} />
                        <CustomButton label={"="} action={() => {}} isOperator customStyle={appStyles.largeButton} />
                    </View>
                </>
            )}

          
            {!isPortrait && (
                <>
                    <View style={appStyles.row}>
                    <CustomButton label={"("} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />
                    <CustomButton label={")"} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />
                    <CustomButton label={"mc"} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />
                    <CustomButton label={"m+"} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />
                    <CustomButton label={"m-"} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />
                    <CustomButton label={"mr"} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />

                        <CustomButton label={"AC"} action={resetScreen} isReset customStyle={appStyles.largeButton} />
                             <CustomButton label={"+/-"} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />
                             <CustomButton label={"%"} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"÷"} action={() => handleOperatorPress("÷")} isOperator customStyle={appStyles.largeButton} />
                    </View>
                    <View style={appStyles.row}>
                    <CustomButton label={"2nd"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"x²"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"x³"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"xʸ"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"eˣ"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"10ˣ"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                        <CustomButton label={"7"} action={() => handleNumberPress("7")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"8"} action={() => handleNumberPress("8")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"9"} action={() => handleNumberPress("9")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"×"} action={() => handleOperatorPress("×")} isOperator customStyle={appStyles.largeButton} />
                    </View>
                    <View style={appStyles.row}>
                    <CustomButton label={"⅟ₓ"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"²√x"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"³√x"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"ʸ√x"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"ln"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"log₁₀"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                        <CustomButton label={"4"} action={() => handleNumberPress("4")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"5"} action={() => handleNumberPress("5")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"6"} action={() => handleNumberPress("6")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"-"} action={() => handleOperatorPress("-")} isOperator customStyle={appStyles.largeButton} />
                    </View>
                    <View style={appStyles.row}>
                    <CustomButton label={"x!"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"sin"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"cos"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"tan"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"e"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"EE"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                        <CustomButton label={"1"} action={() => handleNumberPress("1")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"2"} action={() => handleNumberPress("2")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"3"} action={() => handleNumberPress("3")} customStyle={appStyles.largeButton} />
                        <CustomButton label={"+"} action={() => handleOperatorPress("+")} isOperator customStyle={appStyles.largeButton} />
                    </View>
                    <View style={appStyles.row}>
                    <CustomButton label={"Rad"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"sinh"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"cosh"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"tanh"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"π"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                    <CustomButton label={"Rand"} action={() => handleNumberPress("7")} customStyle={appStyles.smallButton} />
                        <CustomButton label={"0"} action={() => handleNumberPress("0")} customStyle={appStyles.largeButton} />
                        <CustomButton label={","} action={() => {}} customStyle={appStyles.largeButton} />
                        <CustomButton label={"="} action={() => {}} isOperator customStyle={appStyles.largeButton} />
                    </View>
                </>
            )}
        </View>
    );
}

const appStyles = StyleSheet.create({
    screenArea: {
        backgroundColor: '#525356',
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 0,
    },
    screenText: {
        color: 'white',
        textAlign: 'right',
        fontSize: 84,
    },
    row: {
        maxWidth: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    container: {
        backgroundColor: '#525356',
        minHeight: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    emptySpace: {
        backgroundColor: '#7c7d7f',
        flex: 2,
        marginRight: 2,
        marginBottom: 2,
    },
   
    largeButton: {
        width: 80,  
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        
        
        
    },

    smallButton: {
        width: 20,  
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        backgroundColor: "#2E2E2E"
    },
});

export default App;
