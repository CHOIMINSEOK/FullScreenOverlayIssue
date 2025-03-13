import {BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView} from "@gorhom/bottom-sheet";
import {Dimensions, Text} from "react-native";
import {FullWindowOverlay} from "react-native-screens";
import {RefObject} from "react";

export const SampleBottomSheetModal = ({
    ref, onDismiss
}: {
    ref: RefObject<BottomSheetModal>,
    onDismiss: () => void,
}) => {
    return ( <BottomSheetModal
        ref={ref}
        enablePanDownToClose={true}
        onDismiss={onDismiss}
        maxDynamicContentSize={Dimensions.get('window').height * 0.9}
        containerComponent={({children}) => (<FullWindowOverlay>{children}</FullWindowOverlay>)}
        backdropComponent={(props) => <BottomSheetBackdrop
            {...props}
            pressBehavior="close"
            appearsOnIndex={0}
            disappearsOnIndex={-1}
        />}
    >
        <BottomSheetScrollView>
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
