import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../src/types/types';
import {SettingsScreen} from '../src/screens/Settings/SettingsScreen';
import {UsersScreen} from '../src/screens/Users/UsersScreen';
import {HomeScreen} from '../src/screens/Home/HomeScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Main = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator initialRouteName={'Home'}  screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Users" component={UsersScreen}/>
                <Tab.Screen name="Settings" component={SettingsScreen}/>
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});