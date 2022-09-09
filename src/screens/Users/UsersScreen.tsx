import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UsersNestedStack} from '../../types/types';
import {User} from '../../../src/screens/Users/User/User';
import {UserDetails} from '../../../src/screens/Users/UserDetails/UserDetails';

const Stack = createStackNavigator<UsersNestedStack>();

export function UsersScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'User'} component={User}/>
            <Stack.Screen name={'UserDetails'} component={UserDetails}/>
        </Stack.Navigator>
    );
}
