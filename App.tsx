import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/Button';

function App() {
  const [screenContent, setScreenContent] = useState("0");

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
    setScreenContent(screenContent  + operator);
  };

  return (
    <View style={appStyles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#f39c12" />
      <View style={appStyles.screenArea}>
        <Text style={appStyles.screenText}>{screenContent}</Text>
      </View>
      <View style={appStyles.row}>
        <CustomButton label={"AC"} action={resetScreen} isReset />
        <View style={appStyles.emptySpace}></View>
        <CustomButton label={"÷"} action={() => handleOperatorPress("÷")} isOperator />
      </View>
      <View style={appStyles.row}>
        <CustomButton label={"7"} action={() => handleNumberPress("7")} />
        <CustomButton label={"8"} action={() => handleNumberPress("8")} />
        <CustomButton label={"9"} action={() => handleNumberPress("9")} />
        <CustomButton label={"×"} action={() => handleOperatorPress("×")} isOperator />
      </View>
      <View style={appStyles.row}>
        <CustomButton label={"4"} action={() => handleNumberPress("4")} />
        <CustomButton label={"5"} action={() => handleNumberPress("5")} />
        <CustomButton label={"6"} action={() => handleNumberPress("6")} />
        <CustomButton label={"-"} action={() => handleOperatorPress("-")} isOperator />
      </View>
      <View style={appStyles.row}>
        <CustomButton label={"1"} action={() => handleNumberPress("1")} />
        <CustomButton label={"2"} action={() => handleNumberPress("2")} />
        <CustomButton label={"3"} action={() => handleNumberPress("3")} />
        <CustomButton label={"+"} action={() => handleOperatorPress("+")} isOperator />
      </View>
      <View style={appStyles.row}>
        <CustomButton label={"0"} action={() => handleNumberPress("0")} />
        <CustomButton label={","} action={() => {}} />
        <CustomButton label={"="} action={() => {}} isOperator />
      </View>
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
  },
  emptySpace: {
    backgroundColor: '#7c7d7f',
    flex: 2,
    marginRight: 2,
    marginBottom: 2,
  },
  container: {
    backgroundColor: '#525356',
    minHeight: '100%',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
});

export default App;
