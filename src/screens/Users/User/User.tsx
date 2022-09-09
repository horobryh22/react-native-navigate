import {FlatList, ListRenderItem, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {array, UserType} from '../../../data/data';
import {useAppNavigation} from '../../../types/types';

export function User() {

    const navigation = useAppNavigation()

    const render: ListRenderItem<UserType> = ({item}) => {
        return <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Users', {screen: 'UserDetails', params: {id: item.id}})
            }}>
                <Text>{item.name}</Text>
                <Text>{item.age}</Text>
            </TouchableOpacity>
        </View>
    }

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <FlatList data={array} renderItem={render}
                      keyExtractor={(item) => item.id.toString()}></FlatList>
        </View>
    );
}