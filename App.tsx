import {StatusBar} from 'expo-status-bar';
import {StyleSheet, View} from 'react-native';
import {Main} from './src/Main';
import {NavigationContainer} from '@react-navigation/native';
import {CustomInput} from './src/CustomInput';
import {useState} from 'react';

export default function App() {

    const [isLogged, setIsLogged] = useState(false);
    const [error, setError] = useState<null | string>(null);

    return (
        <NavigationContainer>
            <View style={styles.container}>
                {isLogged ? <Main/> : <CustomInput setIsLogged={setIsLogged} error={error} setError={setError}/>}
                <StatusBar style="auto"/>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 50,
    },
});
