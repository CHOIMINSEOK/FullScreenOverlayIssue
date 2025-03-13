import {
    Button, Dimensions,
    StyleSheet, Text,
    useColorScheme, View,
} from 'react-native';

import {NavigationContainer, useNavigation} from "@react-navigation/native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    BottomSheetBackdrop,
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetScrollView,
} from "@gorhom/bottom-sheet";
import {useCallback, useRef, useState} from "react";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {FullWindowOverlay} from "react-native-screens";
import {SampleBottomSheetModal} from "./SampleBottomSheetModal";

const Stack = createNativeStackNavigator();

const HomeScreen = () => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('Profile')
    }

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
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title={'Click'} onPress={handleClick}/>
                <Button title={'BottomSheet Click'} onPress={handlePresentModalPress}/>
                <SampleBottomSheetModal ref={bottomSheetModalRef} onDismiss={onDismiss} />
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
        <View style={{ flex: 1 }} onLayout={e => {
            console.log(e.nativeEvent.layout.height)
        }}>
            <Text>
                ProfileStack

            </Text>
            <Button title={'Click'} onPress={handlePresentModalPress}/>
            <SampleBottomSheetModal ref={bottomSheetModalRef} onDismiss={onDismiss} />
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

export default App;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: `rgba(0,0,0,0.5)`,
    },
    box: {
        width: 40,
        height: 40,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'red',
    },
});
