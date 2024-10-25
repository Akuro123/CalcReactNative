import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './components/Button';

function App() {
    const [isVisible, setIsVisible] = useState(false);

    const handleToggle = () => {
        setIsVisible(prev => !prev);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Zadanie 2</Text>
            <Button title={isVisible ? "Ukryj" : "Pokaż"} onPress={handleToggle} />
            <Text style={styles.subtitle}>Nazywam się</Text>
            {isVisible && <Text style={styles.name}>Jakub Wiatr</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 18,
        marginTop: 20,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    }
});

export default App;
