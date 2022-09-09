import {Text, View} from 'react-native';
import React from 'react';
import {MainDetailsPropsType} from '../../../types/types';

export function MainDetailsScreen({route}: MainDetailsPropsType) {
    console.log(route.params.id)
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Main Details Screen</Text>
            <Text>{route.params.id}</Text>
        </View>
    );
}