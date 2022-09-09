import {
    NavigatorScreenParams,
    NavigationProp,
    useNavigation,
    CompositeScreenProps
} from '@react-navigation/native';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs'
import {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined
    Users: NavigatorScreenParams<NestedStack>
    Settings: undefined
}

export type NestedStack = {
    Main: undefined
    MainDetails: {
        id: number
    }
}

export type MainDetailsPropsType =
    CompositeScreenProps<BottomTabScreenProps<NestedStack, 'MainDetails'>, StackScreenProps<RootStackParamList>>;

type UseNavigationType = NavigationProp<RootStackParamList>;

export const useAppNavigation = () => useNavigation<UseNavigationType>();