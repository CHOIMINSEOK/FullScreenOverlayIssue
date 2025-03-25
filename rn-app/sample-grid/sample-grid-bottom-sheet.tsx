import React, { FC, PropsWithChildren, useCallback, useEffect, useRef, useState, forwardRef } from "react";
import { GridItem, GridItemType } from "./grid-model";
import { FlatList, ScrollView, Text, ViewProps } from "react-native";
import {BottomSheetBackdrop, BottomSheetModal, BottomSheetView} from "@gorhom/bottom-sheet";
import { SegmentedControl } from "./segmented-control";
import { HorizontalViewPager } from "./horizontal-view-pager";
import { mockGridItems } from "./mock-data";
import { SampleGrid } from "./sample-grid";
import { BottomSheetDefaultBackdropProps } from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheetBackdrop/types";


const GridItemTabTypes = [
    'A',
    'B', 
    'C'
] as const;


export const SampleGridBottomSheet: FC<PropsWithChildren<{initialType: GridItemType, onDismiss: () => void}>> = (props) => {
    const { initialType, onDismiss } = props;
    const horizontalViewPagerRef = useRef<FlatList<GridItemType> | null>(null);

    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    useEffect(() => {
        bottomSheetModalRef.current?.present();
    }, []);

    const segmentedControlRef = useRef<SegmentedControl>(null);

    const isHorizontalViewPagerDragging = useRef<boolean>(false);

    const initialScrollIndex = GridItemTabTypes.indexOf(initialType);

    const [selectedCategory, setSelectedCategory] = useState<GridItem | null>(null);

    const handleOnSegmentedControlIndexChanged = (index: number) => {
      isHorizontalViewPagerDragging.current = false;
      horizontalViewPagerRef.current?.scrollToIndex({
        animated: true,
        index: index,
      });
    };


    const handleOnHorizontalViewPagerScrollBeginDrag = () => {
      isHorizontalViewPagerDragging.current = true;
    };

    const handleOnHorizontalViewPagerIndexChanged = (index: number) => {
      if (isHorizontalViewPagerDragging.current) {
        segmentedControlRef.current?.scrollToIndex(index, true);
      }
    };

    return (
        <BottomSheetModal ref={bottomSheetModalRef} onDismiss={onDismiss} backdropComponent={Backdrop}>
          <BottomSheetView style={{ height: 600, width: '100%'}}>
              <SegmentedControl
              ref={segmentedControlRef}
              // @ts-ignore
              tabs={GridItemTabTypes}
              onTabChanged={handleOnSegmentedControlIndexChanged}
              initialScrollIndex={initialScrollIndex}
              />
              <HorizontalViewPager
                  ref={horizontalViewPagerRef}
                  style={{
                      width: '100%',
                  }}
                  data={GridItemTabTypes}
                  initialScrollIndex={initialScrollIndex}
                  renderItem={item => {
                      return (
                      <ScrollView showsVerticalScrollIndicator={false} style={{height: 600, width: '100%'}}>
                              <SampleGrid
                              type={item.item}
                              allCategories={mockGridItems}
                              selectedCategory={selectedCategory}
                              onCategoryClick={setSelectedCategory}
                              /> 
                      </ScrollView>
                      );
                  }}
                  onIndexChanged={handleOnHorizontalViewPagerIndexChanged}
                  onScrollBeginDrag={handleOnHorizontalViewPagerScrollBeginDrag}
              />
          </BottomSheetView>
        </BottomSheetModal>
    );
  }


  const Backdrop = (backDropProps: BottomSheetDefaultBackdropProps) => (
    <BottomSheetBackdrop
      {...backDropProps}
      pressBehavior="close"
      appearsOnIndex={0}
      disappearsOnIndex={-1}
    />
  );