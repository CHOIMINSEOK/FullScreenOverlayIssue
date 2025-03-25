import React, {
    ForwardedRef,
    ReactNode,
    RefObject,
    forwardRef,
    useCallback,
    useState,
  } from 'react';
  import {
    FlatList,
    FlatListProps,
    LayoutChangeEvent,
    Platform,
    View,
    ViewToken,
  } from 'react-native';
  import ReAnimated from 'react-native-reanimated';
import { isEmpty, isNonNullish } from 'remeda';
  
  export type HorizontalViewPagerProps<T> = {
    onIndexChanged?: (offset: number) => void;
  } & FlatListProps<T>;
  
  function HorizontalViewPagerInner<T>(
    {
      data,
      renderItem,
      keyExtractor,
      initialNumToRender,
      initialScrollIndex,
      onIndexChanged,
      onScrollToIndexFailed,
      onScrollBeginDrag,
    }: HorizontalViewPagerProps<T>,
    ref?: ForwardedRef<FlatList<T>>
  ) {
    const [contentWidth, setContentWidth] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
  
    const handleLayout = (event: LayoutChangeEvent) => {
      const { width, height } = event.nativeEvent.layout;
      setContentWidth(width);
      setContentHeight(height);
  
      if (initialScrollIndex && Platform.OS === 'android') {
        // 안드로이드에서는 initialScrollIndex이 제대로 작동하지 않음.
        // 이를 해결하기 위해 setTimeout을 사용하여 첫번째 아이템이 렌더링된 이후에 스크롤을 시도함.
        // scrollToIndex 보다 scrollToOffset가 더 안정적임.
        setTimeout(() => {
          (ref as RefObject<FlatList>)?.current?.scrollToOffset({
            offset: width * initialScrollIndex,
            animated: false,
          });
        }, 100);
      }
    };

    const handleViewableItemsChanged = useCallback(
      ({ viewableItems }: { viewableItems: ViewToken<T>[] }) => {
        if (onIndexChanged && !isEmpty(viewableItems) && isNonNullish(viewableItems[0].index)) {
          onIndexChanged(viewableItems[0].index as number);
        }
      },
      [onIndexChanged]
    );
  
    return (
      <ReAnimated.FlatList
        ref={ref}
        data={data}
        renderItem={item => {
          return (
            <View style={{ width: contentWidth, height: contentHeight }}>{renderItem?.(item)}</View>
          );
        }}
        keyExtractor={keyExtractor}
        snapToAlignment="start"
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        overScrollMode="never"
        onLayout={handleLayout}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 100,
        }}
        getItemLayout={(_, index) => {
          return {
            length: contentWidth,
            offset: contentWidth * index,
            index,
          };
        }}
        maintainVisibleContentPosition={{
          minIndexForVisible: 0,
          autoscrollToTopThreshold: 10,
        }}
        onViewableItemsChanged={handleViewableItemsChanged}
        initialNumToRender={initialNumToRender}
        initialScrollIndex={initialScrollIndex}
        onScrollToIndexFailed={onScrollToIndexFailed}
        onScrollBeginDrag={onScrollBeginDrag}
      />
    );
  }
  
  const HorizontalViewPagerWithRef = forwardRef(HorizontalViewPagerInner);
  
  export const HorizontalViewPager = HorizontalViewPagerWithRef as <T>(
    props: HorizontalViewPagerProps<T> & { ref?: ForwardedRef<FlatList<T>> }
  ) => ReactNode;
  