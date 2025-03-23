import React from 'react';
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
import { SampleGridBottomSheet } from './sample-grid/sample-grid-bottom-sheet';
import { GridItemType } from './sample-grid/grid-model';

const Stack = createNativeStackNavigator();

const HomeScreen = () => {

    const [selectedType, setSelectedType] = useState<GridItemType | null>(null);

    return (
        <BottomSheetModalProvider>
            <Text>Home Screen</Text>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button title={'Click A'} onPress={() => setSelectedType('A')}/>
                <Button title={'Click B'} onPress={() => setSelectedType('B')}/>
                <Button title={'Click C'} onPress={() => setSelectedType('C')}/>
                {selectedType && <SampleGridBottomSheet initialType={selectedType} onDismiss={() => setSelectedType(null)} />}
            </View>
        </BottomSheetModalProvider>
    )
}


function App(): React.ReactElement {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={{
                    headerShown: false,
                }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
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
