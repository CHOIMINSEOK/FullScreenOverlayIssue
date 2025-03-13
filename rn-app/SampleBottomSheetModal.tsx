import {BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView} from "@gorhom/bottom-sheet";
import {Button, Dimensions, Text} from "react-native";
import {RefObject} from "react";
import {useNavigation} from "@react-navigation/native";

export const SampleBottomSheetModal = ({
    ref, onDismiss
}: {
    ref: RefObject<BottomSheetModal>,
    onDismiss: () => void,
}) => {
    const navigation = useNavigation();

    return ( <BottomSheetModal
        ref={ref}
        enablePanDownToClose={true}
        onDismiss={onDismiss}
        maxDynamicContentSize={Dimensions.get('window').height * 0.9}
        backdropComponent={(props) => <BottomSheetBackdrop
            {...props}
            pressBehavior="close"
            appearsOnIndex={0}
            disappearsOnIndex={-1}
        />}
    >
        <BottomSheetScrollView>
            <Button title={'Go to NonModalPage'} onPress={() => navigation.navigate('NonModalPage')}/>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉</Text>
            <Text>Awesome 🎉Awesome 🎉</Text>
            <Text>Awesome 🎉Awesome 🎉</Text>
            <Text>Awesome 🎉Awesome 🎉</Text>
            <Text>Awesome 🎉Awesome 🎉</Text>
            <Text>Awesome 🎉Awesome 🎉</Text>
            <Text>Awesome 🎉Awesome 🎉</Text>
            <Text>Awesome 🎉Awesome 🎉</Text>
            <Text>Awesome 🎉Awesome 🎉</Text>
            <Text>Awesome 🎉Awesome 🎉</Text>
            <Text>End of Awesome 🎉Awesome 🎉</Text>
        </BottomSheetScrollView>
    </BottomSheetModal>)
}
