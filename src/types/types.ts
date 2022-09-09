import {
    CompositeScreenProps,
    NavigationProp,
    NavigatorScreenParams,
    useNavigation
} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import {StackScreenProps} from '@react-navigation/stack';


export type RootStackParamList = {
    Home: undefined
    Users: NavigatorScreenParams<UsersNestedStack>
    Settings: NavigatorScreenParams<SettingsNestedStack>
}

export type UsersNestedStack = {
    User: undefined
    UserDetails: {
        id: number
    }
}

export type SettingsNestedStack = {
    Buttons: undefined
    Sound: undefined
    ScreenSettings: undefined
    Brightness: undefined
    Theme: undefined
}

export type MainDetailsPropsType =
    CompositeScreenProps<BottomTabScreenProps<UsersNestedStack, 'UserDetails'>, StackScreenProps<RootStackParamList>>;

type UseNavigationType = NavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<UseNavigationType>();