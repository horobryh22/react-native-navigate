import {Text, View} from 'react-native';
import React from 'react';
import {MainDetailsPropsType} from '../../../types/types';

export function UserDetails({route}: MainDetailsPropsType) {
    console.log(route.params.id)
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>User Details Screen</Text>
            <Text>{route.params.id}</Text>
        </View>
    );
}