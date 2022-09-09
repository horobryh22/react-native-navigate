import React from 'react';
import {useAppNavigation} from '../../../types/types';
import {FlatList, ListRenderItem, Text, TouchableOpacity, View} from 'react-native';
import {buttons, ButtonType} from '../../../data/data';

export const Buttons = () => {
    const navigation = useAppNavigation()

    const render: ListRenderItem<ButtonType> = ({item}) => {
        return <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Settings', {screen: item.navigate})
            }}>
                <Text>{item.buttonName}</Text>
            </TouchableOpacity>
        </View>
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FlatList data={buttons} renderItem={render}
                      keyExtractor={(item) => item.id.toString()}></FlatList>
        </View>
    );
};