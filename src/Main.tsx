import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RootStackParamList} from '../src/types/types';
import {DetailsScreen} from '../src/screens/Details/DetailsScreen';
import {UsersScreen} from '../src/screens/Users/UsersScreen';
import {HomeScreen} from '../src/screens/Home/HomeScreen';

const Tab = createBottomTabNavigator<RootStackParamList>();

export const Main = () => {
    return (
        <View style={styles.container}>
            <Tab.Navigator initialRouteName={'Users'}  screenOptions={{headerShown: false}}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="Details" component={DetailsScreen}/>
                <Tab.Screen name="Users" component={UsersScreen}/>
            </Tab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});