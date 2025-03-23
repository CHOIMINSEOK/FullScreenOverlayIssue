import React, { useImperativeHandle, useState } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import ReAnimated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export type SegmentedControl = {
  scrollToIndex: (index: number, animated: boolean) => void;
};

export const SegmentedControl = ({
  tabs,
  onTabChanged,
  initialScrollIndex = 0,
  ref,
}: {
  tabs: string[];
  onTabChanged: (index: number) => void;
  initialScrollIndex?: number;
  ref?: React.Ref<SegmentedControl>;
}) => {
  const [isAnimateEnabled, setIsAnimateEnabled] = useState<boolean>(false);

  const [currentTabIndex, setCurrentIndex] = useState(initialScrollIndex);

  useImperativeHandle(ref, () => ({
    scrollToIndex: (index: number, animated: boolean) => {
      setIsAnimateEnabled(animated);
      setCurrentIndex(index);
    },
  }));

  const height = useSharedValue(0);
  const width = useSharedValue(0);

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    if (tabs.length === 0) {
      return {};
    }
    const thumbWidth = (width.value - 8 - (tabs.length - 1) * 2) / tabs.length;
    const thumbHeight = height.value - 8;

    const interpolateInputRange = tabs.map((_, index) => index);
    const interpolateOutputRange = tabs.map((_, index) => 4 + (thumbWidth + 2) * index);

    const moveValue = interpolate(currentTabIndex, interpolateInputRange, interpolateOutputRange);

    const translateValue = withTiming(moveValue, {
      duration: isAnimateEnabled ? 200 : 0,
    });

    return {
      transform: [{ translateX: translateValue }],
      width: thumbWidth,
      height: thumbHeight,
    };
  });

  const handleOnTabClick = (index: number) => {
    setIsAnimateEnabled(true);
    setCurrentIndex(index);
    onTabChanged(index);
  };


  return (
    <ReAnimated.View
      accessibilityRole={'tablist'}
      onLayout={e => {
        height.value = e.nativeEvent.layout.height;
        width.value = e.nativeEvent.layout.width;
      }}
      style={styles.container}
    >
      <ReAnimated.View
        style={[styles.thumb, thumbAnimatedStyle]}
      />
      {tabs.map((tab, index) => (
        <Pressable
          key={tab}
          style={styles.tabButton}
          onPress={() => handleOnTabClick(index)}
        >
          <View
            accessible
            accessibilityRole="tab"
            accessibilityLabel={tab}
            accessibilityShowsLargeContentViewer
            accessibilityLargeContentTitle={tab}
            accessibilityState={{ selected: currentTabIndex === index }}
            accessibilityHint={`총 ${tabs.length}개 중 ${index + 1}번째`}
          >
            <Text
              style={[
                styles.tabText,
                currentTabIndex === index && styles.selectedTabText
              ]}
              allowFontScaling={false}
            >
              {tab}
            </Text>
          </View>
        </Pressable>
      ))}
    </ReAnimated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    borderRadius: 16,
    backgroundColor: '#YOUR_SURFACE_CONTAINER_HIGHEST_COLOR',
    padding: 4,
  },
  thumb: {
    position: 'absolute',
    borderRadius: 12,
    backgroundColor: '#YOUR_SURFACE_CONTAINER_COLOR',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 6,
  },
  tabText: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 14,
    color: '#000000',
  },
  selectedTabText: {
    color: '#ff0000',
  },
});
