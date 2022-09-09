import {FlatList, ListRenderItem, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {array, objType} from '../../../data/data';
import {useAppNavigation} from '../../../types/types';

export function MainScreen() {

    const navigation = useAppNavigation()

    const render: ListRenderItem<objType> = ({item}) => {
        return <View>
            <TouchableOpacity onPress={() => {
                navigation.navigate('Users', {screen: 'MainDetails', params: {id: item.id}})
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