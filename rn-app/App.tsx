import {
    Button,
    SafeAreaView,
    StyleSheet, Text,
    useColorScheme, View,
} from 'react-native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer, useNavigation} from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('Profile')
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button title={'Click'} onPress={handleClick}/>
        </View>
    )
}

const ProfileScreen = () => {
    return (
        <Text>
            ProfileStack
        </Text>
    )
}

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';


    return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Group screenOptions={{
                        presentation: 'modal'
                    }}>
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                    </Stack.Group>
                </Stack.Navigator>
            </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '600',
    },
    bold: {
        fontWeight: '700',
    },
});

export default App;
