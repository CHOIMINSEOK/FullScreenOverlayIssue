import {
    Button,
    StyleSheet, Text,
    useColorScheme, View,
} from 'react-native';

import {NavigationContainer, useNavigation} from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {BottomSheetModal, BottomSheetModalProvider, BottomSheetView} from "@gorhom/bottom-sheet";
import {useCallback, useRef, useState} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('Profile')
    }

    return (
        <BottomSheetModalProvider>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title={'Click'} onPress={handleClick}/>
            </View>
        </BottomSheetModalProvider>
    )
}

const ProfileScreen = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    // ref
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // callbacks
    const handlePresentModalPress = useCallback(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const onDismiss  = useCallback(() => {
        bottomSheetModalRef.current?.dismiss();
    }, []);

    return (
        <BottomSheetModalProvider>

        <View>
            <Text>
                ProfileStack

            </Text>
            <Button title={'Click'} onPress={handlePresentModalPress}/>
            <BottomSheetModal
                ref={bottomSheetModalRef}
                enablePanDownToClose={true}
                onDismiss={onDismiss}
            >
                <BottomSheetView>
                    <Text>Awesome 🎉</Text>
                    <Text>Awesome 🎉</Text>
                    <Text>Awesome 🎉</Text>
                    <Text>Awesome 🎉</Text>
                    <Text>Awesome 🎉</Text>
                    <Text>Awesome 🎉</Text>
                    <Text>Awesome 🎉</Text>
                </BottomSheetView>
            </BottomSheetModal>
        </View>
        </BottomSheetModalProvider>

    )
}

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';


    return (
        <GestureHandlerRootView>
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
        </GestureHandlerRootView>
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
