import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { Pressable, Text, View, StyleSheet, Image } from 'react-native';
import { convertCategoryListToGrid, findCategoryRowInGrid } from './sample-grid.calc';
import { getChildCategoryEntities, getParentCategoryEntities, GridItem, GridItemType } from './grid-model';

export const SampleGrid = ({
  type,
  allCategories,
  selectedCategory,
  onCategoryClick,
}: {
  type: GridItemType;
  allCategories: GridItem[];
  selectedCategory: GridItem | null;
  onCategoryClick: (category: GridItem) => void;
}) => {

  const parentCategories: GridItem[] = useMemo(() => getParentCategoryEntities(allCategories), [allCategories]);
  const gridParentCategories = useMemo(() => convertCategoryListToGrid(parentCategories, 4), [parentCategories]);

  const [selectedParentCategory, setSelectedParentCategory] = useState<GridItem | null>(null);
  const [selectedChildCategory, setSelectedChildCategory] = useState<GridItem | null>(null);
  const [selectedCategoryRowPosition, setSelectedCategoryRowPosition] = useState<number | null>(null);


  const onClickParentCategory = useCallback(
    (category: GridItem, rowPosition: number) => {
      if (category !== selectedParentCategory) {
        setSelectedChildCategory(null);
      }
      setSelectedParentCategory(category);
      setSelectedCategoryRowPosition(rowPosition);
      onCategoryClick(category);
    },
    [onCategoryClick, selectedParentCategory]
  );

  return (
    <View style={styles.container}>
      {gridParentCategories.map((categoryList, row) => {

        return (
        <Fragment key={`category-row-${row}`}>
          <View style={styles.row}>
            {categoryList.map((category, col) => {
              switch (category) {
                case 'CATEGORY_MANAGEMENT':
                  return (
                    <CategoryManagementItem
                      key={'category-management-item'}
                      onPress={() => {
                        // do something
                      }}
                    />
                  );
                case 'EMPTY':
                  return <View key={`empty-item-${col}`} style={{ minHeight: 100, flex: 1 }} />;
                default:
                  const isSelected = category.id === selectedParentCategory?.id;
                  return (
                    <ParentCategoryItem
                      key={`parent-category-item-${category.id}`}
                      isSelected={isSelected}
                      type={type}
                      category={category}
                      rowPosition={row}
                      onPress={onClickParentCategory}
                    />
                  );
              }
            })}
          </View>
          {selectedParentCategory !== null &&
            row === selectedCategoryRowPosition &&
            getChildCategoryEntities(allCategories, selectedParentCategory.id).length > 0 && (
              <View style={styles.childCategoryContainer}>
                {getChildCategoryEntities(allCategories, selectedParentCategory.id).map(
                  category => {
                    const isSelected = category.id === selectedChildCategory?.id;
                    return (
                      <ChildCategoryItem
                        key={`child-category-item-${category.id}`}
                        isSelected={isSelected}
                        type={type}
                        categoryName={category.name}
                        onPress={() => {
                          setSelectedChildCategory(category);
                          onCategoryClick(category);
                        }}
                      />
                    );
                  }
                )}
              </View>
            )}
        </Fragment>
      )
      })}
      <View style={styles.bottomSpace} />
    </View>
  );
};

const ParentCategoryItem = ({
  isSelected,
  type,
  category,
  rowPosition,
  onPress,
}: {
  isSelected: boolean;
  type: GridItemType;
  category: GridItem;
  rowPosition: number;
  onPress: (category: GridItem, rowPosition: number) => void;
}) => {
  const containerBorderStyle = {
    borderColor: type === 'A' 
      ? styles.colors.greenNormal 
      : type === 'B'
        ? styles.colors.violetNormal 
        : styles.colors.grayStrong,
    borderWidth: isSelected ? 2 : 1,
  };

  return (
    <Pressable
      style={styles.parentCategoryItem}
      onPress={() => onPress(category, rowPosition)}
    >
      <View style={[styles.borderContainer, containerBorderStyle]} />
      {/* <Image style={styles.categoryImage} source={{ uri: category.imageUrl }} /> */}
      <Text
        style={[
          styles.categoryText,
          isSelected && styles.selectedCategoryText
        ]}
        numberOfLines={2}
      >
        {category.name}
      </Text>
    </Pressable>
  );
};

const CategoryManagementItem = ({ onPress }: { onPress: () => void }) => {
  return (
    <Pressable
      style={styles.managementItem}
      onPress={onPress}
    >
      <Text style={styles.managementText}>
        {'Edit'}
      </Text>
    </Pressable>
  );
};

const ChildCategoryItem = ({
  isSelected,
  type,
  categoryName,
  onPress,
}: {
  isSelected: boolean;
  type: GridItemType;
  categoryName: string;
  onPress: () => void;
}) => {
  const borderStyle = {
    borderWidth: isSelected ? 2 : 1,
    borderColor: isSelected 
      ? type === 'A'
        ? styles.colors.greenNormal
        : type === 'B'
          ? styles.colors.violetNormal
          : styles.colors.grayStrong
      : styles.colors.lineStrong,
  };

  return (
    <Pressable
      style={[
        styles.childCategoryItem,
        borderStyle,
        isSelected ? styles.selectedChildPadding : styles.normalChildPadding
      ]}
      onPress={onPress}
    >
      <Text style={[
        styles.childCategoryText,
        isSelected && styles.selectedChildCategoryText
      ]}>
        {categoryName}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 4,
    paddingTop: 4,
  },
  row: {
    flexDirection: 'row',
    gap: 4,
  },
  childCategoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingBottom: 14,
    paddingTop: 10,
  },
  bottomSpace: {
    width: 32,
    height: 100,
  },
  parentCategoryItem: {
    height: 80,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  borderContainer: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 16,
  },
  spacing: {
    width: 32,
    height: 32,
  },
  categoryImage: {
    margin: 8,
    width: 32,
    height: 32,
  },
  categoryText: {
    textAlign: 'center',
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: '#666666', // text-text-neutral 색상값으로 변경 필요
  },
  selectedCategoryText: {
    fontFamily: 'Pretendard-Bold',
    color: '#222222', // text-text-strong 색상값으로 변경 필요
  },
  managementItem: {
    minHeight: 100,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: '#F5F5F5', // background-gray 색상값으로 변경 필요
  },
  managementText: {
    textAlign: 'center',
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: '#666666', // text-text-neutral 색상값으로 변경 필요
  },
  childCategoryItem: {
    borderRadius: 12,
  },
  normalChildPadding: {
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  selectedChildPadding: {
    paddingHorizontal: 11,
    paddingVertical: 7,
  },
  childCategoryText: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    color: '#666666', // text-text-neutral 색상값으로 변경 필요
  },
  selectedChildCategoryText: {
    fontFamily: 'Pretendard-Bold',
    color: '#222222', // text-text-strong 색상값으로 변경 필요
  },
  colors: {
    greenNormal: '#4CAF50', // 실제 색상값으로 변경 필요
    violetNormal: '#9C27B0', // 실제 색상값으로 변경 필요
    grayStrong: '#757575', // 실제 색상값으로 변경 필요
    lineStrong: '#E0E0E0', // 실제 색상값으로 변경 필요
  }
});
