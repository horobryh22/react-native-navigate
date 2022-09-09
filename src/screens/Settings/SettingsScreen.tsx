import React from 'react';
import {SettingsNestedStack} from '../../types/types';
import {createStackNavigator} from '@react-navigation/stack';
import {Buttons} from '../../../src/screens/Settings/Buttons/Buttons';
import {Sound} from '../../../src/screens/Settings/Sound/Sound';
import {Theme} from '../../../src/screens/Settings/Theme/Theme';
import {Brightness} from '../../../src/screens/Settings/Brightness/Brightness';
import {ScreenSettings} from '../../../src/screens/Settings/ScreenSettings/ScreenSettings';


const Stack = createStackNavigator<SettingsNestedStack>();

export function SettingsScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Buttons'} component={Buttons}/>
            <Stack.Screen name={'Sound'} component={Sound}/>
            <Stack.Screen name={'Theme'} component={Theme}/>
            <Stack.Screen name={'Brightness'} component={Brightness}/>
            <Stack.Screen name={'ScreenSettings'} component={ScreenSettings} options={{title: 'JustTestTitle'}}/>
        </Stack.Navigator>
    );
}