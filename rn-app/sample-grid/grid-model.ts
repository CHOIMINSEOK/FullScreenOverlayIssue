export type GridItemType = "A" | "B" | "C"

export type GridItem = {
  type: GridItemType;
  id: string;
  name: string;
  imageUrl: string;
  children: GridItem[];
  parent?: GridItem;
}

export function getParentCategoryEntities(gridItems: GridItem[]) {
    return gridItems.filter(item => item.parent === undefined);
  }
  
export function getChildCategoryEntities(gridItems: GridItem[], parentId: string) {
    return gridItems.filter(item => parentId === item.parent?.id);
}
  