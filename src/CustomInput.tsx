import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';

export type CustomInputType = {
    setIsLogged: (value: boolean) => void;
    setError: (value: string | null) => void;
    error: string | null;
}

export const CustomInput = ({setIsLogged, error, setError}: CustomInputType) => {
    const [email, onChangeEmail] = React.useState('');
    const [password, onChangePassword] = React.useState('');

    const login = () => {
        if (email === '123' && password === '123') {
            setError(null);
            setIsLogged(true);
            return;
        }

        setError('Incorrect email or password');
    }


    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                onChange={() => setError(null)}
                value={email}
                placeholder="login"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                onChange={() => setError(null)}
                value={password}
                secureTextEntry={true}
                placeholder="password"
                textContentType={'password'}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={login}
            >
                <Text>Log In</Text>
            </TouchableOpacity>
            <Text style={styles.error}>{error}</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 200,
        alignItems: 'center'
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 300
    },
    button: {
        marginTop: 20,
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300
    },
    error: {
        marginTop: 10,
        color: 'red',
    }
});
