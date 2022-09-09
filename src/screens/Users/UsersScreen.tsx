import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NestedStack} from '../../types/types';
import {MainScreen} from '../Users/Main/Main';
import {MainDetailsScreen} from '../Users/MainDetails/MainDetails';

const Stack = createStackNavigator<NestedStack>();

export function UsersScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Main'} component={MainScreen}/>
            <Stack.Screen name={'MainDetails'} component={MainDetailsScreen}/>
        </Stack.Navigator>
    );
}
